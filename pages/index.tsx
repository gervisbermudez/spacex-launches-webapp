import React, { useState } from "react";
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
    favorites,
    addFavorite,
    removeFavorite,
    launches,
  } = useLaunches();
  const [activeTab, setActiveTab] = useState<string>("All");

  const launchesToShow = activeTab === "All" ? paginatedLaunches : favorites;

  const displayedLaunchesCount =
    activeTab === "All" ? launches.length : launchesToShow.length;

  console.log({
    launchesToShow,
  });

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
            <Tabs activeTab={activeTab} onTabChange={setActiveTab} />
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
          <div>Total: {displayedLaunchesCount}</div>
          <section className="mx-auto">
            {isLoading ? (
              <div className="flex justify-center items-center h-64">
                <Spinner />
              </div>
            ) : (
              <>
                <div className="launches-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                  {launchesToShow.map((launch) => (
                    <LaunchCard
                      key={launch.flight_number + launch.launch_date_unix}
                      launch={launch}
                      onAddFavorite={addFavorite}
                      onRemoveFavorite={removeFavorite}
                      isFavorite={favorites.some(
                        (fav) => fav.flight_number === launch.flight_number
                      )}
                    />
                  ))}
                </div>
                {activeTab === "All" && (
                  <Paginator
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                  />
                )}
              </>
            )}
          </section>
        </div>
      </main>
    </>
  );
}
