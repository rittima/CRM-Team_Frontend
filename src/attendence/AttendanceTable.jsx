import React, { useState, useEffect } from 'react';
import employees from '../data';

const AttendanceTable = () => {
  const [month, setMonth] = useState("");
  const [department, setDepartment] = useState("");
  const [attendance, setAttendance] = useState([]);

  // total days for selected month
  const getDaysInMonth = (monthStr) => {
    if (!monthStr) return 0;
    const [year, month] = monthStr.split("-").map(Number);
    const today = new Date();

    // If current month and year, return today's date
    if (today.getFullYear() === year && today.getMonth() === month - 1) {
      return today.getDate();
    }
    return new Date(year, month, 0).getDate();
  };

  // set attendance when month changes
  useEffect(() => {
    const days = getDaysInMonth(month);
    if (days > 0) {
      setAttendance(
        employees.map((emp) => ({
          ...emp,
          attendance: Array(days).fill(false),
        }))
      );
    }
  }, [month]);

  // checkbox
  const toggleCheckbox = (empId, dayIndex) => {
    setAttendance((prev) =>
      prev.map((emp) => {
        if (emp.id === empId) {
          const updatedAttendance = [...emp.attendance];
          updatedAttendance[dayIndex] = !updatedAttendance[dayIndex];
          return { ...emp, attendance: updatedAttendance };
        }
        return emp;
      })
    );
  };

  const handleSearch = () => {
    console.log("Search clicked for:", month, department);
  };

  const days = getDaysInMonth(month);
  const maxMonth = new Date().toISOString().slice(0, 7);

  return (
    <div className="pl-8 space-y-4">
      {/* Filter Section */}
      <div className="flex flex-wrap gap-4 items-end">
        <div>
          <label className="block text-sm font-medium">Select Month:</label>
          <input
            type="month"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            max={maxMonth}
            className="border px-3 py-1 rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Department:</label>
          <select
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            className="border px-3 py-1 rounded"
          >
            <option value="">All</option>
            {[...new Set(employees.map((emp) => emp.department))].map(
              (dept, index) => (
                <option key={index} value={dept}>
                  {dept}
                </option>
              )
            )}
          </select>
        </div>

        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Search
        </button>
      </div>

      {/* Attendance Table */}
      {days > 0 && (
        <div className="overflow-auto">
          <table className="min-w-full border text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2 border text-left">EMP ID</th>
                <th className="p-2 border text-left">EMP Name</th>
                {[...Array(days)].map((_, i) => (
                  <th key={i} className="p-2 border text-center">{i + 1}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {attendance
                .filter((emp) => !department || emp.department === department)
                .map((emp, rowIndex) => (
                  <tr
                    key={emp.id}
                    className={rowIndex % 2 === 0 ? "bg-blue-50" : ""}
                  >
                    <td className="p-2 border">{emp.id}</td>
                    <td className="p-2 border">{emp.name}</td>
                    {emp.attendance.map((checked, dayIndex) => (
                      <td key={dayIndex} className="p-2 border text-center">
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() => toggleCheckbox(emp.id, dayIndex)}
                          className="w-4 h-4 sm:w-5 sm:h-5 accent-blue-600 transition duration-150 ease-in-out"
                        />
                      </td>
                    ))}
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AttendanceTable;
