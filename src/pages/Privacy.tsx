import React from 'react';
import { Shield, Eye, Lock, Database } from 'lucide-react';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-slate-900 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-6">
            <Shield className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Privacy <span className="text-blue-400">Policy</span>
          </h1>
          <p className="text-xl text-gray-300">
            Your privacy is important to us. Learn how we protect your data.
          </p>
        </div>

        <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 space-y-8">
          <div className="flex items-start space-x-4 p-4 bg-blue-900/20 border border-blue-800 rounded-lg">
            <Eye className="h-6 w-6 text-blue-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-blue-400 font-semibold mb-2">Effective Date</h3>
              <p className="text-gray-300 text-sm">July 26th, 2025</p>
            </div>
          </div>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">1</span>
              </div>
              Information We Collect
            </h2>
            <div className="text-gray-300 leading-relaxed space-y-3">
              <p>
                CyberSmart collects information to provide better services to our users. We collect information in the following ways:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Personal Information:</strong> Name, mobile number for certificate verification</li>
                <li><strong>Usage Data:</strong> How you interact with our platform and services</li>
                <li><strong>Device Information:</strong> Browser type, IP address, and device identifiers</li>
                <li><strong>Cookies:</strong> Small data files stored on your device to enhance user experience</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">2</span>
              </div>
              How We Use Your Information
            </h2>
            <div className="text-gray-300 leading-relaxed space-y-3">
              <p>We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Verify student identity for secure certificate access</li>
                <li>Provide, maintain, and improve our services</li>
                <li>Send important updates about your certificates</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Ensure the security and integrity of our platform</li>
                <li>Comply with legal obligations and prevent fraud</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center mr-3">
                <Lock className="h-5 w-5 text-white" />
              </div>
              Data Security
            </h2>
            <div className="text-gray-300 leading-relaxed space-y-3">
              <p>
                We implement comprehensive security measures to protect your personal information:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>SSL/TLS encryption for all data transmission</li>
                <li>Secure servers with regular security updates</li>
                <li>Access controls limiting who can view your information</li>
                <li>Regular security audits and vulnerability assessments</li>
                <li>Secure backup systems to prevent data loss</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center mr-3">
                <Database className="h-5 w-5 text-white" />
              </div>
              Data Retention
            </h2>
            <p className="text-gray-300 leading-relaxed">
              We retain your personal information only for as long as necessary to provide our services
              and fulfill the purposes outlined in this policy. Student certificate data is maintained
              for the duration of the educational program plus an additional period as required by
              educational regulations. You may request deletion of your data at any time, subject to
              legal and regulatory requirements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">5</span>
              </div>
              Information Sharing
            </h2>
            <div className="text-gray-300 leading-relaxed space-y-3">
              <p>
                We do not sell, trade, or otherwise transfer your personal information to third parties.
                We may share information only in the following circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>With your explicit consent</li>
                <li>To comply with legal obligations or court orders</li>
                <li>To protect our rights, property, or safety</li>
                <li>With service providers who assist in our operations (under strict confidentiality agreements)</li>
                <li>In connection with educational institutions for verification purposes</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">6</span>
              </div>
              Your Rights
            </h2>
            <div className="text-gray-300 leading-relaxed space-y-3">
              <p>You have the following rights regarding your personal information:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal requirements)</li>
                <li><strong>Portability:</strong> Request transfer of your data to another service provider</li>
                <li><strong>Objection:</strong> Object to certain types of processing of your information</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">7</span>
              </div>
              Cookies and Tracking
            </h2>
            <div className="text-gray-300 leading-relaxed space-y-3">
              <p>
                We use cookies and similar technologies to enhance your browsing experience:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Essential Cookies:</strong> Required for the platform to function properly</li>
                <li><strong>Performance Cookies:</strong> Help us understand how visitors interact with our site</li>
                <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
              </ul>
              <p className="mt-3">
                You can control cookie settings through your browser preferences, though this may affect
                platform functionality.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">8</span>
              </div>
              Updates to This Policy
            </h2>
            <p className="text-gray-300 leading-relaxed">
              We may update this Privacy Policy periodically to reflect changes in our practices or
              applicable law. We will notify users of any material changes through the platform or
              via email. Your continued use of CyberSmart after such updates constitutes acceptance
              of the revised policy.
            </p>
          </section>

        

          <div className="flex items-center space-x-4 p-4 bg-green-900/20 border border-green-800 rounded-lg">
            <Shield className="h-6 w-6 text-green-400 flex-shrink-0" />
            <div>
              <h3 className="text-green-400 font-semibold mb-1">Your Privacy Matters</h3>
              <p className="text-gray-300 text-sm">
                We are committed to protecting your privacy and handling your data with the highest level of security and care.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
