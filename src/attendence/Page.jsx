import React, { useState } from 'react'
import AttendanceTable from './AttendanceTable';

const Page = () => {
  return (
    <div>
      <div className="p-7">
        <h1 className="text-xl font-bold text-gray-700 ">Attendance Sheet</h1>
      </div>
      
      <div>
        <AttendanceTable />
      </div>
    </div>

  )
}

export default Page
