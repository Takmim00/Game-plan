import { useState } from "react";
import Chat from "./dashboard/Chat";
import Sidebar from "./dashboard/Sidebar";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <Chat setSidebarOpen={setSidebarOpen} />
    </div>
  );
}
