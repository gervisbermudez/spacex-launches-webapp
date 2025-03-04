import React, { useState, useEffect } from "react";
import { Launch } from "@/types";
import StarIcon from "@/assets/images/StarIcon";
import config from "@/config/config";

interface LaunchCardProps {
  launch: Launch;
}

export default function LaunchCard({ launch }: LaunchCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    setIsFavorite(
      favorites.some(
        (fav: Launch) => fav.flight_number === launch.flight_number
      )
    );
  }, [launch.flight_number]);

  const handleFavoriteClick = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    if (isFavorite) {
      const updatedFavorites = favorites.filter(
        (fav: Launch) => fav.flight_number !== launch.flight_number
      );
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    } else {
      favorites.push(launch);
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
    setIsFavorite(!isFavorite);
  };

  const launchImage =
    launch.links.flickr_images && launch.links.flickr_images.length > 0
      ? launch.links.flickr_images[0]
      : config.DEFAULT_LAUNCH_IMAGE;

  return (
    <div className="launch-card bg-app-surface rounded-lg shadow-lg max-w-[413px] w-full">
      <div className="launch-card-image">
        <img
          src={launchImage}
          alt="launch"
          className="w-full h-32 object-cover rounded-lg"
        />
      </div>
      <div className="launch-card-content p-4">
        <h3 className="launch-card-title text-xl font-semibold">
          {launch.rocket.rocket_name}
        </h3>
        <p className="launch-card-description text-gray-500 overflow-hidden text-ellipsis whitespace-nowrap max-h-12">
          {launch.details}
        </p>
        <div className="launch-card-footer flex justify-between items-center mt-4">
          <span className="launch-card-date text-gray-400">
            {new Date(launch.launch_date_utc).toLocaleDateString()}
          </span>
          <button className="favorite-icon" onClick={handleFavoriteClick}>
            <StarIcon isActive={isFavorite} />
          </button>
        </div>
      </div>
    </div>
  );
}
