import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar/Sidebar";
import Header from "../Components/Header/Header";

export default function DashboardLayout() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="p-4 bg-gray-50 flex-1 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
