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
  CheckCircle,
  Star,
  ArrowRight
} from 'lucide-react';

interface LandingPageProps {
  onLogin: (userData: any) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onLogin }) => {
  const [showDemo, setShowDemo] = useState(false);

  const handleGetStarted = () => {
    onLogin({
      name: 'Demo User',
      email: 'demo@intellidoc.com',
      plan: 'Enterprise',
      industry: 'Healthcare'
    });
  };

  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'AI-Powered Analysis',
      description: 'GPT-4 and Perplexity AI process documents with 98%+ accuracy and real-time fact-checking'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Enterprise Security',
      description: 'HIPAA, SOC 2, GDPR compliant with military-grade encryption and zero-trust architecture'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Lightning Fast',
      description: 'Process documents in under 2 seconds with 99.99% uptime and global CDN delivery'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: '25+ Languages',
      description: 'Native support for global teams with real-time translation and cultural context'
    }
  ];

  const industries = [
    {
      name: 'Healthcare',
      description: 'Medical record analysis, clinical research, patient report generation with HIPAA compliance',
      icon: '🏥',
      stats: '2.3M+ documents processed'
    },
    {
      name: 'Sales & Legal',
      description: 'Contract analysis, proposal automation, compliance checking with legal terminology',
      icon: '📊',
      stats: '890K+ contracts analyzed'
    },
    {
      name: 'Recruitment',
      description: 'Resume screening, candidate matching, interview preparation with bias detection',
      icon: '👥',
      stats: '1.7M+ resumes screened'
    },
    {
      name: 'Content & Media',
      description: 'Article summarization, research compilation, SEO optimization with trend analysis',
      icon: '📝',
      stats: '4.2M+ articles processed'
    },
    {
      name: 'Education',
      description: 'Academic analysis, curriculum development, assessment creation with learning analytics',
      icon: '🎓',
      stats: '650K+ papers analyzed'
    },
    {
      name: 'Finance',
      description: 'Financial report analysis, risk assessment, regulatory compliance with market insights',
      icon: '💼',
      stats: '1.1M+ reports processed'
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief Medical Officer, MedTech Solutions',
      content: 'IntelliDoc Pro has revolutionized our clinical documentation process. We\'ve reduced analysis time by 85% while maintaining 99.2% accuracy.',
      rating: 5
    },
    {
      name: 'Marcus Rodriguez',
      role: 'VP of Sales, TechCorp',
      content: 'The contract analysis feature saved us over 200 hours per month. The AI insights have improved our deal closure rate by 34%.',
      rating: 5
    },
    {
      name: 'Emily Watson',
      role: 'Head of Talent, StartupHub',
      content: 'Resume screening that used to take days now takes minutes. The bias detection feature ensures fair hiring practices.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-black"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <div className="flex items-center justify-center mb-8">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-2xl">
                <FileText className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              IntelliDoc Pro
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform your document processing with AI-powered intelligence. 
              From medical records to legal contracts, we make every document work smarter with 
              <span className="text-blue-400 font-semibold"> Perplexity AI integration</span>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button
                onClick={handleGetStarted}
                className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => setShowDemo(true)}
                className="border-2 border-gray-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-800 hover:border-gray-500 transition-all duration-300 flex items-center justify-center"
              >
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </button>
            </div>
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-400">
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
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">98.7%</div>
              <div className="text-gray-400">Processing Accuracy</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">&lt;2s</div>
              <div className="text-gray-400">Average Response Time</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">99.99%</div>
              <div className="text-gray-400">Uptime Guarantee</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">10M+</div>
              <div className="text-gray-400">Documents Processed</div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Powered by Advanced AI
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Cutting-edge technology that understands, analyzes, and transforms your documents with unprecedented accuracy
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="group bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:-translate-y-2"
              >
                <div className="text-blue-400 mb-6 group-hover:text-blue-300 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-100 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Industries Section */}
      <div className="py-24 bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Built for Every Industry
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Specialized workflows and compliance features tailored to your sector with industry-specific AI models
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div 
                key={index} 
                className="group bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300 cursor-pointer hover:transform hover:-translate-y-2"
              >
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-100 transition-colors">
                  {industry.name}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed group-hover:text-gray-300 transition-colors">
                  {industry.description}
                </p>
                <div className="text-sm text-blue-400 font-medium">
                  {industry.stats}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              See how organizations worldwide are transforming their document workflows
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 hover:border-green-500/50 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 bg-gradient-to-r from-blue-900/50 to-purple-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
            Ready to Transform Your Documents?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join thousands of professionals who trust IntelliDoc Pro for their document processing needs. 
            Experience the power of AI-driven analysis today.
          </p>
          <button
            onClick={handleGetStarted}
            className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Get Started Now
            <ArrowRight className="ml-2 w-5 h-5 inline group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Demo Modal */}
      {showDemo && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 rounded-2xl max-w-4xl w-full p-8 border border-gray-700">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-white">Product Demo</h3>
              <button
                onClick={() => setShowDemo(false)}
                className="text-gray-400 hover:text-white transition-colors p-2"
              >
                ✕
              </button>
            </div>
            <div className="bg-gray-800 aspect-video rounded-xl flex items-center justify-center mb-6 border border-gray-700">
              <div className="text-center">
                <Play className="w-20 h-20 text-gray-500 mx-auto mb-4" />
                <p className="text-gray-400 text-lg">Interactive Demo Video</p>
                <p className="text-gray-500 text-sm mt-2">See IntelliDoc Pro in action</p>
              </div>
            </div>
            <button
              onClick={handleGetStarted}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
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