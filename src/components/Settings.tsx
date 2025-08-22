import React, { useState } from 'react';
import {
  User,
  Bell,
  Shield,
  Globe,
  CreditCard,
  Key,
  Database,
  FileText,
  Users,
  Settings as SettingsIcon,
  Check,
  AlertCircle,
  Lock,
  Zap,
  Award,
  ExternalLink
} from 'lucide-react';

interface SettingsProps {
  user: any;
}

const Settings: React.FC<SettingsProps> = ({ user }) => {
  const [activeTab, setActiveTab] = useState('profile');
  const [settings, setSettings] = useState({
    notifications: {
      email: true,
      push: false,
      processing: true,
      marketing: false
    },
    privacy: {
      dataRetention: '90',
      shareAnalytics: false,
      twoFactor: true
    },
    processing: {
      defaultLanguage: 'en',
      autoExport: false,
      defaultFormat: 'pdf',
      maxFileSize: '100',
      perplexityEnabled: true
    }
  });

  const tabs = [
    { id: 'profile', name: 'Profile', icon: User },
    { id: 'notifications', name: 'Notifications', icon: Bell },
    { id: 'security', name: 'Security & Privacy', icon: Shield },
    { id: 'processing', name: 'AI Processing', icon: FileText },
    { id: 'billing', name: 'Billing', icon: CreditCard },
    { id: 'api', name: 'API Access', icon: Key }
  ];

  const plans = [
    {
      name: 'Starter',
      price: '$29/month',
      features: ['1,000 documents/month', 'Basic AI analysis', 'Email support', 'Standard processing'],
      current: false
    },
    {
      name: 'Professional',
      price: '$99/month',
      features: ['10,000 documents/month', 'Advanced AI analysis', 'Priority support', 'API access', 'Perplexity AI'],
      current: false
    },
    {
      name: 'Enterprise',
      price: '$299/month',
      features: ['Unlimited documents', 'Custom AI models', '24/7 support', 'Advanced security', 'On-premise deployment', 'Full Perplexity integration'],
      current: true
    }
  ];

  const complianceFeatures = [
    { name: 'SOC 2 Type II', status: 'active', icon: Shield },
    { name: 'HIPAA Compliance', status: 'active', icon: Lock },
    { name: 'GDPR Compliant', status: 'active', icon: Globe },
    { name: 'ISO 27001', status: 'active', icon: Award }
  ];

  const handleSettingChange = (section: string, key: string, value: any) => {
    setSettings(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [key]: value
      }
    }));
  };

  const handleSaveProfile = () => {
    alert('Profile settings saved successfully!');
  };

  const handleGenerateApiKey = () => {
    alert('New API key generated: sk-prod-' + Math.random().toString(36).substring(2, 15));
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-2">Account Settings</h1>
          <p className="text-gray-400 text-lg">Manage your account preferences and security settings</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
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
              {/* Profile Tab */}
              {activeTab === 'profile' && (
                <div>
                  <h2 className="text-xl font-semibold text-white mb-6">Profile Information</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-center space-x-6">
                      <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                        <User className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-white">{user.name}</h3>
                        <p className="text-gray-400">{user.email}</p>
                        <button className="mt-2 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors">
                          Change Photo
                        </button>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          defaultValue={user.name}
                          className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          defaultValue={user.email}
                          className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Industry
                        </label>
                        <select
                          defaultValue={user.industry}
                          className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                        >
                          <option value="Healthcare">Healthcare</option>
                          <option value="Sales">Sales</option>
                          <option value="Recruitment">Recruitment</option>
                          <option value="Content">Content</option>
                          <option value="Education">Education</option>
                          <option value="Finance">Finance</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          placeholder="Your company name"
                          className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-500"
                        />
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <button 
                        onClick={handleSaveProfile}
                        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                      >
                        Save Changes
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Notifications Tab */}
              {activeTab === 'notifications' && (
                <div>
                  <h2 className="text-xl font-semibold text-white mb-6">Notification Preferences</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium text-white mb-4">Email Notifications</h3>
                      <div className="space-y-4">
                        {[
                          { key: 'email', label: 'Email notifications', desc: 'Receive notifications via email' },
                          { key: 'processing', label: 'Processing updates', desc: 'Get notified when documents are processed' },
                          { key: 'marketing', label: 'Marketing emails', desc: 'Receive product updates and news' }
                        ].map((item) => (
                          <div key={item.key} className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                            <div>
                              <p className="font-medium text-white">{item.label}</p>
                              <p className="text-sm text-gray-400">{item.desc}</p>
                            </div>
                            <button
                              onClick={() => handleSettingChange('notifications', item.key, !settings.notifications[item.key])}
                              className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 ${
                                settings.notifications[item.key] ? 'bg-blue-600' : 'bg-gray-600'
                              }`}
                            >
                              <span
                                className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                                  settings.notifications[item.key] ? 'translate-x-5' : 'translate-x-0'
                                }`}
                              />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Security Tab */}
              {activeTab === 'security' && (
                <div>
                  <h2 className="text-xl font-semibold text-white mb-6">Security & Privacy</h2>
                  
                  <div className="space-y-6">
                    {/* Compliance Status */}
                    <div>
                      <h3 className="text-lg font-medium text-white mb-4">Compliance Status</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {complianceFeatures.map((feature, index) => {
                          const IconComponent = feature.icon;
                          return (
                            <div key={index} className="flex items-center space-x-3 p-4 bg-green-900/20 rounded-lg border border-green-500/30">
                              <div className="w-8 h-8 bg-green-900/50 rounded-full flex items-center justify-center">
                                <IconComponent className="w-4 h-4 text-green-400" />
                              </div>
                              <div>
                                <p className="font-medium text-green-100">{feature.name}</p>
                                <p className="text-sm text-green-300">Active & Compliant</p>
                              </div>
                              <Check className="w-5 h-5 text-green-400 ml-auto" />
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Privacy Settings */}
                    <div>
                      <h3 className="text-lg font-medium text-white mb-4">Privacy Settings</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                          <div>
                            <p className="font-medium text-white">Two-Factor Authentication</p>
                            <p className="text-sm text-gray-400">Add an extra layer of security to your account</p>
                          </div>
                          <button
                            onClick={() => handleSettingChange('privacy', 'twoFactor', !settings.privacy.twoFactor)}
                            className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 ${
                              settings.privacy.twoFactor ? 'bg-blue-600' : 'bg-gray-600'
                            }`}
                          >
                            <span
                              className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                                settings.privacy.twoFactor ? 'translate-x-5' : 'translate-x-0'
                              }`}
                            />
                          </button>
                        </div>

                        <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                          <div className="flex items-center justify-between mb-2">
                            <p className="font-medium text-white">Data Retention Period</p>
                          </div>
                          <p className="text-sm text-gray-400 mb-3">How long to keep your processed documents</p>
                          <select
                            value={settings.privacy.dataRetention}
                            onChange={(e) => handleSettingChange('privacy', 'dataRetention', e.target.value)}
                            className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                          >
                            <option value="30">30 days</option>
                            <option value="90">90 days</option>
                            <option value="180">180 days</option>
                            <option value="365">1 year</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Processing Tab */}
              {activeTab === 'processing' && (
                <div>
                  <h2 className="text-xl font-semibold text-white mb-6">AI Processing Defaults</h2>
                  
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Default Language
                        </label>
                        <select
                          value={settings.processing.defaultLanguage}
                          onChange={(e) => handleSettingChange('processing', 'defaultLanguage', e.target.value)}
                          className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                        >
                          <option value="en">English</option>
                          <option value="es">Spanish</option>
                          <option value="fr">French</option>
                          <option value="de">German</option>
                          <option value="zh">Chinese</option>
                          <option value="ja">Japanese</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Default Export Format
                        </label>
                        <select
                          value={settings.processing.defaultFormat}
                          onChange={(e) => handleSettingChange('processing', 'defaultFormat', e.target.value)}
                          className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                        >
                          <option value="pdf">PDF Report</option>
                          <option value="docx">Word Document</option>
                          <option value="json">JSON Data</option>
                          <option value="csv">CSV Export</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Maximum File Size (MB)
                        </label>
                        <input
                          type="number"
                          value={settings.processing.maxFileSize}
                          onChange={(e) => handleSettingChange('processing', 'maxFileSize', e.target.value)}
                          className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                        />
                      </div>
                    </div>

                    {/* AI Features */}
                    <div>
                      <h3 className="text-lg font-medium text-white mb-4">AI Features</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                          <div>
                            <p className="font-medium text-white">Auto-export results</p>
                            <p className="text-sm text-gray-400">Automatically export processed documents</p>
                          </div>
                          <input
                            type="checkbox"
                            checked={settings.processing.autoExport}
                            onChange={(e) => handleSettingChange('processing', 'autoExport', e.target.checked)}
                            className="rounded border-gray-600 bg-gray-800 text-blue-600 focus:ring-blue-500"
                          />
                        </div>

                        <div className="flex items-center justify-between p-4 bg-blue-900/20 rounded-lg border border-blue-500/30">
                          <div>
                            <p className="font-medium text-blue-100">AI Agent Orchestration</p>
                            <p className="text-sm text-blue-200">Enable multi-agent processing with Document Intelligence, Healthcare Analytics, Contract Intelligence, Perplexity Fact-Check, and Compliance Guardian agents</p>
                          </div>
                          <input
                            type="checkbox"
                            checked={settings.processing.perplexityEnabled}
                            onChange={(e) => handleSettingChange('processing', 'perplexityEnabled', e.target.checked)}
                            className="rounded border-blue-600 bg-blue-800 text-blue-600 focus:ring-blue-500"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Billing Tab */}
              {activeTab === 'billing' && (
                <div>
                  <h2 className="text-xl font-semibold text-white mb-6">Billing & Plans</h2>
                  
                  <div className="space-y-6">
                    {/* Current Plan */}
                    <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-6 rounded-xl border border-blue-500/30">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-semibold text-blue-100">Current Plan: {user.plan}</h3>
                          <p className="text-blue-200">$299/month • Billed monthly</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-blue-300">Next billing date</p>
                          <p className="text-lg font-semibold text-blue-100">Feb 15, 2025</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="text-sm">
                            <span className="text-blue-300">Usage this month:</span>
                            <span className="font-semibold text-blue-100 ml-2">2,847 / Unlimited documents</span>
                          </div>
                        </div>
                        <button className="bg-white/10 text-blue-100 px-4 py-2 rounded-lg font-medium hover:bg-white/20 transition-colors duration-200 border border-blue-400/30">
                          Manage Plan
                        </button>
                      </div>
                    </div>

                    {/* Available Plans */}
                    <div>
                      <h3 className="text-lg font-medium text-white mb-4">Available Plans</h3>
                      <div className="grid md:grid-cols-3 gap-6">
                        {plans.map((plan, index) => (
                          <div
                            key={index}
                            className={`p-6 rounded-xl border ${
                              plan.current
                                ? 'border-blue-500 bg-blue-900/20'
                                : 'border-gray-700 bg-gray-800/30 hover:border-gray-600'
                            }`}
                          >
                            <div className="flex items-center justify-between mb-4">
                              <h4 className="text-lg font-semibold text-white">{plan.name}</h4>
                              {plan.current && (
                                <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium">
                                  Current
                                </span>
                              )}
                            </div>
                            <p className="text-2xl font-bold text-white mb-4">{plan.price}</p>
                            <ul className="space-y-2 mb-6">
                              {plan.features.map((feature, featureIndex) => (
                                <li key={featureIndex} className="flex items-center text-sm">
                                  <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                                  <span className="text-gray-300">{feature}</span>
                                </li>
                              ))}
                            </ul>
                            <button
                              className={`w-full py-2 px-4 rounded-lg font-medium transition-colors duration-200 ${
                                plan.current
                                  ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                                  : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                              }`}
                              disabled={plan.current}
                            >
                              {plan.current ? 'Current Plan' : 'Upgrade'}
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* API Tab */}
              {activeTab === 'api' && (
                <div>
                  <h2 className="text-xl font-semibold text-white mb-6">API Access</h2>
                  
                  <div className="space-y-6">
                    <div className="bg-yellow-900/20 p-4 rounded-lg border border-yellow-500/30">
                      <div className="flex items-start space-x-3">
                        <AlertCircle className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-yellow-100 font-medium">API Access Available</p>
                          <p className="text-yellow-200 text-sm mt-1">
                            Your Enterprise plan includes full API access. Generate keys below to integrate IntelliDoc Pro with your applications.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* API Keys */}
                    <div>
                      <h3 className="text-lg font-medium text-white mb-4">API Keys</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                          <div>
                            <p className="font-medium text-white">Production Key</p>
                            <p className="text-sm text-gray-400 font-mono">sk-prod-**********************</p>
                            <p className="text-xs text-gray-500 mt-1">Created on Jan 15, 2025 • Last used 2 hours ago</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <button className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors">
                              Copy
                            </button>
                            <button className="text-red-400 hover:text-red-300 text-sm font-medium transition-colors">
                              Revoke
                            </button>
                          </div>
                        </div>

                        <button 
                          onClick={handleGenerateApiKey}
                          className="w-full bg-gray-800 border-2 border-dashed border-gray-600 text-gray-400 py-3 px-4 rounded-lg hover:bg-gray-700 hover:text-gray-300 transition-colors duration-200"
                        >
                          + Generate New API Key
                        </button>
                      </div>
                    </div>

                    {/* Usage Stats */}
                    <div>
                      <h3 className="text-lg font-medium text-white mb-4">API Usage (This Month)</h3>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                          <p className="text-sm text-gray-400">API Calls</p>
                          <p className="text-2xl font-bold text-white">12,847</p>
                          <p className="text-sm text-green-400">+15% from last month</p>
                        </div>
                        <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                          <p className="text-sm text-gray-400">Success Rate</p>
                          <p className="text-2xl font-bold text-white">99.8%</p>
                          <p className="text-sm text-green-400">Excellent</p>
                        </div>
                        <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                          <p className="text-sm text-gray-400">Avg Response</p>
                          <p className="text-2xl font-bold text-white">1.9s</p>
                          <p className="text-sm text-blue-400">Within SLA</p>
                        </div>
                      </div>
                    </div>

                    {/* Documentation */}
                    <div>
                      <h3 className="text-lg font-medium text-white mb-4">Documentation & Resources</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <button className="flex items-center space-x-3 p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors duration-200 border border-gray-700">
                          <FileText className="w-5 h-5 text-blue-400" />
                          <div className="text-left">
                            <p className="font-medium text-white">API Documentation</p>
                            <p className="text-sm text-gray-400">Complete integration guide</p>
                          </div>
                          <ExternalLink className="w-4 h-4 text-gray-400 ml-auto" />
                        </button>
                        <button className="flex items-center space-x-3 p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors duration-200 border border-gray-700">
                          <Zap className="w-5 h-5 text-green-400" />
                          <div className="text-left">
                            <p className="font-medium text-white">Code Examples</p>
                            <p className="text-sm text-gray-400">Ready-to-use snippets</p>
                          </div>
                          <ExternalLink className="w-4 h-4 text-gray-400 ml-auto" />
                        </button>
                      </div>
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

export default Settings;