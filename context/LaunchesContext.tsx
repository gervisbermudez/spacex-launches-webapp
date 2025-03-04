import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { Launch } from "@/types";
import { fetchLaunches } from "@/utils/fetchLaunches";
import config from "@/config/config";

export interface LaunchesContextProps {
  launches: Launch[];
  paginatedLaunches: Launch[];
  setLaunches: React.Dispatch<React.SetStateAction<Launch[]>>;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
  isLoading: boolean;
  favorites: Launch[];
  setFavorites: React.Dispatch<React.SetStateAction<Launch[]>>;
  addFavorite: (launch: Launch) => void;
  removeFavorite: (flightNumber: number) => void;
}

const LaunchesContext = createContext<LaunchesContextProps | undefined>(
  undefined
);

export const useLaunches = () => {
  const context = useContext(LaunchesContext);
  if (!context) {
    throw new Error("useLaunches must be used within a LaunchesProvider");
  }
  return context;
};

export const LaunchesProvider = ({ children }: { children: ReactNode }) => {
  const [launches, setLaunches] = useState<Launch[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [paginatedLaunches, setPaginatedLaunches] = useState<Launch[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [favorites, setFavorites] = useState<Launch[]>([]);

  const launchesPerPage = config.LAUNCHES_PER_PAGE;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchLaunches({
          sort: "flight_number",
          order: "desc",
        });
        setLaunches(data.launches);
        setTotalPages(Math.ceil(data.launches.length / launchesPerPage));
      } catch (error) {
        console.error("Failed to fetch launches", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  useEffect(() => {
    const offset = (currentPage - 1) * launchesPerPage;
    setPaginatedLaunches(launches.slice(offset, offset + launchesPerPage));
  }, [launches, currentPage]);

  const addFavorite = (launch: Launch) => {
    const updatedFavorites = [...favorites, launch];
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const removeFavorite = (flightNumber: number) => {
    const updatedFavorites = favorites.filter(
      (launch) => launch.flight_number !== flightNumber
    );
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <LaunchesContext.Provider
      value={{
        launches,
        paginatedLaunches,
        setLaunches,
        currentPage,
        setCurrentPage,
        totalPages,
        isLoading,
        favorites,
        setFavorites,
        addFavorite,
        removeFavorite,
      }}
    >
      {children}
    </LaunchesContext.Provider>
  );
};
