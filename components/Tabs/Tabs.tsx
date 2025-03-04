import React, { useState } from "react";

interface TabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function Tabs({ activeTab, onTabChange }: TabsProps) {
  const handleTabClick = (tab: string) => {
    onTabChange(tab);
    onTabChange(tab);
  };

  const getButtonClasses = (tab: string) => {
    const baseClasses = "tab-button w-44 text-xl border-app-white";
    const activeClasses = "border-b bg-gray-800 text-white font-bold";
    const inactiveClasses = "bg-gray-200 text-black";
    return `${baseClasses} ${
      activeTab === tab ? activeClasses : inactiveClasses
    }`;
  };

  return (
    <section className="tabs-container">
      <div className="tabs flex">
        <button
          className={getButtonClasses("All")}
          onClick={() => handleTabClick("All")}
          type="button"
        >
          All
        </button>
        <button
          className={getButtonClasses("Favourites")}
          onClick={() => handleTabClick("Favourites")}
          type="button"
        >
          Favourites
        </button>
      </div>
    </section>
  );
}
