import { Mail, MapPin, Send } from 'lucide-react';
import React, { useState } from 'react';

const ContactUs = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target as HTMLFormElement);

    formData.append("access_key", "9c4dbdf0-8c38-47a5-aab1-9e3b06b196db");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      (event.target as HTMLFormElement).reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get in <span className="text-blue-400">Touch</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have questions about your certificate or need technical support?
            We're here to help you with all your inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
              <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Email</h3>
                    <p className="text-gray-400">somesh.biswal2024@lpu.in</p>
                    <p className="text-gray-400">someshranjanbiswal13678@gmail.com</p>
                  </div>
                </div>
                <br></br>
                <br></br>



                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Address</h3>
                    <p className="text-gray-400">
                      UNi - 144411, Lovely Professional University, Phagwara, Punjab, India<br>
                      </br><br />
                      Home - Dolomandapa Sahi , Dhenkanal, Odisha, India
                    </p>
                  </div>
                </div>



              </div>
            </div>
          </div>

          {/* New Contact Form */}
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
            <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>

            <form onSubmit={onSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
              >
                <Send className="h-5 w-5 mr-2" />
                Send Message
              </button>

              {result && (
                <div className="mt-4 text-center text-gray-300">
                  {result}
                </div>
              )}
            </form>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Frequently Asked <span className="text-blue-400">Questions</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
              <h3 className="text-lg font-semibold text-white mb-3">
                How do I download my certificate?
              </h3>
              <p className="text-gray-400">
                Simply enter your 10-digit mobile number or name in the search box on the home page.
                Once verified, you can download your certificate instantly.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
              <h3 className="text-lg font-semibold text-white mb-3">
                What if I can't find my certificate?
              </h3>
              <p className="text-gray-400">
                If you can't find your certificate using your mobile number, try searching by name.
                If you still can't find it, contact our support team.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
              <h3 className="text-lg font-semibold text-white mb-3">
                Is my data secure?
              </h3>
              <p className="text-gray-400">
                Yes, we use advanced encryption and security measures to protect your personal information
                and certificates. Your data is completely secure with us.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
              <h3 className="text-lg font-semibold text-white mb-3">
                Can I get a duplicate certificate?
              </h3>
              <p className="text-gray-400">
                You can download your certificate multiple times from our platform.
                Each download provides you with the original high-quality PDF.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
