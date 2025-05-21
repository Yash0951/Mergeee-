import Link from "next/link";

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-20 pb-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            How <span className="text-blue-600 dark:text-blue-400">Mergeee!</span> Works
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Merging PDFs has never been easier. Follow our simple process to combine your documents.
          </p>
        </div>
      </div>
      
      {/* Process Section */}
      <div className="bg-gray-50 dark:bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-24 relative">
              {/* Connecting Line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-blue-200 dark:bg-blue-900 -translate-x-1/2 hidden md:block"></div>
              
              {/* Step 1 */}
              <div className="relative flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2 text-center md:text-right order-2 md:order-1">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">1. Upload Your PDF Files</h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    Select the PDF files you want to merge from your device. You can upload up to 10 files 
                    at once, with a maximum size of 100MB per file. Our secure upload process ensures your 
                    documents remain private.
                  </p>
                </div>
                <div className="w-16 h-16 rounded-full bg-blue-600 dark:bg-blue-700 text-white flex items-center justify-center text-2xl font-bold z-10 order-1 md:order-2">
                  1
                </div>
                <div className="md:w-1/2 order-3">
                  <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700">
                    <div className="border-2 border-dashed border-blue-300 dark:border-blue-800 rounded-lg p-8 flex flex-col items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600 dark:text-blue-400 mb-4">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="17 8 12 3 7 8"></polyline>
                        <line x1="12" y1="3" x2="12" y2="15"></line>
                      </svg>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Upload your PDF files</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="relative flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2">
                  <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700">
                    <div className="space-y-3">
                      <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <div className="w-8 h-8 bg-red-100 dark:bg-red-900/30 rounded mr-3 flex-shrink-0"></div>
                        <div className="flex-grow">
                          <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
                        </div>
                        <div className="ml-2 text-gray-400">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="6 9 12 15 18 9"></polyline>
                          </svg>
                        </div>
                      </div>
                      <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <div className="w-8 h-8 bg-red-100 dark:bg-red-900/30 rounded mr-3 flex-shrink-0"></div>
                        <div className="flex-grow">
                          <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
                        </div>
                        <div className="ml-2 text-gray-400">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="6 9 12 15 18 9"></polyline>
                          </svg>
                        </div>
                      </div>
                      <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <div className="w-8 h-8 bg-red-100 dark:bg-red-900/30 rounded mr-3 flex-shrink-0"></div>
                        <div className="flex-grow">
                          <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
                        </div>
                        <div className="ml-2 text-gray-400">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="6 9 12 15 18 9"></polyline>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-16 h-16 rounded-full bg-blue-600 dark:bg-blue-700 text-white flex items-center justify-center text-2xl font-bold z-10">
                  2
                </div>
                <div className="md:w-1/2 text-center md:text-left">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">2. Arrange Your Files</h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    Drag and drop to rearrange your PDF files in the order you want them to appear in the 
                    final merged document. You can preview each file to ensure you're getting the correct order.
                  </p>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="relative flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2 text-center md:text-right order-2 md:order-1">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">3. Merge and Download</h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    Click the "Merge PDFs" button and let our powerful engine combine your documents. 
                    Once processing is complete, download your newly merged PDF file with a single click.
                    The merged file will maintain the quality of your original documents.
                  </p>
                </div>
                <div className="w-16 h-16 rounded-full bg-blue-600 dark:bg-blue-700 text-white flex items-center justify-center text-2xl font-bold z-10 order-1 md:order-2">
                  3
                </div>
                <div className="md:w-1/2 order-3">
                  <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700">
                    <div className="flex flex-col items-center">
                      <div className="w-full h-8 bg-blue-600 dark:bg-blue-700 rounded-lg mb-4 flex items-center justify-center">
                        <p className="text-white text-sm font-medium">Merge PDFs</p>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600 dark:text-blue-400 mb-2">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="7 10 12 15 17 10"></polyline>
                        <line x1="12" y1="15" x2="12" y2="3"></line>
                      </svg>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Download merged PDF</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Features Section */}
      <div className="bg-white dark:bg-gray-900 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">Key Features</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Easy to Use",
                  description: "Our simple, intuitive interface makes merging PDFs accessible to everyone, regardless of technical skill.",
                  icon: "🌟"
                },
                {
                  title: "Fast Processing",
                  description: "Advanced algorithms ensure your PDFs are merged quickly, saving you valuable time.",
                  icon: "⚡"
                },
                {
                  title: "Secure & Private",
                  description: "Files are processed in your browser and automatically deleted after merging to ensure your privacy.",
                  icon: "🔒"
                },
                {
                  title: "High Quality",
                  description: "The merged PDF maintains the quality and formatting of your original documents.",
                  icon: "✨"
                }
              ].map((feature, i) => (
                <div key={i} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                  <div className="text-3xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="bg-blue-600 dark:bg-blue-700 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to merge your PDFs?</h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">
            Try our simple, secure PDF merging tool today and streamline your document workflow.
          </p>
          <Link 
            href="/merge" 
            className="px-8 py-4 bg-white hover:bg-gray-100 text-blue-600 font-semibold rounded-lg shadow-lg transition-all duration-200 inline-block"
          >
            Get Started Now
          </Link>
        </div>
      </div>
    </div>
  );
} 