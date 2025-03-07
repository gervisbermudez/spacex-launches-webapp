import React, { useState, useEffect } from "react";
import { Launch } from "@/types";
import StarIcon from "@/components/Icons/StarIcon";
import config from "@/config/config";
import Link from "next/link";
import { generateSlug } from "@/utils/stringUtils";

interface LaunchCardProps {
  launch: Launch;
  onAddFavorite: (launch: Launch) => void;
  onRemoveFavorite: (flightNumber: number) => void;
  isFavorite: boolean;
}

export default function LaunchCard({
  launch,
  onAddFavorite,
  onRemoveFavorite,
  isFavorite,
}: LaunchCardProps) {
  const handleFavoriteClick = () => {
    if (isFavorite) {
      onRemoveFavorite(launch.flight_number);
    } else {
      onAddFavorite(launch);
    }
  };

  const launchImage =
    launch.links.flickr_images && launch.links.flickr_images.length > 0
      ? launch.links.flickr_images[0]
      : config.DEFAULT_LAUNCH_IMAGE;

  const missionSlug = generateSlug(launch.mission_name);

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
          <Link
            href={`/detail/${missionSlug}-${launch.flight_number}`}
            className="text-blue-500 hover:underline"
          >
            {launch.mission_name}
          </Link>
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
