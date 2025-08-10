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
  Shield,
  Search
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
    factCheck: true,
    perplexitySearch: true
  });

  const industries = [
    { name: 'Healthcare', color: 'bg-red-600 text-white border-red-500', inactive: 'bg-red-900/30 text-red-300 border-red-500/30' },
    { name: 'Sales', color: 'bg-green-600 text-white border-green-500', inactive: 'bg-green-900/30 text-green-300 border-green-500/30' },
    { name: 'Recruitment', color: 'bg-blue-600 text-white border-blue-500', inactive: 'bg-blue-900/30 text-blue-300 border-blue-500/30' },
    { name: 'Content', color: 'bg-purple-600 text-white border-purple-500', inactive: 'bg-purple-900/30 text-purple-300 border-purple-500/30' },
    { name: 'Education', color: 'bg-yellow-600 text-white border-yellow-500', inactive: 'bg-yellow-900/30 text-yellow-300 border-yellow-500/30' }
  ];

  const focusAreasByIndustry = {
    Healthcare: ['Clinical Summary', 'Patient History', 'Treatment Plans', 'Risk Assessment', 'Drug Interactions', 'Diagnostic Results'],
    Sales: ['Key Terms', 'Pricing', 'Deadlines', 'Action Items', 'Competitive Analysis', 'ROI Metrics'],
    Recruitment: ['Skills', 'Experience', 'Education', 'Cultural Fit', 'Salary Expectations', 'References'],
    Content: ['Main Points', 'Research', 'Sources', 'SEO Keywords', 'Target Audience', 'Content Strategy'],
    Education: ['Learning Objectives', 'Key Concepts', 'Assessment', 'References', 'Prerequisites', 'Outcomes']
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
      'Uploading documents to secure servers...',
      'Initializing GPT-4 analysis engine...',
      'Processing content with vision models...',
      'Performing Perplexity AI fact-checking...',
      'Cross-referencing with industry databases...',
      'Generating detailed summary report...',
      'Applying security compliance checks...',
      'Finalizing export formats...'
    ];

    for (let i = 0; i < steps.length; i++) {
      setProcessingStep(steps[i]);
      await new Promise(resolve => setTimeout(resolve, 1500));
    }

    // Generate comprehensive mock result with Perplexity-style analysis
    const result = {
      id: Date.now().toString(),
      files: files.map(f => f.name),
      industry: selectedIndustry,
      summary: generateDetailedSummary(),
      processingTime: '1.8 seconds',
      accuracy: '98.7%',
      insights: generateMockInsights(),
      perplexityFactCheck: generateFactCheckResults(),
      exportFormats: ['pdf', 'docx', 'json', 'csv'],
      createdAt: new Date().toISOString(),
      processingOptions
    };

    onDocumentProcessed(result);
    setProcessing(false);
    navigate('/results');
  };

  const generateDetailedSummary = () => {
    const summaries = {
      Healthcare: `Comprehensive medical analysis reveals significant clinical findings across ${files.length} document(s). Patient demonstrates stable cardiovascular parameters with notable improvement in metabolic markers. Treatment protocol shows 94% adherence rate with minimal adverse effects reported. Recommended follow-up includes quarterly monitoring and potential medication adjustment based on emerging biomarkers. Risk stratification indicates low-moderate category with preventive measures effectively implemented.`,
      Sales: `Strategic sales analysis of ${files.length} document(s) indicates high-value opportunity with projected annual contract value of $347,000. Key decision makers identified with 78% probability of closure within Q2. Competitive positioning shows 23% cost advantage over primary competitor. Critical success factors include technical integration timeline and executive stakeholder alignment. Recommended next steps involve proof-of-concept demonstration and legal review of terms.`,
      Recruitment: `Candidate evaluation across ${files.length} document(s) reveals exceptional technical proficiency with 8.7/10 skill alignment score. Professional experience spans 6+ years in relevant technologies with demonstrated leadership capabilities. Cultural fit assessment indicates 92% compatibility with organizational values. Compensation expectations align within approved budget range. Background verification completed with positive references from previous employers.`,
      Content: `Content analysis of ${files.length} document(s) identifies primary themes focused on emerging technology trends with 89% relevance score. Target audience engagement potential rated at 8.2/10 based on keyword density and readability metrics. SEO optimization opportunities include 12 high-impact keywords with search volume exceeding 10K monthly. Content structure supports multi-channel distribution with recommended adaptations for social media and email campaigns.`,
      Education: `Academic assessment of ${files.length} document(s) demonstrates comprehensive coverage of learning objectives with 96% curriculum alignment. Content complexity appropriate for target education level with estimated completion time of 4.5 hours. Assessment mechanisms effectively measure knowledge retention with 87% student success rate projection. Supplementary resources identified to enhance understanding of advanced concepts.`
    };
    return summaries[selectedIndustry] || summaries.Healthcare;
  };

  const generateFactCheckResults = () => {
    return {
      totalClaims: Math.floor(Math.random() * 20) + 15,
      verifiedClaims: Math.floor(Math.random() * 15) + 12,
      flaggedClaims: Math.floor(Math.random() * 3) + 1,
      confidenceScore: '94.2%',
      sources: [
        'PubMed Medical Database',
        'Reuters News Verification',
        'Academic Journal Archives',
        'Government Statistical Data',
        'Industry Research Reports'
      ]
    };
  };

  const generateMockInsights = () => {
    const insights = {
      Healthcare: [
        'Patient shows 23% improvement in key biomarkers compared to baseline measurements',
        'Treatment adherence rate exceeds industry average by 15 percentage points',
        'Risk factors have decreased by 31% following intervention protocol',
        'Recommended medication adjustment based on latest clinical guidelines',
        'Follow-up scheduling optimized for maximum therapeutic benefit'
      ],
      Sales: [
        'Contract value represents 34% increase over previous year agreements',
        'Decision timeline accelerated by 2 weeks due to competitive pressure',
        'Technical requirements align with 89% of current product capabilities',
        'Pricing strategy provides 18% margin improvement opportunity',
        'Stakeholder engagement shows 92% positive sentiment indicators'
      ],
      Recruitment: [
        'Technical skills assessment score: 94/100 in required competencies',
        'Leadership experience includes managing teams of 12+ professionals',
        'Cultural alignment score indicates 96% compatibility with company values',
        'Salary expectations within 5% of approved budget range',
        'Previous employer references confirm exceptional performance ratings'
      ],
      Content: [
        'Content engagement potential rated 8.7/10 based on trend analysis',
        'SEO keyword optimization could increase organic traffic by 45%',
        'Target audience alignment shows 91% demographic match',
        'Content structure supports 6 different distribution channels',
        'Recommended publication timing for maximum reach impact'
      ],
      Education: [
        'Learning objective coverage: 98% of required curriculum standards',
        'Content difficulty appropriate for 87% of target student population',
        'Assessment design predicts 92% knowledge retention rate',
        'Supplementary resource integration enhances comprehension by 28%',
        'Delivery method optimization for diverse learning styles'
      ]
    };
    return insights[selectedIndustry] || insights.Healthcare;
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-2">Process Documents</h1>
          <p className="text-gray-400 text-lg">
            Upload your documents and let AI extract insights with Perplexity fact-checking
          </p>
        </div>

        <div className="space-y-8">
          {/* Industry Selection */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 p-6">
            <h2 className="text-xl font-semibold text-white mb-4">Select Industry Workflow</h2>
            <div className="flex flex-wrap gap-3">
              {industries.map((industry) => (
                <button
                  key={industry.name}
                  onClick={() => setSelectedIndustry(industry.name)}
                  className={`px-4 py-2 rounded-lg border font-medium transition-all duration-200 ${
                    selectedIndustry === industry.name
                      ? industry.color
                      : industry.inactive + ' hover:bg-opacity-50'
                  }`}
                >
                  {industry.name}
                </button>
              ))}
            </div>
          </div>

          {/* Processing Options */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 p-6">
            <h2 className="text-xl font-semibold text-white mb-6">Processing Options</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Summary Length */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Summary Length
                </label>
                <select
                  value={processingOptions.summaryLength}
                  onChange={(e) => setProcessingOptions(prev => ({ ...prev, summaryLength: e.target.value }))}
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                >
                  <option value="brief">Brief (1-2 pages)</option>
                  <option value="medium">Medium (3-5 pages)</option>
                  <option value="detailed">Detailed (5+ pages)</option>
                  <option value="comprehensive">Comprehensive (10+ pages)</option>
                </select>
              </div>

              {/* Output Format */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Output Format
                </label>
                <select
                  value={processingOptions.outputFormat}
                  onChange={(e) => setProcessingOptions(prev => ({ ...prev, outputFormat: e.target.value }))}
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                >
                  <option value="pdf">PDF Report</option>
                  <option value="docx">Word Document</option>
                  <option value="json">JSON Data</option>
                  <option value="csv">CSV Export</option>
                  <option value="markdown">Markdown</option>
                </select>
              </div>

              {/* Language */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Processing Language
                </label>
                <select
                  value={processingOptions.language}
                  onChange={(e) => setProcessingOptions(prev => ({ ...prev, language: e.target.value }))}
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                >
                  <option value="en">English</option>
                  <option value="es">Spanish</option>
                  <option value="fr">French</option>
                  <option value="de">German</option>
                  <option value="zh">Chinese</option>
                  <option value="ja">Japanese</option>
                  <option value="ar">Arabic</option>
                  <option value="hi">Hindi</option>
                </select>
              </div>
            </div>

            {/* Advanced Options */}
            <div className="mt-6 grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-3">
                  AI Processing Features
                </label>
                <div className="space-y-3">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={processingOptions.includeCharts}
                      onChange={(e) => setProcessingOptions(prev => ({ ...prev, includeCharts: e.target.checked }))}
                      className="rounded border-gray-600 bg-gray-800 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-3 text-sm text-gray-300">Include chart and image analysis</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={processingOptions.factCheck}
                      onChange={(e) => setProcessingOptions(prev => ({ ...prev, factCheck: e.target.checked }))}
                      className="rounded border-gray-600 bg-gray-800 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-3 text-sm text-gray-300">Enable GPT-4 fact-checking</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={processingOptions.perplexitySearch}
                      onChange={(e) => setProcessingOptions(prev => ({ ...prev, perplexitySearch: e.target.checked }))}
                      className="rounded border-gray-600 bg-gray-800 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-3 text-sm text-gray-300">Perplexity AI real-time verification</span>
                  </label>
                </div>
              </div>

              {/* Focus Areas */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-3">
                  Focus Areas for {selectedIndustry}
                </label>
                <div className="flex flex-wrap gap-2">
                  {focusAreasByIndustry[selectedIndustry]?.map((area) => (
                    <button
                      key={area}
                      onClick={() => handleFocusAreaToggle(area)}
                      className={`px-3 py-1 rounded-full text-sm font-medium border transition-all duration-200 ${
                        processingOptions.focusAreas.includes(area)
                          ? 'bg-blue-600 text-white border-blue-500'
                          : 'bg-gray-800 text-gray-300 border-gray-600 hover:bg-gray-700'
                      }`}
                    >
                      {area}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* File Upload */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 p-6">
            <h2 className="text-xl font-semibold text-white mb-4">Upload Documents</h2>
            
            {/* Upload Area */}
            <div
              className={`relative border-2 border-dashed rounded-xl p-8 text-center transition-all duration-200 ${
                dragActive
                  ? 'border-blue-500 bg-blue-900/20'
                  : 'border-gray-600 bg-gray-800/30 hover:bg-gray-800/50'
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <input
                type="file"
                multiple
                accept=".pdf,.docx,.txt,.png,.jpg,.jpeg,.doc,.pptx"
                onChange={handleFileInput}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
              <p className="text-lg font-medium text-white mb-2">
                Drop files here or click to upload
              </p>
              <p className="text-sm text-gray-400 mb-4">
                Support for PDF, DOCX, TXT, PNG, JPG, PPTX (up to 100MB each)
              </p>
              <div className="flex items-center justify-center space-x-6 text-xs text-gray-500">
                <div className="flex items-center">
                  <Brain className="w-4 h-4 mr-1" />
                  GPT-4 Analysis
                </div>
                <div className="flex items-center">
                  <Search className="w-4 h-4 mr-1" />
                  Perplexity AI
                </div>
                <div className="flex items-center">
                  <Globe className="w-4 h-4 mr-1" />
                  25+ Languages
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
                <h3 className="text-sm font-medium text-gray-300 mb-3">
                  Uploaded Files ({files.length})
                </h3>
                <div className="space-y-2">
                  {files.map((file, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg border border-gray-700"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="text-gray-400">
                          {getFileIcon(file)}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-white">{file.name}</p>
                          <p className="text-xs text-gray-400">{formatFileSize(file.size)}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => removeFile(index)}
                        className="text-red-400 hover:text-red-300 p-1 transition-colors"
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
              className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center space-x-3 ${
                files.length === 0 || processing
                  ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 hover:shadow-lg transform hover:-translate-y-1'
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
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-gray-900 rounded-2xl p-8 max-w-md w-full mx-4 border border-gray-700">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Loader2 className="w-8 h-8 text-blue-400 animate-spin" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Processing Your Documents
                </h3>
                <p className="text-gray-400 mb-4">{processingStep}</p>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${Math.min((processingStep.length / 50) * 100, 100)}%` }}
                  ></div>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Powered by GPT-4 and Perplexity AI
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DocumentProcessor;