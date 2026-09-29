import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext.jsx';
import HomePage from './pages/public/HomePage.jsx';
import Login from './pages/family-resident/Login.jsx';
import Register from './pages/family-resident/Register.jsx';
import Layout from './components/layout/Layout.jsx';
import FamilyDashboard from './pages/family-resident/FamilyDashboard.jsx';
import ResidentDashboard from './pages/family-resident/ResidentDashboard.jsx';
import HealthRecords from './pages/family-resident/HealthRecords.jsx';
import Medication from './pages/family-resident/Medication.jsx';
import CareTeam from './pages/family-resident/CareTeam.jsx';
import AppointmentsPage from './pages/family-resident/AppointmentsPage.jsx';
import Settings from './pages/family-resident/Settings.jsx';
import Support from './pages/family-resident/Support.jsx';
import Meals from './pages/family-resident/Meals.jsx';
import Rooms from './pages/family-resident/Rooms.jsx';
import Portals from './pages/family-resident/Portals.jsx';
import Billing from './pages/family-resident/Billing.jsx';
import Reports from './pages/family-resident/Reports.jsx';
import KitchenDashboard from './pages/kitchen/KitchenDashboard.jsx';

export default function App() {
  const { user } = useAuth();

  return (
    <Routes>
      {/* Public Home Route accessible directly */}
      <Route path="/home" element={<HomePage />} />

      {/* Auth Routes */}
      <Route path="/login" element={user ? <Navigate to="/" replace /> : <Login />} />
      <Route path="/register" element={user ? <Navigate to="/" replace /> : <Register />} />

      {/* Dedicated Kitchen Dashboard Route */}
      <Route path="/kitchen" element={<KitchenDashboard />} />

      {/* Main Root: Visitors see HomePage; Logged-in users see Dashboard & Protected Portal */}
      {user ? (
        <Route path="/" element={<Layout />}>
          <Route index element={user?.role === 'family' ? <FamilyDashboard /> : <ResidentDashboard />} />
          <Route path="health-records" element={<HealthRecords />} />
          <Route path="medication" element={<Medication />} />
          <Route path="care-team" element={<CareTeam />} />
          <Route path="appointments" element={<AppointmentsPage />} />
          <Route path="settings" element={<Settings />} />
          <Route path="support" element={<Support />} />
          <Route path="meals" element={<Meals />} />
          <Route path="rooms" element={<Rooms />} />
          <Route path="portals" element={<Portals />} />
          <Route path="billing" element={<Billing />} />
          <Route path="reports" element={<Reports />} />
        </Route>
      ) : (
        <>
          <Route path="/" element={<HomePage />} />
          {/* Unauthenticated direct visits to dashboard pages redirect to login */}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </>
      )}
    </Routes>
  );
}

