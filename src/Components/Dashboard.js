import React, { useEffect, useState } from "react";
import axios from "axios";
import LeaveBalance from "./LeaveBalance";
import LeaveApplication from "./LeaveApplication";

const Dashboard = ({ user }) => {
  const [leaveBalance, setLeaveBalance] = useState({ casual: 0, medical: 0 });

  useEffect(() => {
    const fetchLeaveBalance = async () => {
      const response = await axios.get("/api/leave-balance", {
        params: { userId: user._id },
      });
      setLeaveBalance(response.data);
    };
    fetchLeaveBalance();
  }, [user]);

  return (
    <div>
      <h1>Welcome, {user.username}</h1>
      <LeaveBalance balance={leaveBalance} />
      <LeaveApplication userId={user._id} />
    </div>
  );
};

export default Dashboard;