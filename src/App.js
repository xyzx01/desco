import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { AuthProvider } from '@descope/react-sdk';
import Dashboard from './Dashboard';
import TodoPage from './TodoPage';
import Services from './Services';

function App() {
  return (
    <AuthProvider projectId="P2TpmDjYpJ1B6y16p8Gj39c3Y8RM">
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/services" element={<Services />} />
          <Route path="/todopage" element={<TodoPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
