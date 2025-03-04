import React from "react";
import LaunchCard from "@/components/LaunchCard/LaunchCard";
import Spinner from "@/components/Spinner/Spinner";

interface LaunchListProps {
  launchesToShow: any[];
  isLoading: boolean;
  favorites: any[];
  addFavorite: (launch: any) => void;
  removeFavorite: (launch: any) => void;
  activeTab: string;
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
}

const LaunchList: React.FC<LaunchListProps> = ({
  launchesToShow,
  isLoading,
  favorites,
  addFavorite,
  removeFavorite,
  activeTab,
  currentPage,
  totalPages,
  setCurrentPage,
}) => {
  return (
    <section className="mx-auto">
      {isLoading && (
        <div className="flex justify-center items-center h-64">
          <Spinner />
        </div>
      )}
      {!isLoading && (
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
        </>
      )}
    </section>
  );
};

export default LaunchList;
