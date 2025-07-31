import LeaveCard from '../components/LeaveCard';
import { useAuth } from '../context/AuthContext';

const TimeSheet = () => {
  const { user, employeeData } = useAuth();
  const currentEmployee = user
    ? employeeData.find(emp => emp.id === user.token)
    : null;

  return (
    <div>
    <LeaveCard/>
    <div className="grid gap-6 p-6">
      {currentEmployee ? (
        <div className="bg-blue-100 shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
          <h2 className="text-xl font-bold uppercase mb-4">{currentEmployee.name}</h2>
          <div className="grid grid-cols-2">
            <p className="text-gray-600 text-sm mb-3"><b>Emp ID :</b> {currentEmployee.id}</p>
            <p className="text-gray-600 text-sm mb-3"><b>Email ID :</b> {currentEmployee.email}</p>
            <p className="text-gray-600 text-sm mb-3"><b>Starting day :</b> {currentEmployee.joiningDate}</p>
            <p className="text-gray-600 text-sm mb-3"><b>Designation :</b> {currentEmployee.designation}</p>
            <p className="text-gray-600 text-sm mb-3"><b>Department :</b> {currentEmployee.department}</p>
            <p className="text-gray-600 text-sm mb-3"><b>Project ID :</b> {currentEmployee.projectId}</p>
            <p className="text-gray-600 text-sm mb-3"><b>Project Allocated:</b> {currentEmployee.project}</p>
            <p className="text-gray-600 text-sm mb-3"><b>Status :</b> {currentEmployee.status}</p>
          </div>
        </div>
      ) : (
        <p className="text-gray-500 text-sm italic">Loading employee data...</p>
      )}
    </div>
    </div>
  );
};

export default TimeSheet;
