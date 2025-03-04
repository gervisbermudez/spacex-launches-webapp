import React, { useState } from "react";
import Header from "@/components/Header/Header";
import SearchBar from "@/components/SearchBar/SearchBar";
import LaunchList from "@/components/LaunchList/LaunchList";
import { useLaunches } from "@/context/LaunchesContext";
import Paginator from "@/components/Paginator/Paginator";

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
      <Header activeTab={activeTab} onTabChange={setActiveTab} />
      <main>
        <div className="container mx-auto pt-5">
          <SearchBar />
          <div>Total: {displayedLaunchesCount}</div>
          <LaunchList
            launchesToShow={launchesToShow}
            isLoading={isLoading}
            favorites={favorites}
            addFavorite={addFavorite}
            removeFavorite={removeFavorite}
            activeTab={activeTab}
            currentPage={currentPage}
            totalPages={totalPages}
            setCurrentPage={setCurrentPage}
          />
          {activeTab === "All" && (
            <Paginator
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          )}
        </div>
      </main>
    </>
  );
}
