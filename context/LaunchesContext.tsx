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

interface LaunchesContextProps {
  launches: Launch[];
  paginatedLaunches: Launch[];
  setLaunches: React.Dispatch<React.SetStateAction<Launch[]>>;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
  isLoading: boolean;
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

  const launchesPerPage = config.LAUNCHES_PER_PAGE;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchLaunches({
          sort: "flight_number",
          order: "asc",
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
  }, []);

  useEffect(() => {
    const offset = (currentPage - 1) * launchesPerPage;
    setPaginatedLaunches(launches.slice(offset, offset + launchesPerPage));
  }, [launches, currentPage]);

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
      }}
    >
      {children}
    </LaunchesContext.Provider>
  );
};
