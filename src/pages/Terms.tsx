import React from 'react';
import { FileText, Shield, AlertTriangle } from 'lucide-react';

const Terms = () => {
  return (
    <div className="min-h-screen bg-slate-900 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-6">
            <FileText className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Terms & <span className="text-blue-400">Conditions</span>
          </h1>
          <p className="text-xl text-gray-300">
            Please read these terms carefully before using our services.
          </p>
        </div>

        <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 space-y-8">
          <div className="flex items-start space-x-4 p-4 bg-yellow-900/20 border border-yellow-800 rounded-lg">
            <AlertTriangle className="h-6 w-6 text-yellow-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-yellow-400 font-semibold mb-2">Last Updated</h3>
              <p className="text-gray-300 text-sm">July 26th, 2025</p>
            </div>
          </div>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">1</span>
              </div>
              Acceptance of Terms
            </h2>
            <p className="text-gray-300 leading-relaxed">
              By accessing and using the CyberSmart certificate platform, you accept and agree to be bound by
              the terms and provision of this agreement. If you do not agree to abide by the above, please do
              not use this service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">2</span>
              </div>
              Use License
            </h2>
            <div className="text-gray-300 leading-relaxed space-y-3">
              <p>
                Permission is granted to temporarily access and download certificates from CyberSmart for
                personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>modify or copy the certificates for commercial purposes</li>
                <li>use the materials for any commercial purpose or for any public display</li>
                <li>attempt to reverse engineer any software contained on the platform</li>
                <li>remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">3</span>
              </div>
              Certificate Authenticity
            </h2>
            <p className="text-gray-300 leading-relaxed">
              All certificates available through this platform are authentic and issued by authorized educational
              institutions. Users are responsible for verifying they are downloading their own certificates.
              Any attempt to access certificates belonging to other individuals is strictly prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">4</span>
              </div>
              User Responsibilities
            </h2>
            <div className="text-gray-300 leading-relaxed space-y-3">
              <p>Users of the CyberSmart platform agree to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide accurate information when searching for certificates</li>
                <li>Use the platform only for legitimate certificate retrieval purposes</li>
                <li>Maintain the confidentiality of their personal information</li>
                <li>Report any technical issues or suspicious activities immediately</li>
                <li>Not share login credentials or access information with unauthorized parties</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">5</span>
              </div>
              Privacy and Data Protection
            </h2>
            <p className="text-gray-300 leading-relaxed">
              We are committed to protecting your privacy. Personal information collected through the platform
              is used solely for certificate verification and delivery purposes. We implement appropriate
              technical and organizational measures to protect your data against unauthorized access, alteration,
              disclosure, or destruction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">6</span>
              </div>
              Limitation of Liability
            </h2>
            <p className="text-gray-300 leading-relaxed">
              In no event shall CyberSmart or its suppliers be liable for any damages (including, without
              limitation, damages for loss of data or profit, or due to business interruption) arising out
              of the use or inability to use the materials on CyberSmart's platform, even if CyberSmart or
              an authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">7</span>
              </div>
              Technical Requirements
            </h2>
            <div className="text-gray-300 leading-relaxed space-y-3">
              <p>To use the CyberSmart platform effectively, users must have:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>A modern web browser with JavaScript enabled</li>
                <li>Stable internet connection for certificate downloads</li>
                <li>PDF reader software to view downloaded certificates</li>
                <li>Valid mobile number or name for certificate verification</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">8</span>
              </div>
              Modifications
            </h2>
            <p className="text-gray-300 leading-relaxed">
              CyberSmart may revise these terms of service at any time without notice. By using this platform,
              you are agreeing to be bound by the then current version of these terms of service. We will
              notify users of any significant changes to these terms through the platform.
            </p>
          </section>


          <div className="flex items-center space-x-4 p-4 bg-blue-900/20 border border-blue-800 rounded-lg">
            <Shield className="h-6 w-6 text-blue-400 flex-shrink-0" />
            <div>
              <h3 className="text-blue-400 font-semibold mb-1">Agreement</h3>
              <p className="text-gray-300 text-sm">
                By using CyberSmart, you acknowledge that you have read, understood, and agree to  be bound by these terms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
