import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { AuthProvider } from '@descope/react-sdk';
import Dashboard from './Dashboard';
import TodoPage from './TodoPage';
import Services from './Services';

function App() {
  return (
    <AuthProvider projectId="P2TqQZ45i64ax79Cx9Voy3HEadzL">
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
