import React from "react";
import SearchIcon from "@/assets/images/SearchIcon";

const SearchBar: React.FC = () => {
  return (
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
  );
};

export default SearchBar;
