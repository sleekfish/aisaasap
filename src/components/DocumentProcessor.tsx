import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Upload,
  FileText,
  Image,
  File,
  X,
  CheckCircle,
  AlertCircle,
  Loader2,
  Brain,
  Zap,
  Globe,
  Shield
} from 'lucide-react';

interface DocumentProcessorProps {
  user: any;
  onDocumentProcessed: (result: any) => void;
}

const DocumentProcessor: React.FC<DocumentProcessorProps> = ({ user, onDocumentProcessed }) => {
  const navigate = useNavigate();
  const [dragActive, setDragActive] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const [processing, setProcessing] = useState(false);
  const [processingStep, setProcessingStep] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState(user.industry || 'Healthcare');
  const [processingOptions, setProcessingOptions] = useState({
    summaryLength: 'medium',
    focusAreas: [],
    outputFormat: 'pdf',
    language: 'en',
    includeCharts: true,
    factCheck: true
  });

  const industries = [
    { name: 'Healthcare', color: 'bg-red-100 text-red-700 border-red-200' },
    { name: 'Sales', color: 'bg-green-100 text-green-700 border-green-200' },
    { name: 'Recruitment', color: 'bg-blue-100 text-blue-700 border-blue-200' },
    { name: 'Content', color: 'bg-purple-100 text-purple-700 border-purple-200' },
    { name: 'Education', color: 'bg-yellow-100 text-yellow-700 border-yellow-200' }
  ];

  const focusAreasByIndustry = {
    Healthcare: ['Clinical Summary', 'Patient History', 'Treatment Plans', 'Risk Assessment'],
    Sales: ['Key Terms', 'Pricing', 'Deadlines', 'Action Items'],
    Recruitment: ['Skills', 'Experience', 'Education', 'Cultural Fit'],
    Content: ['Main Points', 'Research', 'Sources', 'SEO Keywords'],
    Education: ['Learning Objectives', 'Key Concepts', 'Assessment', 'References']
  };

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const newFiles = Array.from(e.dataTransfer.files);
      setFiles(prev => [...prev, ...newFiles]);
    }
  }, []);

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFiles(prev => [...prev, ...newFiles]);
    }
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const getFileIcon = (file: File) => {
    const type = file.type.toLowerCase();
    if (type.includes('image')) return <Image className="w-5 h-5" />;
    if (type.includes('pdf')) return <FileText className="w-5 h-5" />;
    return <File className="w-5 h-5" />;
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const handleFocusAreaToggle = (area: string) => {
    setProcessingOptions(prev => ({
      ...prev,
      focusAreas: prev.focusAreas.includes(area)
        ? prev.focusAreas.filter(a => a !== area)
        : [...prev.focusAreas, area]
    }));
  };

  const processDocuments = async () => {
    if (files.length === 0) return;

    setProcessing(true);
    const steps = [
      'Uploading documents...',
      'Analyzing content with GPT-4...',
      'Processing with vision models...',
      'Fact-checking with Perplexity...',
      'Generating industry-specific insights...',
      'Creating final output...'
    ];

    for (let i = 0; i < steps.length; i++) {
      setProcessingStep(steps[i]);
      await new Promise(resolve => setTimeout(resolve, 2000));
    }

    // Mock processed result
    const result = {
      id: Date.now().toString(),
      files: files.map(f => f.name),
      industry: selectedIndustry,
      summary: `AI-powered analysis completed for ${files.length} document(s) in the ${selectedIndustry} industry. Key insights extracted with 97.8% accuracy.`,
      processingTime: '2.1 seconds',
      accuracy: '97.8%',
      insights: generateMockInsights(),
      exportFormats: ['pdf', 'docx', 'json', 'csv'],
      createdAt: new Date().toISOString()
    };

    onDocumentProcessed(result);
    setProcessing(false);
    navigate('/results');
  };

  const generateMockInsights = () => {
    const insights = {
      Healthcare: [
        'Patient shows significant improvement in cardiovascular health',
        'Recommended follow-up in 3 months',
        'No adverse reactions to current medication',
        'BMI within normal range'
      ],
      Sales: [
        'Contract value: $245,000 annually',
        'Decision deadline: End of Q1',
        'Key stakeholder: CTO approval required',
        'Competitive advantage: 40% cost savings'
      ],
      Recruitment: [
        'Strong technical skills in React, Node.js',
        '5+ years experience in fintech',
        'Cultural fit score: 8.5/10',
        'Salary expectation: $120,000-$140,000'
      ],
      Content: [
        'Main topic: AI in healthcare transformation',
        'Target audience: Healthcare executives',
        'Keyword density optimized for SEO',
        'Readability score: Grade 12 level'
      ],
      Education: [
        'Learning objective: Machine learning fundamentals',
        'Prerequisites: Basic statistics knowledge',
        'Assessment type: Practical project',
        'Estimated completion: 8 weeks'
      ]
    };
    return insights[selectedIndustry] || insights.Healthcare;
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Process Documents</h1>
        <p className="text-gray-600">
          Upload your documents and let AI extract insights tailored to your industry
        </p>
      </div>

      <div className="space-y-8">
        {/* Industry Selection */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Select Industry Workflow</h2>
          <div className="flex flex-wrap gap-3">
            {industries.map((industry) => (
              <button
                key={industry.name}
                onClick={() => setSelectedIndustry(industry.name)}
                className={`px-4 py-2 rounded-lg border-2 font-medium transition-all duration-200 ${
                  selectedIndustry === industry.name
                    ? industry.color
                    : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
                }`}
              >
                {industry.name}
              </button>
            ))}
          </div>
        </div>

        {/* Processing Options */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Processing Options</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Summary Length */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Summary Length
              </label>
              <select
                value={processingOptions.summaryLength}
                onChange={(e) => setProcessingOptions(prev => ({ ...prev, summaryLength: e.target.value }))}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="brief">Brief (1-2 pages)</option>
                <option value="medium">Medium (3-5 pages)</option>
                <option value="detailed">Detailed (5+ pages)</option>
              </select>
            </div>

            {/* Output Format */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Output Format
              </label>
              <select
                value={processingOptions.outputFormat}
                onChange={(e) => setProcessingOptions(prev => ({ ...prev, outputFormat: e.target.value }))}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="pdf">PDF Report</option>
                <option value="docx">Word Document</option>
                <option value="json">JSON Data</option>
                <option value="csv">CSV Export</option>
              </select>
            </div>

            {/* Language */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Processing Language
              </label>
              <select
                value={processingOptions.language}
                onChange={(e) => setProcessingOptions(prev => ({ ...prev, language: e.target.value }))}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
                <option value="de">German</option>
                <option value="zh">Chinese</option>
                <option value="ja">Japanese</option>
              </select>
            </div>

            {/* Advanced Options */}
            <div className="space-y-3">
              <label className="block text-sm font-medium text-gray-700">
                Advanced Options
              </label>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={processingOptions.includeCharts}
                    onChange={(e) => setProcessingOptions(prev => ({ ...prev, includeCharts: e.target.checked }))}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">Include chart analysis</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={processingOptions.factCheck}
                    onChange={(e) => setProcessingOptions(prev => ({ ...prev, factCheck: e.target.checked }))}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">Enable fact-checking</span>
                </label>
              </div>
            </div>
          </div>

          {/* Focus Areas */}
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Focus Areas for {selectedIndustry}
            </label>
            <div className="flex flex-wrap gap-2">
              {focusAreasByIndustry[selectedIndustry]?.map((area) => (
                <button
                  key={area}
                  onClick={() => handleFocusAreaToggle(area)}
                  className={`px-3 py-1 rounded-full text-sm font-medium border transition-all duration-200 ${
                    processingOptions.focusAreas.includes(area)
                      ? 'bg-blue-100 text-blue-700 border-blue-300'
                      : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200'
                  }`}
                >
                  {area}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* File Upload */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Upload Documents</h2>
          
          {/* Upload Area */}
          <div
            className={`relative border-2 border-dashed rounded-lg p-8 text-center transition-colors duration-200 ${
              dragActive
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-300 bg-gray-50 hover:bg-gray-100'
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <input
              type="file"
              multiple
              accept=".pdf,.docx,.txt,.png,.jpg,.jpeg"
              onChange={handleFileInput}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
            <p className="text-lg font-medium text-gray-900 mb-2">
              Drop files here or click to upload
            </p>
            <p className="text-sm text-gray-500 mb-4">
              Support for PDF, DOCX, TXT, PNG, JPG (up to 100MB each)
            </p>
            <div className="flex items-center justify-center space-x-6 text-xs text-gray-500">
              <div className="flex items-center">
                <Brain className="w-4 h-4 mr-1" />
                GPT-4 Analysis
              </div>
              <div className="flex items-center">
                <Zap className="w-4 h-4 mr-1" />
                Vision Models
              </div>
              <div className="flex items-center">
                <Globe className="w-4 h-4 mr-1" />
                15+ Languages
              </div>
              <div className="flex items-center">
                <Shield className="w-4 h-4 mr-1" />
                HIPAA Compliant
              </div>
            </div>
          </div>

          {/* File List */}
          {files.length > 0 && (
            <div className="mt-6">
              <h3 className="text-sm font-medium text-gray-900 mb-3">
                Uploaded Files ({files.length})
              </h3>
              <div className="space-y-2">
                {files.map((file, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="text-gray-500">
                        {getFileIcon(file)}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{file.name}</p>
                        <p className="text-xs text-gray-500">{formatFileSize(file.size)}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFile(index)}
                      className="text-red-500 hover:text-red-700 p-1"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Process Button */}
        <div className="flex justify-center">
          <button
            onClick={processDocuments}
            disabled={files.length === 0 || processing}
            className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center space-x-3 ${
              files.length === 0 || processing
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg'
            }`}
          >
            {processing ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Processing...</span>
              </>
            ) : (
              <>
                <Brain className="w-5 h-5" />
                <span>Process with AI</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Processing Modal */}
      {processing && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Processing Your Documents
              </h3>
              <p className="text-gray-600 mb-4">{processingStep}</p>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full transition-all duration-1000"
                  style={{ width: `${(processingStep.length / 50) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DocumentProcessor;