"use client";
import { AlignLeft } from "lucide-react";
import React, { useState } from "react";
import SideMenu from "./SideMenu";

const MobileMenu = () => {
  const [ isSidebarOpen, setIsSidebarOpen] = useState(false);
  return  (
    <>
      <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} aria-label="Toggle sidebar"
  title="Toggle sidebar">
        <AlignLeft className="hover:text-darkColor hoverEffect md:hidden hover:cursor-pointer" />
        <span className="sr-only">Toggle sidebar</span>
      </button>
      <div className="md:hidden">
        <SideMenu 
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        />
      </div>
    </>
  );
};

export default MobileMenu;