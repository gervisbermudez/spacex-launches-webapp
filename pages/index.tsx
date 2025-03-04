import React, { useState } from "react";
import Header from "@/components/Header/Header";
import SearchBar from "@/components/SearchBar/SearchBar";
import LaunchList from "@/components/LaunchList/LaunchList";
import { useLaunches } from "@/context/LaunchesContext";
import Paginator from "@/components/Paginator/Paginator";

export default function Home() {
  const {
    currentPage,
    setCurrentPage,
    totalPages,
    isLoading,
    favorites,
    addFavorite,
    removeFavorite,
    launches,
    paginatedLaunches,
  } = useLaunches();
  const [activeTab, setActiveTab] = useState<string>("All");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredLaunches = launches.filter((launch) =>
    launch.mission_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const isFiltering = searchTerm !== "";

  const launchesToShow = isFiltering
    ? filteredLaunches
    : activeTab === "All"
    ? paginatedLaunches
    : favorites;

  const displayedLaunchesCount = launchesToShow.length;

  return (
    <>
      <Header activeTab={activeTab} onTabChange={setActiveTab} />
      <main>
        <div className="container mx-auto py-5">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <div>
            {isFiltering ? "Search results: " : "Total: "}
            {displayedLaunchesCount}
          </div>
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
          {activeTab === "All" && !isFiltering && (
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
