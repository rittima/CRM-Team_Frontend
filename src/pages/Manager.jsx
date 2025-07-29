import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceFrown } from '@fortawesome/free-regular-svg-icons';
import { faBackward } from '@fortawesome/free-solid-svg-icons';

const Manager = () => {
  const navigate = useNavigate();

  return (
    <div className="p-20 flex flex-col items-center justify-center ">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-600 mb-4">403</h1>
        <p className="text-2xl text-gray-800 mb-2">
          <FontAwesomeIcon icon={faFaceFrown} className="mr-2" />
          Access Denied! You are not a Manager.
        </p>
        <p className="pl-10 text-gray-500 mb-6 w-150">
          You don't have permission to view this page. If you think this is a mistake, please raise a support ticket.
        </p>
        <button
          onClick={() => navigate('/')}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded shadow"
        >
          <FontAwesomeIcon icon={faBackward} className="mr-2" />
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default Manager;
