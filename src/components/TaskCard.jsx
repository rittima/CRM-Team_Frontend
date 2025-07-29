import React, { useState } from 'react';

const TaskCard = ({ onClose, onSave }) => {
  const [task, setTask] = useState('');
  const [taskdesc, setTaskDesc] = useState('');

  const handleSave = () => {
    if (task.trim() === '' || taskdesc.trim() === '') return;
    onSave(task, taskdesc); 
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/40 backdrop-blur-sm">
      <div className="bg-white p-6 rounded shadow-lg w-1/3">
        <h1 className="text-xl font-bold mb-4"> New Task</h1>
        <input
          type="text"
          placeholder="Task Name"
          className="w-full p-2 border border-gray-300 rounded mb-4"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <textarea
          placeholder="Task Description"
          className="w-full p-2 border border-gray-300 rounded mb-4"
          value={taskdesc}
          onChange={(e) => setTaskDesc(e.target.value)}
        />
        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
