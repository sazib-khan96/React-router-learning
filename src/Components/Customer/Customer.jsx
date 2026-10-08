import React, { useState } from "react";

const Customer = ({ customer }) => {
  const { id, title, category, priority, status } = customer;
  const statuseColor = {
    Open: "bg-green-100 text-green-700",
    Pending: "bg-yellow-100 text-yellow-700",
    Resolved: "bg-blue-100 text-blue-700",
    Closed: "bg-red-100 text-red-400",
  };

  return (
    <div className="p-3 shadow-xl rounded-xl cursor-pointer ">
      <div className="flex gap-5 justify-between">
        <h3>{title}</h3>
        <button className={`px-4 py-2 rounded-full shadow-xl ${statuseColor[status]}`}>{status}</button>
      </div>
      <div className="flex gap-3 justify-between mt-3">
        <p>{id}</p>
        <p>{category}</p>
        <p>{priority}</p>
      </div>
    </div>
  );
};

export default Customer;
