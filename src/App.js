import React from 'react';
import Signin from './Component';
import './index.css';
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