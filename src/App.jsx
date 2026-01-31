import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import FarmerDashboard from './dashboards/Farmer';
import AdminDashboard from './dashboards/Admin';
import OfftakerDashboard from './dashboards/Offtaker';
import ExtensionDashboard from './dashboards/Extension';
import OrganisationDashboard from './dashboards/Organisation';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FarmerDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/offtaker" element={<OfftakerDashboard />} />
        <Route path="/extension" element={<ExtensionDashboard />} />
        <Route path="/organisation" element={<OrganisationDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;