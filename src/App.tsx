import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import DocumentProcessor from './components/DocumentProcessor';
import Results from './components/Results';
import Settings from './components/Settings';
import Header from './components/Header';

function App() {
  const [user, setUser] = useState(null);
  const [processedDocument, setProcessedDocument] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleDocumentProcessed = (result) => {
    setProcessedDocument(result);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {user && <Header user={user} onLogout={() => setUser(null)} />}
        <Routes>
          <Route 
            path="/" 
            element={
              user ? 
                <Dashboard user={user} /> : 
                <LandingPage onLogin={handleLogin} />
            } 
          />
          <Route 
            path="/process" 
            element={
              <DocumentProcessor 
                user={user} 
                onDocumentProcessed={handleDocumentProcessed} 
              />
            } 
          />
          <Route 
            path="/results" 
            element={<Results document={processedDocument} />} 
          />
          <Route 
            path="/settings" 
            element={<Settings user={user} />} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;