import React, { useState } from "react";

interface TabsProps {
  onClick: (tab: string) => void;
}

export default function Tabs({ onClick }: TabsProps) {
  const [activeTab, setActiveTab] = useState("All");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    onClick(tab);
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
    <section className="tabs-container container">
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
