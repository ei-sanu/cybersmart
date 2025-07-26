import { AlertCircle, CheckCircle, Download, Phone, Search, User } from 'lucide-react';
import { useState } from 'react';
import { Student, studentsData } from '../data/students';

const GALLERY_IMAGES = [
  {
    url: 'https://lh3.googleusercontent.com/d/1S-dNlNiS0cKhicSgQ5rwmq9C3ISnNd2_',
    alt: 'Training Session 1',
  },
  {
    url: 'https://lh3.googleusercontent.com/d/14s79cGCKvZx7_1aZ3XRsmbdPcRaveHQf',
    alt: 'Training Session 2',
  },
  {
    url: 'https://lh3.googleusercontent.com/d/19X_8c6a1ZDFTp_g2NpKCMdaixfJShhFG',
    alt: 'Training Session 3',
  },
];

const Home = () => {
  const [searchType, setSearchType] = useState<'mobile' | 'name'>('mobile');
  const [searchValue, setSearchValue] = useState('');
  const [foundStudent, setFoundStudent] = useState<Student | null>(null);
  const [showNoResults, setShowNoResults] = useState(false);
  const [downloading, setDownloading] = useState(false);

  const handleSearch = () => {
    setShowNoResults(false);
    setFoundStudent(null);

    if (searchType === 'mobile') {
      if (searchValue.length !== 10) {
        alert('Please enter a valid 10-digit mobile number');
        return;
      }
      const student = studentsData.find(s => s.mobile === searchValue);
      if (student) {
        setFoundStudent(student);
      } else {
        setShowNoResults(true);
      }
    } else {
      const student = studentsData.find(s =>
        s.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      if (student) {
        setFoundStudent(student);
      } else {
        alert('No certificate found for this name. Please check the spelling.');
      }
    }
  };

  const handleDownload = async () => {
    if (!foundStudent) return;

    setDownloading(true);
    try {
      // Simulate download process
      const link = document.createElement('a');
      link.href = foundStudent.certificateUrl;
      link.download = `${foundStudent.name}_Certificate.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      alert('Error downloading certificate. Please try again.');
    } finally {
      setDownloading(false);
    }
  };

  const switchToNameSearch = () => {
    setSearchType('name');
    setSearchValue('');
    setShowNoResults(false);
    setFoundStudent(null);
  };

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-slate-900"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
              Access Your
              <span className="text-blue-400 block">Digital Certificates</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Secure, fast, and reliable certificate verification system.
              Enter your mobile number or name to instantly access and download your certificates.
            </p>
          </div>

          {/* Search Section */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
              {/* Search Type Toggle */}
              <div className="flex mb-6 bg-slate-700 rounded-lg p-1">
                <button
                  onClick={() => setSearchType('mobile')}
                  className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${searchType === 'mobile'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-400 hover:text-white'
                    }`}
                >
                  <Phone className="h-4 w-4 inline mr-2" />
                  Mobile Number
                </button>
                <button
                  onClick={() => setSearchType('name')}
                  className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${searchType === 'name'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-400 hover:text-white'
                    }`}
                >
                  <User className="h-4 w-4 inline mr-2" />
                  Name
                </button>
              </div>

              {/* Search Input */}
              <div className="relative mb-6">
                <input
                  type={searchType === 'mobile' ? 'tel' : 'text'}
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  placeholder={
                    searchType === 'mobile'
                      ? 'Enter 10-digit mobile number'
                      : 'Enter student name'
                  }
                  className="w-full px-4 py-3 pl-12 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  maxLength={searchType === 'mobile' ? 10 : undefined}
                />
                <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
              </div>

              <button
                onClick={handleSearch}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
              >
                <Search className="h-5 w-5 mr-2" />
                Search Certificate
              </button>

              {/* No Results Message */}
              {showNoResults && (
                <div className="mt-6 p-4 bg-yellow-900/20 border border-yellow-800 rounded-lg">
                  <div className="flex items-center text-yellow-400 mb-3">
                    <AlertCircle className="h-5 w-5 mr-2" />
                    <span className="font-medium">No results found</span>
                  </div>
                  <p className="text-gray-300 text-sm mb-3">
                    No certificate found for mobile number: {searchValue}
                  </p>
                  <button
                    onClick={switchToNameSearch}
                    className="bg-yellow-600 hover:bg-yellow-700 text-white text-sm font-medium py-2 px-4 rounded-md transition-colors"
                  >
                    Search by Name Instead
                  </button>
                </div>
              )}

              {/* Found Student */}
              {foundStudent && (
                <div className="mt-6 p-6 bg-green-900/20 border border-green-800 rounded-lg">
                  <div className="flex items-center text-green-400 mb-4">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    <span className="font-medium">Certificate Found!</span>
                  </div>

                  <div className="bg-slate-800 rounded-lg p-4 mb-4">
                    <h3 className="text-lg font-semibold text-white mb-2">Student Details</h3>
                    <div className="space-y-2 text-gray-300">
                      <p><span className="text-gray-400">Name:</span> {foundStudent.name}</p>
                      <p><span className="text-gray-400">Mobile:</span> {foundStudent.mobile}</p>
                    </div>
                  </div>

                  <p className="text-gray-300 text-sm mb-4">
                    Please verify the details above match your information before downloading.
                  </p>

                  <button
                    onClick={handleDownload}
                    disabled={downloading}
                    className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-600 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
                  >
                    <Download className="h-5 w-5 mr-2" />
                    {downloading ? 'Downloading...' : 'Download Certificate'}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Security <span className="text-blue-400">Features</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our platform provides comprehensive security and ease of access to help you manage your digital certificates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700 hover:border-blue-500 transition-colors">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Search className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Quick Search</h3>
              <p className="text-gray-400">
                Search by mobile number or name for instant certificate access with advanced filtering.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700 hover:border-blue-500 transition-colors">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Secure Verification</h3>
              <p className="text-gray-400">
                Multi-step verification process ensures only authorized access to certificates.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700 hover:border-blue-500 transition-colors">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                <Download className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Instant Download</h3>
              <p className="text-gray-400">
                Download your certificates instantly in high-quality PDF format for immediate use.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Training <span className="text-blue-400">Gallery</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Glimpses from our comprehensive cybersecurity training sessions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {GALLERY_IMAGES.map((image, index) => (
              <div
                key={index}
                className="relative aspect-video overflow-hidden rounded-xl border-2 border-blue-500"
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover brightness-110 contrast-125"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
