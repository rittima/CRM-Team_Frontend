import React, { useState } from 'react'
import AttendanceTable from './AttendanceTable';

const Page = () => {
  return (
    <div>
      <div className="p-7">
        <h1 className="text-xl font-bold text-gray-700">Attendance Sheet</h1>
      </div>
      
      <div className="overflow-auto max-w-[100vh] max-h-[70vh]  px-4">
        <AttendanceTable />
      </div>
    </div>

  )
}

export default Page
