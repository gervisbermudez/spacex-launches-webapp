import React, { useEffect } from "react";
import Logo from "@/assets/images/Logo";
import SearchIcon from "@/assets/images/SearchIcon";
import Tabs from "@/components/Tabs/Tabs";
import LaunchCard from "@/components/LaunchCard/LaunchCard";
import Paginator from "@/components/Paginator/Paginator";
import { useLaunches } from "@/context/LaunchesContext";

export default function Home() {
  const { paginatedLaunches, currentPage, setCurrentPage, totalPages } =
    useLaunches();

  return (
    <>
      <header className="bg-black h-[206px] bg-app-gradient">
        <div className="container mx-auto">
          <div className="logo-container flex justify-center pt-7 mx-4">
            <Logo />
          </div>
          <div className="flex flex-col justify-between h-[147px] mx-4">
            <div className="main-title mt-7">
              <h2 className="text-4xl tracking-wider">Launches</h2>
            </div>
            <Tabs
              onClick={function (tab: string): void {
                // throw new Error("Function not implemented.");
              }}
            />
          </div>
        </div>
      </header>
      <main className="container mx-auto pt-5">
        <div className="relative w-full max-w-sm mt-4 mb-8">
          <div className="search-icon absolute top-4 left-3">
            <SearchIcon />
          </div>
          <input
            type="text"
            placeholder="Search all launches..."
            className="search-input w-full h-12 px-4 border-0 rounded-lg pl-10 bg-app-surface"
          />
        </div>
        <section className="container mx-auto">
          <div className="launches-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {paginatedLaunches.map((launch) => (
              <LaunchCard key={launch.flight_number} launch={launch} />
            ))}
          </div>
          <Paginator
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </section>
      </main>
    </>
  );
}
