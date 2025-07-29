import React, { useEffect, useState } from "react";
import Clock from "react-clock";
import "react-clock/dist/Clock.css";

function Attendance() {
  const [currentTime, setCurrentTime] = useState("");
  const [checkInTime, setCheckInTime] = useState(null);
  const [checkOutTime, setCheckOutTime] = useState(null);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setDate(now);
      setCurrentTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Kolkata",
        })
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleCheckIn = () => {
    const time = new Date().toLocaleTimeString("en-US", {
      timeZone: "Asia/Kolkata",
    });
    setCheckInTime(time);
  };

  const handleCheckOut = () => {
    const time = new Date().toLocaleTimeString("en-US", {
      timeZone: "Asia/Kolkata",
    });
    setCheckOutTime(time);
  };

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">Attendance System</h2>

      <div className="text-xl mb-4">
        <strong>Current Time: </strong>
        {currentTime}
      </div>

      <div className="relative w-[200px] h-[200px] mx-auto mb-6">
        <Clock value={date} size={200} />
        <div className="absolute top-[11px] left-1/2 transform -translate-x-1/2 text-sm font-bold">12</div>
        <div className="absolute bottom-[12px] left-1/2 transform -translate-x-1/2 text-sm font-bold">6</div>
        <div className="absolute top-1/2 left-[13px] transform -translate-y-1/2 text-sm font-bold">9</div>
        <div className="absolute top-1/2 right-[13px] transform -translate-y-1/2 text-sm font-bold">3</div>
      </div>

      <div className="flex justify-center gap-4 mb-6">
        <button onClick={handleCheckIn} className="bg-green-500 text-white px-4 py-2 rounded">
          Check In
        </button>
        <button onClick={handleCheckOut} className="bg-red-500 text-white px-4 py-2 rounded">
          Check Out
        </button>
      </div>

      {checkInTime && (
        <p>
          <strong>Checked In At:</strong> {checkInTime}
        </p>
      )}
      {checkOutTime && (
        <p>
          <strong>Checked Out At:</strong> {checkOutTime}
        </p>
      )}
    </div>
  );
}

export default Attendance;

