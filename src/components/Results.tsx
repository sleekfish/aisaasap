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
  Brain,
  Search,
  Shield,
  AlertTriangle,
  Info
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
      <div className="min-h-screen bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <FileText className="mx-auto h-16 w-16 text-gray-600 mb-6" />
            <h2 className="text-2xl font-semibold text-white mb-4">No Results Available</h2>
            <p className="text-gray-400 mb-8 text-lg">Process a document to see AI-powered analysis results here</p>
            <button
              onClick={() => navigate('/process')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
            >
              Process Document
            </button>
          </div>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: 'summary', name: 'AI Summary', icon: Brain },
    { id: 'insights', name: 'Key Insights', icon: TrendingUp },
    { id: 'factcheck', name: 'Fact Check', icon: Search },
    { id: 'analytics', name: 'Analytics', icon: BarChart3 },
    { id: 'export', name: 'Export', icon: Download }
  ];

  const handleExport = () => {
    console.log(`Exporting as ${exportFormat}`);
    // Simulate download
    const link = document.createElement('a');
    link.href = '#';
    link.download = `intellidoc-analysis.${exportFormat}`;
    link.click();
    alert(`Document exported as ${exportFormat.toUpperCase()}`);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'IntelliDoc Pro Analysis Results',
        text: 'Check out this AI-powered document analysis',
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard');
    }
  };

  const handleCopyResults = () => {
    const resultsText = `IntelliDoc Pro Analysis Results\n\nSummary: ${document.summary}\n\nAccuracy: ${document.accuracy}\nProcessing Time: ${document.processingTime}`;
    navigator.clipboard.writeText(resultsText);
    alert('Results copied to clipboard');
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="mb-4 lg:mb-0">
              <h1 className="text-3xl lg:text-4xl font-bold text-white mb-2">Processing Results</h1>
              <p className="text-gray-400 text-lg">
                AI analysis completed for {document.files.join(', ')}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
              <button
                onClick={handleShare}
                className="flex items-center space-x-2 px-4 py-2 border border-gray-600 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white transition-all duration-200"
              >
                <Share2 className="w-4 h-4" />
                <span>Share</span>
              </button>
              <button
                onClick={() => navigate('/process')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              >
                Process New Document
              </button>
            </div>
          </div>
        </div>

        {/* Status Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-900/50 rounded-full flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-green-400" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Status</p>
                <p className="text-lg font-semibold text-white">Completed</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-900/50 rounded-full flex items-center justify-center">
                <Clock className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Processing Time</p>
                <p className="text-lg font-semibold text-white">{document.processingTime}</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-purple-900/50 rounded-full flex items-center justify-center">
                <Award className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Accuracy</p>
                <p className="text-lg font-semibold text-white">{document.accuracy}</p>
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
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                      activeTab === tab.id
                        ? 'bg-blue-600 text-white border border-blue-500'
                        : 'text-gray-300 hover:bg-gray-800 hover:text-white border border-gray-800'
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
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 p-6">
              {/* Summary Tab */}
              {activeTab === 'summary' && (
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-8 h-8 bg-blue-900/50 rounded-full flex items-center justify-center">
                      <Brain className="w-4 h-4 text-blue-400" />
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold text-white">AI-Generated Summary</h2>
                      <p className="text-sm text-gray-400">Powered by GPT-4 and Perplexity AI</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-6 rounded-xl border border-blue-500/30">
                      <h3 className="text-lg font-semibold text-blue-100 mb-3">Executive Summary</h3>
                      <p className="text-blue-50 leading-relaxed">
                        {document.summary}
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                        <h4 className="font-semibold text-white mb-3">Processing Details</h4>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-gray-400">Industry Focus</span>
                            <span className="text-white">{document.industry}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">AI Model</span>
                            <span className="text-white">GPT-4 + Vision</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Fact-Checking</span>
                            <span className="text-white">Perplexity AI</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Language</span>
                            <span className="text-white">English</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                        <h4 className="font-semibold text-white mb-3">Document Metrics</h4>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-gray-400">Total Pages</span>
                            <span className="text-white">47</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Word Count</span>
                            <span className="text-white">15,234</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Images Analyzed</span>
                            <span className="text-white">12</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Charts Detected</span>
                            <span className="text-white">8</span>
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
                    <div className="w-8 h-8 bg-green-900/50 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-green-400" />
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold text-white">Key Insights</h2>
                      <p className="text-sm text-gray-400">Industry-specific findings and recommendations</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 p-6 rounded-xl border border-green-500/30">
                      <h3 className="text-lg font-semibold text-green-100 mb-4">Top Insights</h3>
                      <div className="space-y-4">
                        {document.insights.map((insight: string, index: number) => (
                          <div key={index} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-green-50">{insight}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                        <h4 className="font-semibold text-white mb-3">Risk Assessment</h4>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-gray-400">Compliance</span>
                            <span className="text-green-400 font-medium">Low Risk</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-400">Data Quality</span>
                            <span className="text-green-400 font-medium">Excellent</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-400">Completeness</span>
                            <span className="text-blue-400 font-medium">97%</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-400">Confidence</span>
                            <span className="text-purple-400 font-medium">High</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                        <h4 className="font-semibold text-white mb-3">Action Items</h4>
                        <div className="space-y-3">
                          <div className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            <span className="text-gray-300">Review recommendations</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock className="w-4 h-4 text-yellow-400" />
                            <span className="text-gray-300">Schedule follow-up</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Star className="w-4 h-4 text-blue-400" />
                            <span className="text-gray-300">Export findings</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Share2 className="w-4 h-4 text-purple-400" />
                            <span className="text-gray-300">Share with team</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Fact Check Tab */}
              {activeTab === 'factcheck' && (
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-8 h-8 bg-orange-900/50 rounded-full flex items-center justify-center">
                      <Search className="w-4 h-4 text-orange-400" />
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold text-white">Perplexity AI Fact Check</h2>
                      <p className="text-sm text-gray-400">Real-time verification and source validation</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {/* Fact Check Summary */}
                    <div className="bg-gradient-to-r from-orange-900/30 to-red-900/30 p-6 rounded-xl border border-orange-500/30">
                      <h3 className="text-lg font-semibold text-orange-100 mb-4">Verification Summary</h3>
                      <div className="grid md:grid-cols-4 gap-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-white">{document.perplexityFactCheck.totalClaims}</div>
                          <div className="text-sm text-gray-400">Total Claims</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-400">{document.perplexityFactCheck.verifiedClaims}</div>
                          <div className="text-sm text-gray-400">Verified</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-yellow-400">{document.perplexityFactCheck.flaggedClaims}</div>
                          <div className="text-sm text-gray-400">Flagged</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-blue-400">{document.perplexityFactCheck.confidenceScore}</div>
                          <div className="text-sm text-gray-400">Confidence</div>
                        </div>
                      </div>
                    </div>

                    {/* Verification Details */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                        <h4 className="font-semibold text-white mb-4 flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                          Verified Claims
                        </h4>
                        <div className="space-y-3">
                          <div className="p-3 bg-green-900/20 rounded-lg border border-green-500/30">
                            <p className="text-green-100 text-sm">Statistical data matches government sources</p>
                            <p className="text-green-400 text-xs mt-1">Source: Bureau of Labor Statistics</p>
                          </div>
                          <div className="p-3 bg-green-900/20 rounded-lg border border-green-500/30">
                            <p className="text-green-100 text-sm">Medical terminology usage is accurate</p>
                            <p className="text-green-400 text-xs mt-1">Source: PubMed Database</p>
                          </div>
                          <div className="p-3 bg-green-900/20 rounded-lg border border-green-500/30">
                            <p className="text-green-100 text-sm">Industry benchmarks are current</p>
                            <p className="text-green-400 text-xs mt-1">Source: Industry Research Reports</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                        <h4 className="font-semibold text-white mb-4 flex items-center">
                          <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2" />
                          Flagged for Review
                        </h4>
                        <div className="space-y-3">
                          <div className="p-3 bg-yellow-900/20 rounded-lg border border-yellow-500/30">
                            <p className="text-yellow-100 text-sm">Date reference needs verification</p>
                            <p className="text-yellow-400 text-xs mt-1">Recommendation: Cross-check timeline</p>
                          </div>
                          <div className="p-3 bg-blue-900/20 rounded-lg border border-blue-500/30">
                            <p className="text-blue-100 text-sm">Additional context available</p>
                            <p className="text-blue-400 text-xs mt-1">Suggestion: Include recent updates</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Sources */}
                    <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                      <h4 className="font-semibold text-white mb-4">Verification Sources</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        {document.perplexityFactCheck.sources.map((source: string, index: number) => (
                          <div key={index} className="flex items-center space-x-3 p-3 bg-gray-700/50 rounded-lg">
                            <Shield className="w-4 h-4 text-blue-400" />
                            <span className="text-gray-300">{source}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Analytics Tab */}
              {activeTab === 'analytics' && (
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-8 h-8 bg-purple-900/50 rounded-full flex items-center justify-center">
                      <BarChart3 className="w-4 h-4 text-purple-400" />
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold text-white">Processing Analytics</h2>
                      <p className="text-sm text-gray-400">Detailed metrics and performance data</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/30 p-6 rounded-xl border border-blue-500/30">
                      <h3 className="font-semibold text-blue-100 mb-4">Processing Metrics</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-blue-200">Total Words</span>
                          <span className="font-semibold text-white">15,234</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-blue-200">Pages Analyzed</span>
                          <span className="font-semibold text-white">47</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-blue-200">Images Processed</span>
                          <span className="font-semibold text-white">12</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-blue-200">Charts Detected</span>
                          <span className="font-semibold text-white">8</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-green-900/30 to-green-800/30 p-6 rounded-xl border border-green-500/30">
                      <h3 className="font-semibold text-green-100 mb-4">Quality Metrics</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-green-200">Accuracy Score</span>
                          <span className="font-semibold text-white">{document.accuracy}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-green-200">Confidence Level</span>
                          <span className="font-semibold text-white">97.3%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-green-200">Language Detection</span>
                          <span className="font-semibold text-white">100%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-green-200">Structure Analysis</span>
                          <span className="font-semibold text-white">96.1%</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/30 p-6 rounded-xl border border-purple-500/30">
                      <h3 className="font-semibold text-purple-100 mb-4">AI Model Usage</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-purple-200">GPT-4 Tokens</span>
                          <span className="font-semibold text-white">52,847</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-purple-200">Vision API Calls</span>
                          <span className="font-semibold text-white">34</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-purple-200">Perplexity Queries</span>
                          <span className="font-semibold text-white">18</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-purple-200">Processing Cost</span>
                          <span className="font-semibold text-white">$3.47</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-orange-900/30 to-orange-800/30 p-6 rounded-xl border border-orange-500/30">
                      <h3 className="font-semibold text-orange-100 mb-4">Performance</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-orange-200">Response Time</span>
                          <span className="font-semibold text-white">{document.processingTime}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-orange-200">Queue Time</span>
                          <span className="font-semibold text-white">0.2s</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-orange-200">Memory Usage</span>
                          <span className="font-semibold text-white">312 MB</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-orange-200">CPU Time</span>
                          <span className="font-semibold text-white">1.4s</span>
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
                    <div className="w-8 h-8 bg-blue-900/50 rounded-full flex items-center justify-center">
                      <Download className="w-4 h-4 text-blue-400" />
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold text-white">Export Results</h2>
                      <p className="text-sm text-gray-400">Download your processed document in multiple formats</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-3">
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
                              className={`p-4 rounded-lg border text-left transition-all duration-200 ${
                                exportFormat === format.value
                                  ? 'border-blue-500 bg-blue-900/30'
                                  : 'border-gray-700 bg-gray-800/30 hover:bg-gray-800/50'
                              }`}
                            >
                              <div className="flex items-start space-x-3">
                                <IconComponent className={`w-5 h-5 mt-0.5 ${
                                  exportFormat === format.value ? 'text-blue-400' : 'text-gray-400'
                                }`} />
                                <div>
                                  <p className={`font-medium ${
                                    exportFormat === format.value ? 'text-blue-100' : 'text-white'
                                  }`}>
                                    {format.name}
                                  </p>
                                  <p className={`text-sm ${
                                    exportFormat === format.value ? 'text-blue-200' : 'text-gray-400'
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

                    <div className="border-t border-gray-700 pt-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-white">Quick Actions</h3>
                      </div>
                      <div className="grid md:grid-cols-3 gap-4">
                        <button
                          onClick={handleExport}
                          className="flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                        >
                          <Download className="w-4 h-4" />
                          <span>Download {exportFormat.toUpperCase()}</span>
                        </button>
                        <button 
                          onClick={() => alert('Email functionality would be implemented here')}
                          className="flex items-center justify-center space-x-2 border border-gray-600 text-gray-300 px-4 py-3 rounded-lg font-semibold hover:bg-gray-800 hover:text-white transition-all duration-200"
                        >
                          <Mail className="w-4 h-4" />
                          <span>Email Results</span>
                        </button>
                        <button 
                          onClick={handleCopyResults}
                          className="flex items-center justify-center space-x-2 border border-gray-600 text-gray-300 px-4 py-3 rounded-lg font-semibold hover:bg-gray-800 hover:text-white transition-all duration-200"
                        >
                          <Copy className="w-4 h-4" />
                          <span>Copy Results</span>
                        </button>
                      </div>
                    </div>

                    <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                      <h4 className="font-medium text-white mb-2">Export Includes:</h4>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• AI-generated summary and insights</li>
                        <li>• Perplexity AI fact-checking results</li>
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
    </div>
  );
};

export default Results;