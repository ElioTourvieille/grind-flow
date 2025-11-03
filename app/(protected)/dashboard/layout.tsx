import React from 'react'

import Sidebar from "@/components/Sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 lg:ml-72 min-h-screen bg-[#1A1A1A]">
        {children}
      </main>
    </div>
  )
}

export default DashboardLayout