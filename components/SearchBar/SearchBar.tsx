import React from "react";
import SearchIcon from "@/components/Icons/SearchIcon";
import ClearIcon from "@/components/Icons/ClearIcon";

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="relative w-full max-w-sm mt-4 mb-8">
      <div className="search-icon absolute top-4 left-3">
        <SearchIcon />
      </div>
      <input
        type="text"
        placeholder="Search all launches..."
        className="search-input w-full h-12 px-4 border-0 rounded-lg pl-10 pr-10 bg-app-surface"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {searchTerm && (
        <div
          className="clear-icon absolute top-5 right-3 cursor-pointer"
          onClick={() => setSearchTerm("")}
        >
          <ClearIcon />
        </div>
      )}
    </div>
  );
};

export default SearchBar;
