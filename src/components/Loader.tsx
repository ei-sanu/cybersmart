import { Shield } from 'lucide-react';

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-slate-900 flex items-center justify-center z-50">
      <div className="text-center">
        <div className="relative w-20 h-20 mx-auto">
          {/* Outer spinning circle */}
          <div className="absolute inset-0 rounded-full border-4 border-blue-500/20"></div>
          <div className="absolute inset-0 rounded-full border-4 border-blue-500 border-t-transparent animate-spin"></div>

          {/* Inner spinning circle */}
          <div className="absolute inset-4 rounded-full border-4 border-blue-400/20"></div>
          <div className="absolute inset-4 rounded-full border-4 border-blue-400 border-t-transparent animate-spin" style={{ animationDuration: '0.75s' }}></div>

          {/* Centered Shield Icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Shield className="w-8 h-8 text-blue-400" />
          </div>
        </div>

        <div className="mt-6 space-y-2">
          <h2 className="text-2xl font-bold text-white">CyberSmart</h2>
          <div className="flex items-center justify-center gap-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
          <p className="text-gray-400 text-sm mt-2">Loading secure platform...</p>
        </div>
      </div>
    </div>
  );
};

export default Loader;
