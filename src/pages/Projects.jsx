import React from 'react';
import { projects } from '../data'; 

const Projects = () => {
  return (
    <div>
      {/* <div className="p-4 text-gray-500 text-1xl pl-7 font-bold">CRM Projects</div> */}
      <div className="overflow-x-auto p-6">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
          <thead className="bg-gray-900 text-white">
            <tr>
              <th className="py-3 px-6 text-left text-sm font-semibold">Project ID</th>
              <th className="py-3 px-6 text-left text-sm font-semibold">Title</th>
              <th className="py-3 px-6 text-left text-sm font-semibold">Description</th>
              <th className="py-3 px-6 text-left text-sm font-semibold">Project Manager</th>
              <th className="py-3 px-6 text-left text-sm font-semibold">Status</th>
              <th className="py-3 px-6 text-left text-sm font-semibold">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {projects.map((project) => (
              <tr key={project.projectId} className="hover:bg-gray-50">
                <td className="py-3 px-6 text-sm text-gray-700">{project.projectId}</td>
                <td className="py-3 px-6 text-sm text-gray-700">{project.title}</td>
                <td className="py-3 px-6 text-sm text-gray-700">{project.description}</td>
                <td className="py-3 px-6 text-sm text-gray-700">{project.manager}</td>
                <td className="py-3 px-6 text-sm">
                  <span
                    className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full
                    ${project.status === 'Completed' ? 'bg-green-100 text-green-800' :
                      project.status === 'Ongoing' ? 'bg-blue-100 text-blue-800' :
                      project.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-800'}`}>
                    {project.status}
                  </span>
                </td>
                <td className="py-3 px-6 text-sm text-gray-700">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium py-1 px-3 rounded shadow-sm transition duration-200">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Projects;
