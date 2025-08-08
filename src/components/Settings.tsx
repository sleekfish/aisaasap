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
  Zap
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
      maxFileSize: '100'
    }
  });

  const tabs = [
    { id: 'profile', name: 'Profile', icon: User },
    { id: 'notifications', name: 'Notifications', icon: Bell },
    { id: 'security', name: 'Security & Privacy', icon: Shield },
    { id: 'processing', name: 'Processing', icon: FileText },
    { id: 'billing', name: 'Billing', icon: CreditCard },
    { id: 'api', name: 'API Access', icon: Key }
  ];

  const plans = [
    {
      name: 'Starter',
      price: '$29/month',
      features: ['1,000 documents/month', 'Basic AI analysis', 'Email support'],
      current: false
    },
    {
      name: 'Professional',
      price: '$99/month',
      features: ['10,000 documents/month', 'Advanced AI analysis', 'Priority support', 'API access'],
      current: false
    },
    {
      name: 'Enterprise',
      price: '$299/month',
      features: ['Unlimited documents', 'Custom AI models', '24/7 support', 'Advanced security', 'On-premise deployment'],
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

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Account Settings</h1>
        <p className="text-gray-600">Manage your account preferences and security settings</p>
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
            {/* Profile Tab */}
            {activeTab === 'profile' && (
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Profile Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-6">
                    <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center">
                      <User className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">{user.name}</h3>
                      <p className="text-gray-600">{user.email}</p>
                      <button className="mt-2 text-blue-600 hover:text-blue-700 text-sm font-medium">
                        Change Photo
                      </button>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        defaultValue={user.name}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        defaultValue={user.email}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Industry
                      </label>
                      <select
                        defaultValue={user.industry}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="Healthcare">Healthcare</option>
                        <option value="Sales">Sales</option>
                        <option value="Recruitment">Recruitment</option>
                        <option value="Content">Content</option>
                        <option value="Education">Education</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        placeholder="Your company name"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Notifications Tab */}
            {activeTab === 'notifications' && (
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Notification Preferences</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Email Notifications</h3>
                    <div className="space-y-3">
                      {[
                        { key: 'email', label: 'Email notifications', desc: 'Receive notifications via email' },
                        { key: 'processing', label: 'Processing updates', desc: 'Get notified when documents are processed' },
                        { key: 'marketing', label: 'Marketing emails', desc: 'Receive product updates and news' }
                      ].map((item) => (
                        <div key={item.key} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                          <div>
                            <p className="font-medium text-gray-900">{item.label}</p>
                            <p className="text-sm text-gray-600">{item.desc}</p>
                          </div>
                          <button
                            onClick={() => handleSettingChange('notifications', item.key, !settings.notifications[item.key])}
                            className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                              settings.notifications[item.key] ? 'bg-blue-600' : 'bg-gray-200'
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
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Security & Privacy</h2>
                
                <div className="space-y-6">
                  {/* Compliance Status */}
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Compliance Status</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {complianceFeatures.map((feature, index) => {
                        const IconComponent = feature.icon;
                        return (
                          <div key={index} className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg border border-green-200">
                            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                              <IconComponent className="w-4 h-4 text-green-600" />
                            </div>
                            <div>
                              <p className="font-medium text-green-900">{feature.name}</p>
                              <p className="text-sm text-green-700">Active & Compliant</p>
                            </div>
                            <Check className="w-5 h-5 text-green-600 ml-auto" />
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Privacy Settings */}
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Privacy Settings</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium text-gray-900">Two-Factor Authentication</p>
                          <p className="text-sm text-gray-600">Add an extra layer of security to your account</p>
                        </div>
                        <button
                          onClick={() => handleSettingChange('privacy', 'twoFactor', !settings.privacy.twoFactor)}
                          className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                            settings.privacy.twoFactor ? 'bg-blue-600' : 'bg-gray-200'
                          }`}
                        >
                          <span
                            className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                              settings.privacy.twoFactor ? 'translate-x-5' : 'translate-x-0'
                            }`}
                          />
                        </button>
                      </div>

                      <div className="p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <p className="font-medium text-gray-900">Data Retention Period</p>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">How long to keep your processed documents</p>
                        <select
                          value={settings.privacy.dataRetention}
                          onChange={(e) => handleSettingChange('privacy', 'dataRetention', e.target.value)}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Processing Defaults</h2>
                
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Default Language
                      </label>
                      <select
                        value={settings.processing.defaultLanguage}
                        onChange={(e) => handleSettingChange('processing', 'defaultLanguage', e.target.value)}
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

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Default Export Format
                      </label>
                      <select
                        value={settings.processing.defaultFormat}
                        onChange={(e) => handleSettingChange('processing', 'defaultFormat', e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="pdf">PDF Report</option>
                        <option value="docx">Word Document</option>
                        <option value="json">JSON Data</option>
                        <option value="csv">CSV Export</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Maximum File Size (MB)
                      </label>
                      <input
                        type="number"
                        value={settings.processing.maxFileSize}
                        onChange={(e) => handleSettingChange('processing', 'maxFileSize', e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        checked={settings.processing.autoExport}
                        onChange={(e) => handleSettingChange('processing', 'autoExport', e.target.checked)}
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <div>
                        <p className="font-medium text-gray-900">Auto-export results</p>
                        <p className="text-sm text-gray-600">Automatically export processed documents</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Billing Tab */}
            {activeTab === 'billing' && (
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Billing & Plans</h2>
                
                <div className="space-y-6">
                  {/* Current Plan */}
                  <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-blue-900">Current Plan: {user.plan}</h3>
                        <p className="text-blue-700">$299/month • Billed monthly</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-blue-600">Next billing date</p>
                        <p className="text-lg font-semibold text-blue-900">Feb 15, 2025</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="text-sm">
                          <span className="text-blue-600">Usage this month:</span>
                          <span className="font-semibold text-blue-900 ml-2">2,847 / Unlimited documents</span>
                        </div>
                      </div>
                      <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-200 border border-blue-300">
                        Manage Plan
                      </button>
                    </div>
                  </div>

                  {/* Available Plans */}
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Available Plans</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                      {plans.map((plan, index) => (
                        <div
                          key={index}
                          className={`p-6 rounded-lg border-2 ${
                            plan.current
                              ? 'border-blue-500 bg-blue-50'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-4">
                            <h4 className="text-lg font-semibold text-gray-900">{plan.name}</h4>
                            {plan.current && (
                              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                                Current
                              </span>
                            )}
                          </div>
                          <p className="text-2xl font-bold text-gray-900 mb-4">{plan.price}</p>
                          <ul className="space-y-2 mb-6">
                            {plan.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-center text-sm">
                                <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                          <button
                            className={`w-full py-2 px-4 rounded-lg font-medium transition-colors duration-200 ${
                              plan.current
                                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                : 'bg-blue-600 text-white hover:bg-blue-700'
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
                <h2 className="text-xl font-semibold text-gray-900 mb-6">API Access</h2>
                
                <div className="space-y-6">
                  <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                    <div className="flex items-start space-x-3">
                      <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-yellow-800 font-medium">API Access Available</p>
                        <p className="text-yellow-700 text-sm mt-1">
                          Your Enterprise plan includes full API access. Generate keys below to integrate IntelliDoc Pro with your applications.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* API Keys */}
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">API Keys</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium text-gray-900">Production Key</p>
                          <p className="text-sm text-gray-600 font-mono">sk-prod-**********************</p>
                          <p className="text-xs text-gray-500 mt-1">Created on Jan 15, 2025 • Last used 2 hours ago</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                            Copy
                          </button>
                          <button className="text-red-600 hover:text-red-700 text-sm font-medium">
                            Revoke
                          </button>
                        </div>
                      </div>

                      <button className="w-full bg-white border-2 border-dashed border-gray-300 text-gray-600 py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                        + Generate New API Key
                      </button>
                    </div>
                  </div>

                  {/* Usage Stats */}
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">API Usage (This Month)</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-white p-4 rounded-lg border">
                        <p className="text-sm text-gray-600">API Calls</p>
                        <p className="text-2xl font-bold text-gray-900">12,847</p>
                        <p className="text-sm text-green-600">+15% from last month</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg border">
                        <p className="text-sm text-gray-600">Success Rate</p>
                        <p className="text-2xl font-bold text-gray-900">99.8%</p>
                        <p className="text-sm text-green-600">Excellent</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg border">
                        <p className="text-sm text-gray-600">Avg Response</p>
                        <p className="text-2xl font-bold text-gray-900">1.9s</p>
                        <p className="text-sm text-blue-600">Within SLA</p>
                      </div>
                    </div>
                  </div>

                  {/* Documentation */}
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Documentation & Resources</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <a href="#" className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                        <FileText className="w-5 h-5 text-blue-600" />
                        <div>
                          <p className="font-medium text-gray-900">API Documentation</p>
                          <p className="text-sm text-gray-600">Complete integration guide</p>
                        </div>
                        <ExternalLink className="w-4 h-4 text-gray-400 ml-auto" />
                      </a>
                      <a href="#" className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                        <Zap className="w-5 h-5 text-green-600" />
                        <div>
                          <p className="font-medium text-gray-900">Code Examples</p>
                          <p className="text-sm text-gray-600">Ready-to-use snippets</p>
                        </div>
                        <ExternalLink className="w-4 h-4 text-gray-400 ml-auto" />
                      </a>
                    </div>
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

export default Settings;