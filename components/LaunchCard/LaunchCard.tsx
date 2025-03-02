import React from "react";
import StarIcon from "@/assets/images/StarIcon";

interface LaunchCardProps {
  title: string;
  description: string;
  date: string;
  imageUrl: string;
  isFavorite: boolean;
}

export default function LaunchCard({
  title,
  description,
  date,
  imageUrl,
  isFavorite,
}: LaunchCardProps) {
  return (
    <div className="launch-card bg-app-surface rounded-lg shadow-lg max-w-[413px]">
      <div className="launch-card-image">
        <img
          src={imageUrl}
          alt="launch"
          className="w-full h-32 object-cover rounded-lg"
        />
      </div>
      <div className="launch-card-content p-4">
        <h3 className="launch-card-title text-xl font-semibold">{title}</h3>
        <p className="launch-card-description text-gray-500">{description}</p>
        <div className="launch-card-footer flex justify-between items-center mt-4">
          <span className="launch-card-date text-gray-400">{date}</span>
          <button className="favorite-icon">
            <StarIcon isActive={isFavorite} />
          </button>
        </div>
      </div>
    </div>
  );
}
