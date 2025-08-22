import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Plus,
  FileText,
  Clock,
  TrendingUp,
  Users,
  Award,
  Activity,
  Zap,
  Shield,
  Brain,
  ChevronRight,
  BarChart3,
  Eye,
  Download
} from 'lucide-react';

interface DashboardProps {
  user: any;
}

const Dashboard: React.FC<DashboardProps> = ({ user }) => {
  const navigate = useNavigate();
  const [selectedIndustry, setSelectedIndustry] = useState(user.industry || 'Healthcare');

  const industries = [
    {
      name: 'Healthcare',
      icon: '🏥',
      color: 'bg-red-900/30 border-red-500/30 text-red-300',
      activeColor: 'bg-red-600 border-red-500 text-white',
      features: [
        'Medical Record Summarization',
        'HIPAA-Compliant Processing',
        'Clinical Terminology Recognition',
        'Patient Report Generation'
      ]
    },
    {
      name: 'Sales',
      icon: '📈',
      color: 'bg-green-900/30 border-green-500/30 text-green-300',
      activeColor: 'bg-green-600 border-green-500 text-white',
      features: [
        'Contract Analysis',
        'Proposal Creation',
        'Lead Qualification',
        'Sales Pipeline Optimization'
      ]
    },
    {
      name: 'Recruitment',
      icon: '👥',
      color: 'bg-blue-900/30 border-blue-500/30 text-blue-300',
      activeColor: 'bg-blue-600 border-blue-500 text-white',
      features: [
        'Resume Screening',
        'Candidate Profile Generation',
        'Job Description Optimization',
        'Skills Assessment'
      ]
    },
    {
      name: 'Content',
      icon: '✍️',
      color: 'bg-purple-900/30 border-purple-500/30 text-purple-300',
      activeColor: 'bg-purple-600 border-purple-500 text-white',
      features: [
        'Article Summarization',
        'Research Compilation',
        'Multi-format Adaptation',
        'SEO Optimization'
      ]
    },
    {
      name: 'Education',
      icon: '🎓',
      color: 'bg-yellow-900/30 border-yellow-500/30 text-yellow-300',
      activeColor: 'bg-yellow-600 border-yellow-500 text-white',
      features: [
        'Academic Paper Analysis',
        'Study Guide Generation',
        'Curriculum Processing',
        'Assessment Creation'
      ]
    }
  ];

  const stats = [
    {
      name: 'Documents Processed',
      value: '2,847',
      change: '+12%',
      icon: FileText,
      color: 'text-blue-400 bg-blue-900/30'
    },
    {
      name: 'Time Saved',
      value: '142 hrs',
      change: '+8%',
      icon: Clock,
      color: 'text-green-400 bg-green-900/30'
    },
    {
      name: 'Accuracy Rate',
      value: '97.8%',
      change: '+2%',
      icon: Award,
      color: 'text-purple-400 bg-purple-900/30'
    },
    {
      name: 'Active Projects',
      value: '23',
      change: '+5',
      icon: Activity,
      color: 'text-orange-400 bg-orange-900/30'
    }
  ];

  const recentDocuments = [
    {
      name: 'Patient_Records_Analysis_Q4.pdf',
      type: 'Medical Summary',
      processed: '2 hours ago',
      status: 'Completed',
      accuracy: '98%'
    },
    {
      name: 'Sales_Contract_Review.docx',
      type: 'Contract Analysis',
      processed: '4 hours ago',
      status: 'Processing',
      accuracy: '-'
    },
    {
      name: 'Research_Paper_Oncology.pdf',
      type: 'Academic Analysis',
      processed: '1 day ago',
      status: 'Completed',
      accuracy: '96%'
    },
    {
      name: 'Marketing_Campaign_Brief.pdf',
      type: 'Content Analysis',
      processed: '2 days ago',
      status: 'Completed',
      accuracy: '97%'
    }
  ];

  const currentIndustry = industries.find(i => i.name === selectedIndustry);

  const handleProcessDocument = () => {
    navigate('/process');
  };

  const handleViewResults = () => {
    navigate('/results');
  };

  const handleViewAnalytics = () => {
    // Mock analytics navigation
    console.log('Navigate to analytics');
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="mb-4 lg:mb-0">
              <h1 className="text-3xl lg:text-4xl font-bold text-white mb-2">
                Welcome back, {user.name.split(' ')[0]}
              </h1>
              <p className="text-gray-400 text-lg">
                Here's what's happening with your documents today
              </p>
            </div>
            <button
              onClick={handleProcessDocument}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Plus className="w-5 h-5" />
              <span>Process Document</span>
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:transform hover:-translate-y-1">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-400 mb-1">{stat.name}</p>
                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                    <p className="text-sm text-green-400 mt-1">{stat.change} from last month</p>
                  </div>
                  <div className={`p-3 rounded-xl ${stat.color}`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Industry Selection */}
          <div className="lg:col-span-2">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 p-6 mb-8">
              <h2 className="text-xl font-semibold text-white mb-6">Industry Workflows</h2>
              
              {/* Industry Tabs */}
              <div className="flex flex-wrap gap-3 mb-6">
                {industries.map((industry) => (
                  <button
                    key={industry.name}
                    onClick={() => setSelectedIndustry(industry.name)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-200 ${
                      selectedIndustry === industry.name
                        ? industry.activeColor
                        : industry.color + ' hover:bg-opacity-50'
                    }`}
                  >
                    <span className="text-lg">{industry.icon}</span>
                    <span className="font-medium">{industry.name}</span>
                  </button>
                ))}
              </div>

              {/* Selected Industry Features */}
              {currentIndustry && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white">
                    {currentIndustry.name} Capabilities
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {currentIndustry.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-3 p-3 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-colors duration-200 cursor-pointer group"
                      >
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-300 group-hover:text-white flex-1">{feature}</span>
                        <ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-gray-300" />
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={handleProcessDocument}
                    className="w-full mt-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                  >
                    Start {currentIndustry.name} Processing
                  </button>
                </div>
              )}
            </div>

            {/* Recent Documents */}
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-white">Recent Documents</h2>
                <button 
                  onClick={handleViewResults}
                  className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
                >
                  View All
                </button>
              </div>
              <div className="space-y-4">
                {recentDocuments.map((doc, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 rounded-lg border border-gray-800 hover:bg-gray-800/50 transition-colors duration-200 cursor-pointer group"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-blue-900/50 rounded-lg flex items-center justify-center">
                        <FileText className="w-5 h-5 text-blue-400" />
                      </div>
                      <div>
                        <p className="font-medium text-white group-hover:text-blue-100">{doc.name}</p>
                        <p className="text-sm text-gray-400">{doc.type} • {doc.processed}</p>
                      </div>
                    </div>
                    <div className="text-right flex items-center space-x-3">
                      <div>
                        <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          doc.status === 'Completed' 
                            ? 'bg-green-900/50 text-green-300 border border-green-500/30' 
                            : 'bg-yellow-900/50 text-yellow-300 border border-yellow-500/30'
                        }`}>
                          {doc.status}
                        </div>
                        <p className="text-sm text-gray-400 mt-1">Accuracy: {doc.accuracy}</p>
                      </div>
                      <div className="flex space-x-1">
                        <button className="p-1 text-gray-400 hover:text-blue-400 transition-colors">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="p-1 text-gray-400 hover:text-green-400 transition-colors">
                          <Download className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* AI Features */}
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 p-6">
              <h3 className="text-lg font-semibold text-white mb-4">AI Capabilities</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-900/50 rounded-full flex items-center justify-center">
                    <Users className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Resume Generation</p>
                    <p className="text-sm text-gray-400">247 tasks completed</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-900/50 rounded-full flex items-center justify-center">
                    <Activity className="w-4 h-4 text-green-400" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Medical Summarization</p>
                    <p className="text-sm text-gray-400">89 tasks completed</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-900/50 rounded-full flex items-center justify-center">
                    <Clock className="w-4 h-4 text-purple-400" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Pre-Call Briefing</p>
                    <p className="text-sm text-gray-400">156 tasks completed</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-orange-900/50 rounded-full flex items-center justify-center">
                    <Globe className="w-4 h-4 text-orange-400" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Web Extraction</p>
                    <p className="text-sm text-gray-400">392 tasks completed</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-red-900/50 rounded-full flex items-center justify-center">
                    <Shield className="w-4 h-4 text-red-400" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Safety & Compliance</p>
                    <p className="text-sm text-gray-400">1,247 tasks completed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Performance Metrics */}
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 p-6">
              <h3 className="text-lg font-semibold text-white mb-4">This Month</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Processing Speed</span>
                  <span className="font-semibold text-white">1.8s avg</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Success Rate</span>
                  <span className="font-semibold text-green-400">99.7%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Languages Used</span>
                  <span className="font-semibold text-white">12</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Total Size</span>
                  <span className="font-semibold text-white">1.2 GB</span>
                </div>
              </div>
              <button 
                onClick={handleViewAnalytics}
                className="w-full mt-4 bg-gray-800 text-gray-300 py-2 px-4 rounded-lg font-medium hover:bg-gray-700 hover:text-white transition-all duration-200 flex items-center justify-center"
              >
                <BarChart3 className="w-4 h-4 mr-2" />
                View Detailed Analytics
              </button>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-xl p-6 border border-blue-500/30">
              <h3 className="text-lg font-semibold text-white mb-2">Quick Start</h3>
              <p className="text-gray-300 text-sm mb-4">
                Upload a document to see AI-powered analysis with Perplexity fact-checking
              </p>
              <button
                onClick={handleProcessDocument}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              >
                Upload Document
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;