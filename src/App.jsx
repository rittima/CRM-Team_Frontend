import { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import ProtectedRoute from './components/ProtectedRoute';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Projects from './pages/Projects';
import Documents from './pages/Documents';
import Report from './pages/Report';
import TaskPage from './pages/TaskPage';
import HrRecord from './pages/HrRecord';
import TimesheetsAndLeaves from './pages/TimesheetsAndLeaves';
import StaffWorkload from './pages/StaffWorkload';
import Expenses from './pages/Expenses';
import Support from './pages/Support';

function App() {
  return (
    <>
      <div id="mobile-block" className='block md:hidden text-center text-red-600 text-xl p-6'>
        This CRM application is not available on mobile devices.
      </div>

      <div id="desktop-app" className="hidden md:flex min-h-screen">
        <Sidebar />

        <div className="flex-1 flex flex-col">
          <Navbar />

          <main className="flex-1 p-4">
            <Routes>
              <Route path="/" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
              <Route path="/projects" element={<ProtectedRoute><Projects /></ProtectedRoute>} />
              <Route path="/documents" element={<ProtectedRoute><Documents /></ProtectedRoute>} />
              <Route path="/reports" element={<ProtectedRoute><Report /></ProtectedRoute>} />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/tasks" element={<TaskPage />} />
              <Route path='/hr' element={<HrRecord />} />
              <Route path='/timesheet' element={<TimesheetsAndLeaves />} />
              <Route path='/workload' element={<StaffWorkload />} />
              <Route path='/expenses' element={<Expenses />} />
              <Route path='/support' element={<Support />} />

            </Routes>
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
