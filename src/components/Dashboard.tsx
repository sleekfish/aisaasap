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
  BarChart3
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
      color: 'bg-red-50 border-red-200 text-red-700',
      activeColor: 'bg-red-100 border-red-300',
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
      color: 'bg-green-50 border-green-200 text-green-700',
      activeColor: 'bg-green-100 border-green-300',
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
      color: 'bg-blue-50 border-blue-200 text-blue-700',
      activeColor: 'bg-blue-100 border-blue-300',
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
      color: 'bg-purple-50 border-purple-200 text-purple-700',
      activeColor: 'bg-purple-100 border-purple-300',
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
      color: 'bg-yellow-50 border-yellow-200 text-yellow-700',
      activeColor: 'bg-yellow-100 border-yellow-300',
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
      color: 'text-blue-600 bg-blue-100'
    },
    {
      name: 'Time Saved',
      value: '142 hrs',
      change: '+8%',
      icon: Clock,
      color: 'text-green-600 bg-green-100'
    },
    {
      name: 'Accuracy Rate',
      value: '97.8%',
      change: '+2%',
      icon: Award,
      color: 'text-purple-600 bg-purple-100'
    },
    {
      name: 'Active Projects',
      value: '23',
      change: '+5',
      icon: Activity,
      color: 'text-orange-600 bg-orange-100'
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
    }
  ];

  const currentIndustry = industries.find(i => i.name === selectedIndustry);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Welcome Section */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Welcome back, {user.name.split(' ')[0]}
            </h1>
            <p className="text-gray-600 mt-2">
              Here's what's happening with your documents today
            </p>
          </div>
          <button
            onClick={() => navigate('/process')}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2"
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
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">{stat.name}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                  <p className="text-sm text-green-600 mt-1">{stat.change} from last month</p>
                </div>
                <div className={`p-3 rounded-full ${stat.color}`}>
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
          <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Industry Workflows</h2>
            
            {/* Industry Tabs */}
            <div className="flex flex-wrap gap-2 mb-6">
              {industries.map((industry) => (
                <button
                  key={industry.name}
                  onClick={() => setSelectedIndustry(industry.name)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg border-2 transition-all duration-200 ${
                    selectedIndustry === industry.name
                      ? industry.activeColor
                      : industry.color
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
                <h3 className="text-lg font-semibold text-gray-900">
                  {currentIndustry.name} Capabilities
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {currentIndustry.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200 cursor-pointer group"
                    >
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-700 group-hover:text-gray-900">{feature}</span>
                      <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-gray-600 ml-auto" />
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => navigate('/process')}
                  className="w-full mt-4 bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
                >
                  Start {currentIndustry.name} Processing
                </button>
              </div>
            )}
          </div>

          {/* Recent Documents */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Recent Documents</h2>
              <button className="text-blue-600 hover:text-blue-700 font-medium">View All</button>
            </div>
            <div className="space-y-4">
              {recentDocuments.map((doc, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 rounded-lg border hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <FileText className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{doc.name}</p>
                      <p className="text-sm text-gray-500">{doc.type} • {doc.processed}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      doc.status === 'Completed' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {doc.status}
                    </div>
                    <p className="text-sm text-gray-500 mt-1">Accuracy: {doc.accuracy}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* AI Features */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">AI Capabilities</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <Brain className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">GPT-4 Analysis</p>
                  <p className="text-sm text-gray-500">Advanced NLP processing</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <Zap className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Vision Models</p>
                  <p className="text-sm text-gray-500">OCR & chart analysis</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <Shield className="w-4 h-4 text-purple-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Secure Processing</p>
                  <p className="text-sm text-gray-500">End-to-end encryption</p>
                </div>
              </div>
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">This Month</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Processing Speed</span>
                <span className="font-semibold text-gray-900">2.1s avg</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Success Rate</span>
                <span className="font-semibold text-green-600">99.2%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Languages Used</span>
                <span className="font-semibold text-gray-900">8</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Total Size</span>
                <span className="font-semibold text-gray-900">847 MB</span>
              </div>
            </div>
            <button className="w-full mt-4 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-200 flex items-center justify-center">
              <BarChart3 className="w-4 h-4 mr-2" />
              View Detailed Analytics
            </button>
          </div>

          {/* Quick Actions */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Quick Start</h3>
            <p className="text-gray-600 text-sm mb-4">
              Upload a document to see AI-powered analysis in action
            </p>
            <button
              onClick={() => navigate('/process')}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
            >
              Upload Document
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;