import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Signin from './Components/Signin';
import Dashboard from './context/dashboard.js';
import OnboardingPage from './context/onboarding_page.js';
import './index.css';

// If you want to protect the dashboard route, update isAuthenticated logic as needed
function ProtectedRoute({ children }) {
  const isAuthenticated = false; // Replace with actual auth logic
  return isAuthenticated ? children : <Navigate to="/signin" />;
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect root to onboarding */}
        <Route path="/" element={<Navigate to="/onboarding" />} />
        {/* Onboarding page */}
        <Route path="/onboarding" element={<OnboardingPage />} />
        {/* Signin page */}
        <Route path="/signin" element={<Signin />} />
        {/* Protected dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        {/* Optionally, catch-all route for 404 */}
        <Route path="*" element={<Navigate to="/onboarding" />} />
      </Routes>
    </Router>
  );
}

export default App;