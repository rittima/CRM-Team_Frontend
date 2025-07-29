import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext';
import TaskCard from './TaskCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd } from '@fortawesome/free-solid-svg-icons';

const Card = () => {
  const { user, employeeData } = useAuth();
  const currentEmployee = user
    ? employeeData.find(emp => emp.id === user.token)
    : null;

  const [showModal, setShowModal] = useState(false);
  const [tasks, setTasks] = useState([]);

  const handleSaveTask = (task, taskdesc) => {
    setTasks([...tasks, { title: task, description: taskdesc }]);
    setShowModal(false);
  };

  return (
    <div>
      <div className="grid grid-cols-1 gap-6 p-6">
        {/* Employee Info */}
        <div className="bg-blue-100 shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
          <h2 className="text-xl font-bold uppercase mb-4">{currentEmployee.name}</h2>
          <div className="grid grid-cols-2">
            <p className="text-gray-600 text-sm mb-3"><b>Emp ID :</b> {currentEmployee.id}</p>
            <p className="text-gray-600 text-sm mb-3"><b>Starting day :</b> {currentEmployee.joiningDate}</p>
            <p className="text-gray-600 text-sm mb-3"><b>Designation :</b> {currentEmployee.designation}</p>
            <p className="text-gray-600 text-sm mb-3"><b>Department :</b> {currentEmployee.department}</p>
          </div>
        </div>

        {/* Task Card */}
        <div className="bg-blue-100 shadow-md p-6">
          <h3 className="text-lg font-bold mb-4">ASSIGNED TASK</h3>
          <p className="text-gray-600 text-sm mb-4"><b>Project Working on :</b> {currentEmployee.project}</p>
          <p className="text-gray-600 text-sm mb-4"><b>Status : </b>{currentEmployee.status}</p>
          <p className="text-gray-600 text-sm mb-2 font-semibold">Assigned Task Report:</p>
          
          {tasks.length === 0 ? (
            <p className="text-sm text-gray-500 italic">No tasks added yet.</p>
          ) : (
            <ul className="list-disc pl-6 space-y-1 text-sm text-gray-700">
              {tasks.map((task, index) => (
                <li key={index}>
                  <span className="font-medium">{task.title}</span>: {task.description}
                </li>
              ))}
            </ul>
          )}

          <button
            className="mt-4 bg-blue-600 text-white px-4 py-2 hover:bg-blue-800 transition"
            onClick={() => setShowModal(true)}
          >
            <FontAwesomeIcon icon={faAdd} /> New Task
          </button>
        </div>

        {/* taskModal */}
        {showModal && (
          <TaskCard
            onClose={() => setShowModal(false)}
            onSave={handleSaveTask}
          />
        )}
      </div>
    </div>
  );
};

export default Card;
