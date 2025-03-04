import React, { useEffect } from "react";
import Logo from "@/assets/images/Logo";
import SearchIcon from "@/assets/images/SearchIcon";
import Tabs from "@/components/Tabs/Tabs";
import LaunchCard from "@/components/LaunchCard/LaunchCard";
import Paginator from "@/components/Paginator/Paginator";
import { useLaunches } from "@/context/LaunchesContext";
import Spinner from "@/components/Spinner"; // Asegúrate de tener un componente Spinner

export default function Home() {
  const {
    paginatedLaunches,
    currentPage,
    setCurrentPage,
    totalPages,
    isLoading,
  } = useLaunches();

  return (
    <>
      <header className="bg-black h-[206px] bg-app-gradient">
        <div className="container mx-auto">
          <div className="logo-container flex justify-center pt-7">
            <Logo />
          </div>
          <div className="flex flex-col justify-between h-[147px]">
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
      <main>
        <div className="container mx-auto pt-5">
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
          <section className="mx-auto">
            {isLoading ? (
              <div className="flex justify-center items-center h-64">
                <Spinner />
              </div>
            ) : (
              <>
                <div className="launches-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                  {paginatedLaunches.map((launch) => (
                    <LaunchCard key={launch.flight_number} launch={launch} />
                  ))}
                </div>
                <Paginator
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                />
              </>
            )}
          </section>
        </div>
      </main>
    </>
  );
}
