import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Download,
  Share2,
  FileText,
  BarChart3,
  Clock,
  CheckCircle,
  Star,
  Copy,
  Mail,
  Printer,
  ExternalLink,
  TrendingUp,
  Award,
  Brain
} from 'lucide-react';

interface ResultsProps {
  document: any;
}

const Results: React.FC<ResultsProps> = ({ document }) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('summary');
  const [exportFormat, setExportFormat] = useState('pdf');
  
  if (!document) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <FileText className="mx-auto h-12 w-12 text-gray-400 mb-4" />
          <h2 className="text-xl font-semibold text-gray-900 mb-2">No Results Available</h2>
          <p className="text-gray-600 mb-6">Process a document to see results here</p>
          <button
            onClick={() => navigate('/process')}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
          >
            Process Document
          </button>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: 'summary', name: 'AI Summary', icon: Brain },
    { id: 'insights', name: 'Key Insights', icon: TrendingUp },
    { id: 'analytics', name: 'Analytics', icon: BarChart3 },
    { id: 'export', name: 'Export', icon: Download }
  ];

  const handleExport = () => {
    // Mock export functionality
    console.log(`Exporting as ${exportFormat}`);
    alert(`Document exported as ${exportFormat.toUpperCase()}`);
  };

  const handleShare = () => {
    // Mock share functionality
    navigator.clipboard.writeText(window.location.href);
    alert('Link copied to clipboard');
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Processing Results</h1>
            <p className="text-gray-600">
              AI analysis completed for {document.files.join(', ')}
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={handleShare}
              className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-200"
            >
              <Share2 className="w-4 h-4" />
              <span>Share</span>
            </button>
            <button
              onClick={() => navigate('/process')}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
            >
              Process New Document
            </button>
          </div>
        </div>
      </div>

      {/* Status Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Status</p>
              <p className="text-lg font-semibold text-gray-900">Completed</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <Clock className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Processing Time</p>
              <p className="text-lg font-semibold text-gray-900">{document.processingTime}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
              <Award className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Accuracy</p>
              <p className="text-lg font-semibold text-gray-900">{document.accuracy}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 gap-8">
        {/* Tabs */}
        <div className="lg:col-span-1">
          <nav className="space-y-2">
            {tabs.map((tab) => {
              const IconComponent = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors duration-200 ${
                    activeTab === tab.id
                      ? 'bg-blue-100 text-blue-700 border border-blue-200'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <IconComponent className="w-5 h-5" />
                  <span className="font-medium">{tab.name}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Content */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-lg shadow-sm border p-6">
            {/* Summary Tab */}
            {activeTab === 'summary' && (
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <Brain className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">AI-Generated Summary</h2>
                    <p className="text-sm text-gray-500">Powered by GPT-4 and vision models</p>
                  </div>
                </div>

                <div className="prose max-w-none">
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200 mb-6">
                    <h3 className="text-lg font-semibold text-blue-900 mb-3">Executive Summary</h3>
                    <p className="text-blue-800 leading-relaxed">
                      {document.summary}
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Document Analysis</h3>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-gray-700">
                          The AI analysis has processed {document.files.length} document(s) using advanced 
                          natural language processing and computer vision algorithms. The system identified 
                          key patterns, extracted critical information, and generated industry-specific 
                          insights tailored for the {document.industry} sector.
                        </p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Processing Details</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <p className="text-sm font-medium text-gray-600 mb-1">Industry Focus</p>
                          <p className="text-gray-900">{document.industry}</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <p className="text-sm font-medium text-gray-600 mb-1">Processing Model</p>
                          <p className="text-gray-900">GPT-4 + Vision AI</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <p className="text-sm font-medium text-gray-600 mb-1">Language</p>
                          <p className="text-gray-900">English</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <p className="text-sm font-medium text-gray-600 mb-1">Fact-Checking</p>
                          <p className="text-gray-900">Enabled (Perplexity AI)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Insights Tab */}
            {activeTab === 'insights' && (
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">Key Insights</h2>
                    <p className="text-sm text-gray-500">Industry-specific findings and recommendations</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                    <h3 className="text-lg font-semibold text-green-900 mb-4">Top Insights</h3>
                    <div className="space-y-4">
                      {document.insights.map((insight: string, index: number) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-green-800">{insight}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Risk Assessment</h4>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">Compliance</span>
                          <span className="text-sm font-medium text-green-600">Low Risk</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">Data Quality</span>
                          <span className="text-sm font-medium text-green-600">High</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">Completeness</span>
                          <span className="text-sm font-medium text-blue-600">95%</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Action Items</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span className="text-sm text-gray-700">Review recommendations</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <Clock className="w-4 h-4 text-yellow-600" />
                          <span className="text-sm text-gray-700">Schedule follow-up</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <Star className="w-4 h-4 text-blue-600" />
                          <span className="text-sm text-gray-700">Export findings</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Analytics Tab */}
            {activeTab === 'analytics' && (
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <BarChart3 className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">Processing Analytics</h2>
                    <p className="text-sm text-gray-500">Detailed metrics and performance data</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200">
                    <h3 className="font-semibold text-blue-900 mb-4">Processing Metrics</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-blue-700">Total Words</span>
                        <span className="font-semibold text-blue-900">12,847</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-blue-700">Pages Analyzed</span>
                        <span className="font-semibold text-blue-900">38</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-blue-700">Images Processed</span>
                        <span className="font-semibold text-blue-900">7</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-blue-700">Charts Detected</span>
                        <span className="font-semibold text-blue-900">12</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg border border-green-200">
                    <h3 className="font-semibold text-green-900 mb-4">Quality Metrics</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-green-700">Accuracy Score</span>
                        <span className="font-semibold text-green-900">{document.accuracy}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-green-700">Confidence Level</span>
                        <span className="font-semibold text-green-900">96.2%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-green-700">Language Detection</span>
                        <span className="font-semibold text-green-900">100%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-green-700">Structure Analysis</span>
                        <span className="font-semibold text-green-900">94.8%</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg border border-purple-200">
                    <h3 className="font-semibold text-purple-900 mb-4">AI Model Usage</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-purple-700">GPT-4 Tokens</span>
                        <span className="font-semibold text-purple-900">45,123</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-purple-700">Vision API Calls</span>
                        <span className="font-semibold text-purple-900">28</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-purple-700">Perplexity Queries</span>
                        <span className="font-semibold text-purple-900">12</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-purple-700">Processing Cost</span>
                        <span className="font-semibold text-purple-900">$2.34</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg border border-orange-200">
                    <h3 className="font-semibold text-orange-900 mb-4">Performance</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-orange-700">Response Time</span>
                        <span className="font-semibold text-orange-900">{document.processingTime}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-orange-700">Queue Time</span>
                        <span className="font-semibold text-orange-900">0.3s</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-orange-700">Memory Usage</span>
                        <span className="font-semibold text-orange-900">247 MB</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-orange-700">CPU Time</span>
                        <span className="font-semibold text-orange-900">1.8s</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Export Tab */}
            {activeTab === 'export' && (
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <Download className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">Export Results</h2>
                    <p className="text-sm text-gray-500">Download your processed document in multiple formats</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Select Export Format
                    </label>
                    <div className="grid md:grid-cols-2 gap-4">
                      {[
                        { value: 'pdf', name: 'PDF Report', desc: 'Professional report with formatting', icon: FileText },
                        { value: 'docx', name: 'Word Document', desc: 'Editable Microsoft Word format', icon: FileText },
                        { value: 'json', name: 'JSON Data', desc: 'Structured data for developers', icon: FileText },
                        { value: 'csv', name: 'CSV Export', desc: 'Spreadsheet-compatible format', icon: BarChart3 }
                      ].map((format) => {
                        const IconComponent = format.icon;
                        return (
                          <button
                            key={format.value}
                            onClick={() => setExportFormat(format.value)}
                            className={`p-4 rounded-lg border-2 text-left transition-all duration-200 ${
                              exportFormat === format.value
                                ? 'border-blue-500 bg-blue-50'
                                : 'border-gray-200 hover:bg-gray-50'
                            }`}
                          >
                            <div className="flex items-start space-x-3">
                              <IconComponent className={`w-5 h-5 mt-0.5 ${
                                exportFormat === format.value ? 'text-blue-600' : 'text-gray-500'
                              }`} />
                              <div>
                                <p className={`font-medium ${
                                  exportFormat === format.value ? 'text-blue-900' : 'text-gray-900'
                                }`}>
                                  {format.name}
                                </p>
                                <p className={`text-sm ${
                                  exportFormat === format.value ? 'text-blue-700' : 'text-gray-500'
                                }`}>
                                  {format.desc}
                                </p>
                              </div>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-gray-900">Quick Actions</h3>
                    </div>
                    <div className="grid md:grid-cols-3 gap-4">
                      <button
                        onClick={handleExport}
                        className="flex items-center justify-center space-x-2 bg-blue-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
                      >
                        <Download className="w-4 h-4" />
                        <span>Download {exportFormat.toUpperCase()}</span>
                      </button>
                      <button className="flex items-center justify-center space-x-2 border border-gray-300 text-gray-700 px-4 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200">
                        <Mail className="w-4 h-4" />
                        <span>Email Results</span>
                      </button>
                      <button className="flex items-center justify-center space-x-2 border border-gray-300 text-gray-700 px-4 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200">
                        <Copy className="w-4 h-4" />
                        <span>Copy Link</span>
                      </button>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-2">Export Includes:</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• AI-generated summary and insights</li>
                      <li>• Processing analytics and metrics</li>
                      <li>• Industry-specific recommendations</li>
                      <li>• Charts and visualizations (where applicable)</li>
                      <li>• Compliance and security certifications</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;