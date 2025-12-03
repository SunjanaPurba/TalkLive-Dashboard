
import { Outlet } from "react-router-dom";
import Header from "~/components/layout/header";
import Sidebar from "~/components/layout/sidebar";

export default function BaseLayout() {
  return (
    <div className="flex min-h-screen bg-[#F5F7FB]">
      {/* Sidebar */}
      <Sidebar />

      {/* Right Side Area */}
      <div className="flex flex-col flex-1 ml-[26px]">
        {/* Header */}
        <Header />

        {/* Page Content */}
        <main className="flex-1 mt-[82px] p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

