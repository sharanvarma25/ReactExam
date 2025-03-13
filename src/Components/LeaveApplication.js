import React, { useState } from "react";
import axios from "axios";

const LeaveApplication = ({ userId }) => {
  const [type, setType] = useState("casual");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleApply = async () => {
    try {
      await axios.post("/api/apply-leave", {
        userId,
        type,
        startDate,
        endDate,
      });
      alert("Leave applied successfully!");
    } catch (error) {
      console.error("Failed to apply leave", error);
    }
  };

  return (
    <div>
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="casual">Casual Leave</option>
        <option value="medical">Medical Leave</option>
      </select>
      <input
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />
      <input
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
      />
      <button onClick={handleApply}>Apply</button>
    </div>
  );
};

export default LeaveApplication;