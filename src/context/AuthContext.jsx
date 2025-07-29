import { createContext, useContext, useState, useEffect } from 'react';
import employees from '../data';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [employeeData, setEmployeeData] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    
    if (token) {
      console.log(token);
      const employee = employees.find(emp => emp.id === token);
      if (employee) {
        setUser({ token:employee.id, name: employee.name, email: employee.email });
      }
    }
    setEmployeeData(employees || [] );
  }, []);

  const login = (email) => {
    const employee = employees.find(emp => emp.email == email );
    if (employee) {
    localStorage.setItem('token', employee.id);
    setUser({ token: employee.id, name: employee.name, email: employee.email });
  } else {
    console.warn('Invalid login credentials');
  }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, employeeData }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
 