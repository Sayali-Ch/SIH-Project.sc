import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import DivisionalOfficerLogin from './components/Login/DivisionalOfficerLogin';
import DivisionalOfficerDashboard from './components/Dashboard/DivisionalOfficerDashboard';
import PostMasterDashboard from './components/Dashboard/PostMasterDashboard';
import DashboardTimeframeSelector from './components/Dashboard/DashboardTimeframeSelector';
import Home from './Pages/Home';
import DashboardMonitor from './components/Dashboard/DashboardMonitor';
import AllUsers from './components/Dashboard/AllUsers';
import Alerts from './components/Dashboard/Alerts';
import Reports from './components/Dashboard/Reports';

// Custom Layout Component
const Layout = ({ children }) => {
  const location = useLocation();
  
  // Only show Navbar on the Home page
  const showNavbar = location.pathname === '/';

  return (
    <>
      {showNavbar && <Navbar />}
      {children}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login/divisional-officer" element={<DivisionalOfficerLogin />} />
          <Route path="/postmaster-dashboard" element={<PostMasterDashboard />} />
          <Route path="/divisional-officer-dashboard" element={<DivisionalOfficerDashboard />} />
          <Route path="/dashboardmonitor" element={<DashboardMonitor />} />
          <Route path="/allusers" element={<AllUsers />} />
          <Route path="/dashboard-timeframe" element={<DashboardTimeframeSelector />} />
          <Route path="/alerts" element={<Alerts />} />
          <Route path="/reports" element={<Reports />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
