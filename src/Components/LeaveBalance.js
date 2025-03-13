import React from "react";

const LeaveBalance = ({ balance }) => {
  return (
    <div>
      <h2>Leave Balance</h2>
      <p>Casual Leave: {balance.casual} days</p>
      <p>Medical Leave: {balance.medical} days</p>
    </div>
  );
};

export default LeaveBalance;