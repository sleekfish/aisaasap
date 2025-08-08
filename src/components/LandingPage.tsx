import React, { useState } from 'react';
import { 
  FileText, 
  Brain, 
  Shield, 
  Zap, 
  Globe, 
  Users, 
  Award,
  ChevronRight,
  Play,
  CheckCircle
} from 'lucide-react';

interface LandingPageProps {
  onLogin: (userData: any) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onLogin }) => {
  const [showDemo, setShowDemo] = useState(false);

  const handleGetStarted = () => {
    // Mock login for demo
    onLogin({
      name: 'Demo User',
      email: 'demo@intellidoc.com',
      plan: 'Enterprise',
      industry: 'Healthcare'
    });
  };

  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'AI-Powered Analysis',
      description: 'GPT-4 and vision models process documents with 95%+ accuracy'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Enterprise Security',
      description: 'HIPAA, SOC 2, GDPR compliant with end-to-end encryption'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Lightning Fast',
      description: 'Process documents in under 3 seconds with 99.9% uptime'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: '15+ Languages',
      description: 'Native support for global teams and international documents'
    }
  ];

  const industries = [
    {
      name: 'Healthcare',
      description: 'Medical record summarization, research analysis, patient reports',
      icon: '🏥',
      color: 'bg-red-50 border-red-200'
    },
    {
      name: 'Sales',
      description: 'Contract analysis, proposal creation, lead qualification',
      icon: '📈',
      color: 'bg-green-50 border-green-200'
    },
    {
      name: 'Recruitment',
      description: 'Resume screening, candidate profiles, job optimization',
      icon: '👥',
      color: 'bg-blue-50 border-blue-200'
    },
    {
      name: 'Content',
      description: 'Article summarization, research compilation, adaptation',
      icon: '✍️',
      color: 'bg-purple-50 border-purple-200'
    },
    {
      name: 'Education',
      description: 'Academic analysis, study guides, curriculum processing',
      icon: '🎓',
      color: 'bg-yellow-50 border-yellow-200'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              IntelliDoc Pro
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
              Revolutionize your document processing with AI-powered intelligence. 
              From medical records to sales contracts, we make every document work smarter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleGetStarted}
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center"
              >
                Start Free Trial
                <ChevronRight className="ml-2 w-5 h-5" />
              </button>
              <button
                onClick={() => setShowDemo(true)}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors duration-200 flex items-center justify-center"
              >
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Powered by Advanced AI
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge technology that understands, analyzes, and transforms your documents
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-xl shadow-sm border hover:shadow-md transition-shadow duration-300"
              >
                <div className="text-blue-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Industries Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Built for Every Industry
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized workflows and compliance features tailored to your sector
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div 
                key={index} 
                className={`p-8 rounded-xl border-2 ${industry.color} hover:shadow-lg transition-all duration-300 cursor-pointer group`}
              >
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {industry.name}
                </h3>
                <p className="text-gray-600">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-24 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="text-white">
              <div className="text-4xl font-bold mb-2">95%+</div>
              <div className="text-blue-100">Processing Accuracy</div>
            </div>
            <div className="text-white">
              <div className="text-4xl font-bold mb-2">&lt;3s</div>
              <div className="text-blue-100">Average Response Time</div>
            </div>
            <div className="text-white">
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <div className="text-blue-100">Uptime Guarantee</div>
            </div>
            <div className="text-white">
              <div className="text-4xl font-bold mb-2">100MB</div>
              <div className="text-blue-100">Max Document Size</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Documents?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of professionals who trust IntelliDoc Pro for their document processing needs
          </p>
          <button
            onClick={handleGetStarted}
            className="bg-blue-600 text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Get Started Now
          </button>
          <div className="mt-8 flex items-center justify-center space-x-6 text-sm text-gray-400">
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              14-day free trial
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              No credit card required
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              Cancel anytime
            </div>
          </div>
        </div>
      </div>

      {/* Demo Modal */}
      {showDemo && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold">Product Demo</h3>
              <button
                onClick={() => setShowDemo(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>
            <div className="bg-gray-100 aspect-video rounded-lg flex items-center justify-center mb-6">
              <div className="text-center">
                <Play className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">Demo video would play here</p>
              </div>
            </div>
            <button
              onClick={handleGetStarted}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
            >
              Try IntelliDoc Pro Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;