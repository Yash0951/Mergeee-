export default function Contact() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-20 pb-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Contact <span className="text-blue-600 dark:text-blue-400">Us</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            We&apos;d love to hear from you. Get in touch with our team.
          </p>
        </div>
      </div>
      
      {/* Contact Form */}
      <div className="bg-gray-50 dark:bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 bg-blue-600 dark:bg-blue-700 text-white p-8">
                  <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                  <p className="mb-12 opacity-90">
                    Fill out the form and our team will get back to you within 24 hours.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="opacity-90">+1 (555) 123-4567</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="opacity-90">support@pdfmerge.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      <div>
                        <p className="font-medium">Location</p>
                        <p className="opacity-90">123 PDF Street, Digital City, CA 94000</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-12 flex gap-4">
                    <a href="#" className="bg-blue-500 hover:bg-blue-400 rounded-full p-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </a>
                    <a href="#" className="bg-blue-500 hover:bg-blue-400 rounded-full p-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                      </svg>
                    </a>
                    <a href="#" className="bg-blue-500 hover:bg-blue-400 rounded-full p-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </a>
                  </div>
                </div>
                
                <div className="md:w-2/3 p-8">
                  <form>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">First Name</label>
                        <input 
                          type="text" 
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Last Name</label>
                        <input 
                          type="text" 
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
                          placeholder="Doe"
                        />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                      <input 
                        type="email" 
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
                        placeholder="john.doe@example.com"
                      />
                    </div>
                    
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Subject</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
                        placeholder="How can we help?"
                      />
                    </div>
                    
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                      <textarea 
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white h-32"
                        placeholder="Your message here..."
                      ></textarea>
                    </div>
                    
                    <button 
                      type="submit"
                      className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-all duration-200"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* FAQ Section */}
      <div className="bg-white dark:bg-gray-900 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              {[
                {
                  question: "How quickly will you respond to my message?",
                  answer: "We typically respond to all inquiries within 24 hours during business days."
                },
                {
                  question: "Do you offer customer support via phone?",
                  answer: "Yes, our customer support team is available Monday to Friday, 9am to 5pm PST."
                },
                {
                  question: "Can I request a feature for PDFMerge?",
                  answer: "Absolutely! We love hearing from our users. Please use the contact form to send us your ideas."
                },
                {
                  question: "How do I report a bug?",
                  answer: "You can report bugs through our contact form. Please provide as much detail as possible, including steps to reproduce the issue."
                }
              ].map((faq, i) => (
                <div key={i} className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 