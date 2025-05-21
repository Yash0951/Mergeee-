import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-20 pb-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About <span className="text-blue-600 dark:text-blue-400">Mergeee!</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            We're on a mission to simplify document management for everyone.
          </p>
        </div>
      </div>
      
      {/* Our Story Section */}
      <div className="bg-gray-50 dark:bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Our Story</h2>
            <div className="space-y-6 text-gray-600 dark:text-gray-300">
              <p>
                PDFMerge was born out of frustration with overly complicated PDF tools that required 
                software downloads, complicated interfaces, or expensive subscriptions.
              </p>
              <p>
                Founded in 2023, our team of document management enthusiasts set out to create a simple, 
                accessible solution for one of the most common PDF tasks: merging multiple documents into one.
              </p>
              <p>
                Today, PDFMerge is used by thousands of professionals, students, and anyone who needs 
                to quickly combine PDF files without the hassle of complex software.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Our Values Section */}
      <div className="bg-white dark:bg-gray-900 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">Our Values</h2>
            
            <div className="grid md:grid-cols-2 gap-10">
              {[
                {
                  title: "Simplicity",
                  description: "We believe that powerful tools don't need to be complicated. Our goal is to make document management accessible to everyone.",
                  icon: "✨"
                },
                {
                  title: "Privacy",
                  description: "Your documents are yours alone. We never store your files longer than needed for processing, and we value your privacy above all.",
                  icon: "🔒"
                },
                {
                  title: "Accessibility",
                  description: "Great tools should be available to everyone. We strive to make our platform accessible across all devices and abilities.",
                  icon: "🌍"
                },
                {
                  title: "Innovation",
                  description: "While we keep our tools simple, we're always looking for ways to improve and innovate in the document management space.",
                  icon: "💡"
                }
              ].map((value, i) => (
                <div key={i} className="flex gap-4">
                  <div className="text-3xl">{value.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{value.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Team Section - Optional, simplified version */}
      <div className="bg-gray-50 dark:bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Team</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-12">
              We're a passionate group of developers, designers, and document management experts
              committed to making your workflow simpler.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="w-20 h-20 bg-gray-200 dark:bg-gray-700 rounded-full mb-4"></div>
                  <p className="font-semibold text-gray-900 dark:text-white">Team Member {i}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="bg-blue-600 dark:bg-blue-700 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to try PDFMerge?</h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">
            Join thousands of satisfied users and start merging your PDFs today.
          </p>
          <Link 
            href="/merge" 
            className="px-8 py-4 bg-white hover:bg-gray-100 text-blue-600 font-semibold rounded-lg shadow-lg transition-all duration-200 inline-block"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
} 