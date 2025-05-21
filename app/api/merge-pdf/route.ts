import { NextRequest, NextResponse } from 'next/server';
import { checkUserGenerationLimit } from '@/app/lib/rateLimit';
import PDFMerger from 'pdf-merger-js';

// Set bodyParser config to handle larger payloads, though Vercel has hard limits
export const config = {
  api: {
    bodyParser: false, // Disables body parsing, we'll handle it manually
    responseLimit: false, // Remove response size limit
  },
};

export async function POST(req: NextRequest) {
  try {
    // Check if user has reached generation limit
    const rateLimit = await checkUserGenerationLimit();
    
    if (!rateLimit.canGenerate) {
      return NextResponse.json(
        { 
          error: 'Generation limit exceeded', 
          nextResetTime: rateLimit.nextResetTime
        },
        { status: 429 }
      );
    }

    // Check content length header
    const contentLength = req.headers.get('content-length');
    if (contentLength) {
      const size = parseInt(contentLength, 10);
      // 4.5MB (4.5 * 1024 * 1024 = 4718592 bytes) is Vercel's limit
      if (size > 4.5 * 1024 * 1024) {
        return NextResponse.json(
          { error: 'Files too large. The total size must be under 4.5MB.' },
          { status: 413 }
        );
      }
    }

    // Process the file upload
    let formData;
    try {
      formData = await req.formData();
    } catch (error) {
      console.error('Error parsing form data:', error);
      // Check if error is related to payload size
      if (error instanceof Error && 
          (error.message.includes('size') || error.message.includes('large'))) {
        return NextResponse.json(
          { error: 'Files too large. The total size must be under 4.5MB.' },
          { status: 413 }
        );
      }
      return NextResponse.json(
        { error: 'Invalid form data' },
        { status: 400 }
      );
    }
    
    const files = formData.getAll('files');
    
    if (!files || files.length === 0) {
      return NextResponse.json(
        { error: 'No files provided' },
        { status: 400 }
      );
    }

    // Validate total file size
    let totalSize = 0;
    for (const file of files) {
      if (file instanceof File) {
        totalSize += file.size;
      }
    }
    
    // 4.5MB Vercel limit
    if (totalSize > 4.5 * 1024 * 1024) {
      return NextResponse.json(
        { error: 'Files too large. The total size must be under 4.5MB.' },
        { status: 413 }
      );
    }

    // Initialize the PDF merger
    const merger = new PDFMerger();
    
    // Add each file to the merger
    try {
      for (const file of files) {
        if (file instanceof File) {
          const buffer = await file.arrayBuffer();
          await merger.add(buffer);
        }
      }
    } catch (error) {
      console.error('Error processing PDF files:', error);
      return NextResponse.json(
        { error: 'Error processing PDF files. Please ensure all files are valid PDFs.' },
        { status: 400 }
      );
    }
    
    // Merge the PDFs
    let mergedPdf;
    try {
      mergedPdf = await merger.saveAsBuffer();
    } catch (error) {
      console.error('Error merging PDFs:', error);
      return NextResponse.json(
        { error: 'Failed to merge PDFs. Please try again with different files.' },
        { status: 500 }
      );
    }
    
    // Return the merged PDF
    return new NextResponse(mergedPdf, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="merged-document.pdf"',
      },
    });
  } catch (error) {
    console.error('Error merging PDFs:', error);
    // Check if error might be related to payload size
    if (error instanceof Error && 
        (error.message.includes('body size') || 
         error.message.includes('payload') || 
         error.message.includes('large'))) {
      return NextResponse.json(
        { error: 'Files too large. The total size must be under 4.5MB.' },
        { status: 413 }
      );
    }
    return NextResponse.json(
      { error: 'Failed to merge PDFs' },
      { status: 500 }
    );
  }
} 