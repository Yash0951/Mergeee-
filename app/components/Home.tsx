import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-20 pb-32">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
                Merge PDFs <span className="text-blue-600 dark:text-blue-400">Effortlessly</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-xl">
                Combine multiple PDFs into a single document in seconds. No software installation required.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/merge" 
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg shadow-blue-600/30 transition-all duration-200 text-center"
              >
                Get Started
              </Link>
              <Link 
                href="/how-it-works" 
                className="px-8 py-4 bg-white hover:bg-gray-100 text-blue-600 font-semibold rounded-lg border border-blue-200 shadow-sm transition-all duration-200 text-center dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-blue-400 dark:border-gray-700"
              >
                How It Works
              </Link>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-10 w-10 rounded-full bg-gray-300 dark:bg-gray-700 border-2 border-white dark:border-gray-800"></div>
                ))}
              </div>
              {/* <p className="text-sm text-gray-600 dark:text-gray-300">Trusted by 10,000+ users worldwide</p> */}
            </div>
          </div>
          
          <div className="flex-1 relative block md:flex mt-10 md:mt-0">
            <div className="relative h-[400px] w-full max-w-[500px] mx-auto">
              <div className="absolute top-0 right-0 h-[350px] w-[250px] bg-white dark:bg-gray-800 rounded-lg shadow-2xl rotate-6 z-10 border border-gray-100 dark:border-gray-700"></div>
              <div className="absolute top-5 right-10 h-[350px] w-[250px] bg-white dark:bg-gray-800 rounded-lg shadow-2xl -rotate-3 z-20 border border-gray-100 dark:border-gray-700"></div>
              <div className="absolute top-10 right-5 h-[350px] w-[250px] bg-white dark:bg-gray-800 rounded-lg shadow-2xl rotate-1 z-30 border border-gray-100 dark:border-gray-700 flex flex-col p-4">
                <div className="w-full h-8 bg-blue-100 dark:bg-blue-900/30 rounded mb-3"></div>
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-full h-12 bg-gray-100 dark:bg-gray-700 rounded-lg mb-3 flex items-center px-3">
                    <div className="w-8 h-8 bg-red-100 dark:bg-red-900/30 rounded mr-3"></div>
                    <div className="h-3 bg-gray-200 dark:bg-gray-600 rounded flex-1"></div>
                  </div>
                ))}
                <div className="mt-auto w-full h-12 bg-blue-600 dark:bg-blue-500 rounded-lg flex items-center justify-center">
                  <div className="h-3 w-24 bg-white/70 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Features Section */}
      <div className="bg-white dark:bg-gray-900 py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Why Choose Our Mergeee!</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We provide the simplest and most secure way to manage your PDF documents
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Quick Merging",
                description: "Combine multiple PDFs into one document in seconds with our lightning-fast processing engine.",
                icon: "⚡"
              },
              {
                title: "Secure & Private",
                description: "Your files are automatically deleted after processing. We never store your personal documents.",
                icon: "🔒"
              },
              {
                title: "Cloud-Based",
                description: "No downloads or installations needed. Access our tool from any device with an internet connection.",
                icon: "☁️"
              }
            ].map((feature, i) => (
              <div key={i} className="bg-blue-50 dark:bg-gray-800 p-8 rounded-xl hover:shadow-xl transition-all duration-300 border border-blue-100 dark:border-gray-700">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* How It Works Section */}
      <div className="bg-gray-50 dark:bg-gray-800 py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Merging PDFs has never been easier
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            {[
              {
                title: "Upload",
                description: "Select multiple PDFs from your device to upload",
                number: "1"
              },
              {
                title: "Arrange",
                description: "Drag and drop to organize the pages in your preferred order",
                number: "2"
              },
              {
                title: "Merge",
                description: "Click 'Merge' and download your combined PDF document",
                number: "3"
              }
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-blue-600 dark:bg-blue-500 text-white flex items-center justify-center text-2xl font-bold mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Call To Action */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-700 dark:to-blue-900 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Merge Your PDFs?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied users who simplify their document workflow every day.
          </p>
          <Link 
            href="/merge" 
            className="px-8 py-4 bg-white hover:bg-gray-100 text-blue-600 font-semibold rounded-lg shadow-lg transition-all duration-200 inline-block"
          >
            Start Merging Now
          </Link>
        </div>
      </div>
      
      {/* Testimonials */}
      <div className="bg-white dark:bg-gray-900 py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">What Our Users Say</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                quote: "As a Researcher, I merge worksheets daily. This is the fastest and most reliable tool I've found.",
                name: "Gaurav Singh",
                title: "Researcher"
              },
              {
                quote: "This tool saved me so much time! I was able to combine all my reports into one PDF in seconds.",
                name: "Yash Soni",
                title: "Artist"
              },
              {
                quote: "The interface is so intuitive. It made my workflow smooth and soo easy to manage my documents.",
                name: "Tarang Gupta",
                title: "CEO"
              },  
            ].map((testimonial, i) => (
              <div key={i} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700">
                <p className="text-gray-600 dark:text-gray-300 mb-4">&quot;{testimonial.quote}&quot;</p>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Mergeee!</h3>
              <p className="text-gray-600 dark:text-gray-300">Simple, secure PDF merging</p>
            </div>
            
            <div className="flex gap-8">
              <Link href="/about" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
                About
              </Link>
              <Link href="/privacy" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
                Privacy
              </Link>
              <Link href="/terms" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
                Terms
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
                Contact
              </Link>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-gray-500 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} Mergeee!. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
} 