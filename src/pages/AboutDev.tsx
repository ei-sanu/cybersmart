import React from 'react';
import { ExternalLink, Code, Palette, Zap, Shield } from 'lucide-react';

const AboutDev = () => {
  return (
    <div className="min-h-screen bg-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Meet the <span className="text-blue-400">Developer</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate about creating secure, user-friendly digital solutions that make a difference.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Developer Info */}
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-white mb-4">Somesh</h2>
              <p className="text-blue-400 text-xl mb-4">Front-End Developer & Security Enthusiast</p>
              <p className="text-gray-300 leading-relaxed mb-6">
                With a passion for cybersecurity and modern web development, I specialize in creating
                secure, scalable applications that prioritize user experience and data protection.
                The CyberSmart platform represents my commitment to combining cutting-edge technology
                with practical solutions for educational institutions.
              </p>
              <a
                href="https://somesh.social"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                <ExternalLink className="h-5 w-5 mr-2" />
                Visit Portfolio
              </a>
            </div>
          </div>

          {/* Skills */}
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
            <h3 className="text-2xl font-bold text-white mb-6">Technical Expertise</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Code className="h-6 w-6 text-blue-400" />
                <span className="text-gray-300">React, TypeScript, Node.js</span>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="h-6 w-6 text-green-400" />
                <span className="text-gray-300">Cybersecurity & Data Protection</span>
              </div>
              <div className="flex items-center space-x-3">
                <Palette className="h-6 w-6 text-purple-400" />
                <span className="text-gray-300">UI/UX Design & Responsive Development</span>
              </div>
              <div className="flex items-center space-x-3">
                <Zap className="h-6 w-6 text-yellow-400" />
                <span className="text-gray-300">Performance Optimization</span>
              </div>
            </div>
          </div>
        </div>

        {/* Project Features */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              CyberSmart <span className="text-blue-400">Features</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Built with modern technologies and security best practices to ensure a seamless experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700 hover:border-blue-500 transition-colors">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Secure Architecture</h3>
              <p className="text-gray-400">
                Built with security-first principles, implementing best practices for data protection and user privacy.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700 hover:border-blue-500 transition-colors">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Fast Performance</h3>
              <p className="text-gray-400">
                Optimized for speed with efficient algorithms and modern web technologies for instant certificate access.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700 hover:border-blue-500 transition-colors">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                <Palette className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Modern Design</h3>
              <p className="text-gray-400">
                Clean, intuitive interface designed for all users, with special attention to mobile accessibility.
              </p>
            </div>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Technology <span className="text-blue-400">Stack</span>
            </h2>
            <p className="text-gray-300">
              Powered by cutting-edge technologies for optimal performance and security.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Code className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-white">React</h3>
              <p className="text-gray-400 text-sm">Frontend Framework</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-700 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Code className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-white">TypeScript</h3>
              <p className="text-gray-400 text-sm">Type Safety</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-teal-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Palette className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-white">Tailwind CSS</h3>
              <p className="text-gray-400 text-sm">Styling</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-white">Vite</h3>
              <p className="text-gray-400 text-sm">Build Tool</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutDev;
