import React from 'react'

const LeaveCard = () => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-6 p-6">
        <div className="bg-gray-900 text-white shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
          <h4 className="text-l font-boldtext-white uppercase mb-4">Total Number of Leave Taken</h4>
          <h1 className="text-3xl font-boldtext-white uppercase mb-4">7</h1>
        </div>
        <div className="bg-gray-900 text-white shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
          <h4 className="text-l font-boldtext-white uppercase mb-4">Total Number of Leave Pending</h4>
          <h1 className="text-3xl font-boldtext-white uppercase mb-4">2</h1>
        </div>
        <div className="bg-gray-900 text-white shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
          <h4 className="text-l font-boldtext-white uppercase mb-4">Total Number of Leave Left for the week</h4>
          <h1 className="text-3xl font-boldtext-white uppercase mb-4">1</h1>
        </div>
    </div>
    </div>
  )
}

export default LeaveCard
