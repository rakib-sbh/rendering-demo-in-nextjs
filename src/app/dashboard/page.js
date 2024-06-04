"use client";

import { useState } from "react";

const DashboardPage = () => {
  const [name, setName] = useState("");
  console.log("Dashboard Page in the Server");
  return (
    <div>
      <h1>Dashboard Page</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Hello, {name}</p>
    </div>
  );
};

export default DashboardPage;
