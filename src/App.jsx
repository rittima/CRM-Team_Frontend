import { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import ProtectedRoute from './components/ProtectedRoute';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound';
import Projects from './pages/Projects';
import Documents from './pages/Documents';
import Report from './pages/Report';

function App() {
  return (
    <>
      <div id="mobile-block" className='block md:hidden text-center text-red-600 text-xl p-6'>
        This CRM application is not available on mobile devices.
      </div>

      <div id="desktop-app" className="flex min-h-screen hidden md:flex">
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
              <Route path="/register" element={<Register />} />
              <Route path="*" element={<NotFound />} />
              {/* <Route path='/attendance' element={<Attendance />} /> */}
            </Routes>
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
