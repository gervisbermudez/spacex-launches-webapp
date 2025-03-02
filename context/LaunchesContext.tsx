import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { Launch } from "@/types";
import { fetchLaunches } from "@/utils/fetchLaunches";

interface LaunchesContextProps {
  launches: Launch[];
  setLaunches: React.Dispatch<React.SetStateAction<Launch[]>>;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchLaunches({
          limit: 5,
          sort: "flight_number",
          order: "desc",
          page: currentPage,
        });
        setLaunches(data.launches);
        setTotalPages(data.totalPages);
      } catch (error) {
        console.error("Failed to fetch launches", error);
      }
    };

    fetchData();
  }, [currentPage]);

  return (
    <LaunchesContext.Provider
      value={{ launches, setLaunches, currentPage, setCurrentPage, totalPages }}
    >
      {children}
    </LaunchesContext.Provider>
  );
};
