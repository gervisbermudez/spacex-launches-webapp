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
  } = useLaunches();
  const [activeTab, setActiveTab] = useState<string>("All");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredLaunches = (activeTab === "All" ? launches : favorites).filter(
    (launch) =>
      launch.mission_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  console.log({ filteredLaunches });

  const displayedLaunchesCount = filteredLaunches.length;

  const isFiltering = searchTerm !== "";

  return (
    <>
      <Header activeTab={activeTab} onTabChange={setActiveTab} />
      <main>
        <div className="container mx-auto pt-5">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <div>
            {isFiltering ? "Search results: " : "Total: "}
            {displayedLaunchesCount}
          </div>
          <LaunchList
            launchesToShow={filteredLaunches}
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
