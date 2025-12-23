"use client";
import { useState } from "react";

export default function DashboardPage() {
  const [name, setName] = useState("User");
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to the dashboard page!</p>
      <input className="border" value={name} onChange={(e) => setName(e.target.value)} />
      <p>Hello, {name}</p>
    </div>
  );
}
