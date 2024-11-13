import { Link } from 'react-router-dom';
import { CheckCircle2, Layout, Clock, Sparkles, ArrowRight } from 'lucide-react';
import FeatureCard from './Featurecard';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 overflow-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/70 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
            TaskMaster
          </span>
          <Link
            to="#"
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-all duration-300"
          >
            Login
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="text-center relative">
          {/* Decorative background */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-gradient-to-r from-indigo-300/30 to-purple-300/30 rounded-full blur-3xl" />
          
          <h1 className="relative text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
            Organize Your Life with
            <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600"> 
              TaskMaster
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            A beautiful and intuitive todo app that helps you stay organized 
            and boost your productivity.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/app"
              className="group inline-flex items-center px-8 py-4 rounded-full text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              to="/#"
              className="inline-flex items-center px-8 py-4 rounded-full text-gray-700 bg-white/80 hover:bg-white transform hover:scale-105 transition-all duration-300 shadow-md"
            >
              Watch Demo
              <Sparkles className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-32 grid md:grid-cols-3 gap-8 relative">
          {/* Features background blur */}
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-100/50 to-purple-100/50 rounded-3xl blur-xl" />
          
          <FeatureCard
            icon={<Layout className="w-8 h-8 text-indigo-600" />}
            title="Beautiful Interface"
            description="Enjoy a clean and modern design that makes task management a pleasure."
          />
          <FeatureCard
            icon={<CheckCircle2 className="w-8 h-8 text-indigo-600" />}
            title="Stay Organized"
            description="Keep track of your tasks with an intuitive and easy-to-use interface."
          />
          <FeatureCard
            icon={<Clock className="w-8 h-8 text-indigo-600" />}
            title="Boost Productivity"
            description="Focus on what matters most and get things done efficiently."
          />
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 text-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-600">
            © 2024 TaskMaster. Made with{' '}
            <span className="text-red-500">❤️</span>
          </p>
        </div>
      </footer>
    </div>
  );
};



export default LandingPage;