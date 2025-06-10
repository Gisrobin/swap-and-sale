import React from 'react';
import Signin from './Components/Signin';
import './index.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import OnboardingPage from './context/onboarding_page.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/onboarding" element={<OnboardingPage />} />
        <Route path="/next-page" element={<Navigate to="/signin" />} />
        <Route path="/" element={<Navigate to="/onboarding" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;