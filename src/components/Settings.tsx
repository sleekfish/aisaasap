import React, { useState } from 'react';
import { User, Shield, Globe, Bell, Lock, Eye, Download, Trash2 } from 'lucide-react';

interface SettingsProps {
  user: {
    name: string;
    email: string;
    plan: string;
  };
}

export default function Settings({ user }: SettingsProps) {
  const [notifications, setNotifications] = useState(true);
  const [autoSave, setAutoSave] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const [dataRetention, setDataRetention] = useState('30');

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
            Settings
          </h1>
          <p className="text-gray-400">Manage your account preferences and security settings</p>
        </div>

        {/* Profile Section */}
        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 mb-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
              <User className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white">{user.name}</h2>
              <p className="text-gray-400">{user.email}</p>
              <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm mt-1">
                {user.plan} Plan
              </span>
            </div>
          </div>
        </div>

        {/* Settings Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* AI Agents Settings */}
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Shield className="w-5 h-5 text-blue-400" />
              AI Agent Settings
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Resume Generation</span>
                <button className="w-12 h-6 bg-blue-500 rounded-full relative transition-colors">
                  <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5 transition-transform"></div>
                </button>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Medical Summarization</span>
                <button className="w-12 h-6 bg-blue-500 rounded-full relative transition-colors">
                  <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5 transition-transform"></div>
                </button>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Pre-Call Briefing</span>
                <button className="w-12 h-6 bg-blue-500 rounded-full relative transition-colors">
                  <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5 transition-transform"></div>
                </button>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Web Extraction</span>
                <button className="w-12 h-6 bg-blue-500 rounded-full relative transition-colors">
                  <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5 transition-transform"></div>
                </button>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Safety & Compliance</span>
                <button className="w-12 h-6 bg-blue-500 rounded-full relative transition-colors">
                  <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5 transition-transform"></div>
                </button>
              </div>
            </div>
          </div>

          {/* General Settings */}
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Globe className="w-5 h-5 text-green-400" />
              General Settings
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Email Notifications</span>
                <button 
                  onClick={() => setNotifications(!notifications)}
                  className={`w-12 h-6 rounded-full relative transition-colors ${
                    notifications ? 'bg-green-500' : 'bg-gray-600'
                  }`}
                >
                  <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${
                    notifications ? 'right-0.5' : 'left-0.5'
                  }`}></div>
                </button>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Auto-save Documents</span>
                <button 
                  onClick={() => setAutoSave(!autoSave)}
                  className={`w-12 h-6 rounded-full relative transition-colors ${
                    autoSave ? 'bg-green-500' : 'bg-gray-600'
                  }`}
                >
                  <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${
                    autoSave ? 'right-0.5' : 'left-0.5'
                  }`}></div>
                </button>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Dark Mode</span>
                <button 
                  onClick={() => setDarkMode(!darkMode)}
                  className={`w-12 h-6 rounded-full relative transition-colors ${
                    darkMode ? 'bg-green-500' : 'bg-gray-600'
                  }`}
                >
                  <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${
                    darkMode ? 'right-0.5' : 'left-0.5'
                  }`}></div>
                </button>
              </div>
            </div>
          </div>

          {/* Security Settings */}
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Lock className="w-5 h-5 text-red-400" />
              Security & Privacy
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-300 mb-2">Data Retention Period</label>
                <select 
                  value={dataRetention}
                  onChange={(e) => setDataRetention(e.target.value)}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-500"
                >
                  <option value="7">7 days</option>
                  <option value="30">30 days</option>
                  <option value="90">90 days</option>
                  <option value="365">1 year</option>
                </select>
              </div>
              <button className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2">
                <Trash2 className="w-4 h-4" />
                Delete All Data
              </button>
            </div>
          </div>

          {/* Export Settings */}
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Download className="w-5 h-5 text-purple-400" />
              Export & Backup
            </h3>
            <div className="space-y-4">
              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg transition-colors">
                Export All Documents
              </button>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors">
                Download Usage Report
              </button>
              <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition-colors">
                Backup Settings
              </button>
            </div>
          </div>
        </div>

        {/* Compliance Information */}
        <div className="mt-8 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Compliance & Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
              <Shield className="w-5 h-5 text-green-400" />
              <span className="text-green-400 font-medium">HIPAA Compliant</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
              <Lock className="w-5 h-5 text-blue-400" />
              <span className="text-blue-400 font-medium">SOC 2 Certified</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-purple-500/10 border border-purple-500/20 rounded-lg">
              <Eye className="w-5 h-5 text-purple-400" />
              <span className="text-purple-400 font-medium">GDPR Ready</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}