import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import FarmerDashboard from './dashboards/Farmer';
import AdminDashboard from './dashboards/Admin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FarmerDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;