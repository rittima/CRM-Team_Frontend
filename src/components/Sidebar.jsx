import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Sidebar.scss";

const Sidebar = () => {
  const { user, employeeData } = useAuth();
  const currentEmployee = user
    ? employeeData.find((emp) => emp.id === user.token)
    : null;

  const linkClasses = ({ isActive }) =>
    `block px-5 py-3 rounded transition 
     ${
       isActive
         ? "bg-blue-600 text-white"
         : "hover:bg-blue-100 hover:text-blue-700"
     }`;

  return (
    <div className="sticky top-0 left-0 h-full ">
      {user ? (
        <aside className="sidebar">
          <ul>
            <li className="user-info">
              <img
                src={currentEmployee.image}
                alt="User"
                className="user-pic"
              />
              <span className="user-name">
                Hi, {currentEmployee?.name || "User"}
              </span>
            </li>
            <li>
              <NavLink to="/" className="nav-link">
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" className="nav-link">
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/documents" className="nav-link">
                Documents
              </NavLink>
            </li>
            <li>
              <NavLink to="/reports" className="nav-link">
                Reports
              </NavLink>
            </li>
            <li>
              <NavLink to="/manager" className="nav-link">
                Manager
              </NavLink>
            </li>
          </ul>
        </aside>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Sidebar;
