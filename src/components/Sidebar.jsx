import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {
  LayoutDashboard, Users, FileText, ReceiptText, FolderOpen,
  Users2, CalendarCheck2, ListTodo, LifeBuoy, Rocket,
  BookText, Settings, BarChart,
  IndianRupeeIcon,
  Calendar} from "lucide-react";
import "../Styles/Sidebar.scss";

const Sidebar = () => {
  const { user, employeeData } = useAuth();
  const currentEmployee = user
    ? employeeData.find((emp) => emp.id === user.token)
    : null;

  const linkClasses = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";

  return (
    <div >
      {user ? (
        <aside className="sidebar">
          <ul>
            <li className="user-info">
              <img
                src={currentEmployee?.image}
                alt="User"
                className="user-pic"
              />
              <span className="user-name">
                Hi, {currentEmployee?.name || "User"}
              </span>
            </li>

            <li><NavLink to="/" className={linkClasses}><LayoutDashboard size={18} /> Dashboard</NavLink></li>
            <li><NavLink to="/hr" className={linkClasses}><Users size={18} /> HR Records</NavLink></li>
            <li><NavLink to="/expenses" className={linkClasses}><ReceiptText size={18} /> Expense</NavLink></li>
            <li><NavLink to="/documents" className={linkClasses}><FileText size={18} /> Document</NavLink></li>
            <li><NavLink to="/projects" className={linkClasses}><FolderOpen size={18} /> Projects</NavLink></li>
            <li><NavLink to="/attendence" className={linkClasses}><Calendar size={18} /> Attendence</NavLink></li>
            <li><NavLink to="/workload" className={linkClasses}><Users2 size={18} /> Staff Workload</NavLink></li>
            <li><NavLink to="/payslip" className={linkClasses}><IndianRupeeIcon size={18} /> Payslips & Salary</NavLink></li>
            <li><NavLink to="/timesheet" className={linkClasses}><CalendarCheck2 size={18} /> Timesheets & Leave</NavLink></li>
            <li><NavLink to="/tasks" className={linkClasses}><ListTodo size={18} /> Tasks</NavLink></li>
            <li><NavLink to="/support" className={linkClasses}><LifeBuoy size={18} /> Support</NavLink></li>
            <li><NavLink to="/leads" className={linkClasses}><Rocket size={18} /> Leads</NavLink></li>
            <li><NavLink to="/knowledge-base" className={linkClasses}><BookText size={18} /> Knowledge Base</NavLink></li>
            <li><NavLink to="/utilities" className={linkClasses}><Settings size={18} /> Utilities</NavLink></li>
            <li><NavLink to="/reports" className={linkClasses}><BarChart size={18} /> Reports</NavLink></li>
          </ul>
        </aside>
      ) : null}
    </div>
  );
};

export default Sidebar;
