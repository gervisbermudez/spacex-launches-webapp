import React from "react";
import Logo from "@/assets/images/Logo";
import Tabs from "@/components/Tabs/Tabs";

interface HeaderProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeTab, onTabChange }) => {
  return (
    <header className="bg-black h-[206px] bg-app-gradient">
      <div className="container mx-auto">
        <div className="logo-container flex justify-center pt-7">
          <Logo />
        </div>
        <div className="flex flex-col justify-between h-[147px]">
          <div className="main-title mt-7">
            <h2 className="text-4xl tracking-wider">Launches</h2>
          </div>
          <Tabs activeTab={activeTab} onTabChange={onTabChange} />
        </div>
      </div>
    </header>
  );
};

export default Header;
