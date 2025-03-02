import React from "react";
import { Launch } from "@/types";
import StarIcon from "@/assets/images/StarIcon";

interface LaunchCardProps {
  launch: Launch;
}

export default function LaunchCard({ launch }: LaunchCardProps) {
  console.log(launch);

  const launchImage =
    launch.links.flickr_images && launch.links.flickr_images.length > 0
      ? launch.links.flickr_images[0]
      : "https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className="launch-card bg-app-surface rounded-lg shadow-lg max-w-[413px]">
      <div className="launch-card-image">
        <img
          src={launchImage}
          alt="launch"
          className="w-full h-32 object-cover rounded-lg"
        />
      </div>
      <div className="launch-card-content p-4">
        <h3 className="launch-card-title text-xl font-semibold">
          {launch.flight_number} - {launch.rocket.rocket_name}
        </h3>
        <p className="launch-card-description text-gray-500 overflow-hidden text-ellipsis whitespace-nowrap max-h-12">
          {launch.details}
        </p>
        <div className="launch-card-footer flex justify-between items-center mt-4">
          <span className="launch-card-date text-gray-400">
            {new Date(launch.launch_date_utc).toLocaleDateString()}
          </span>
          <button className="favorite-icon">
            <StarIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
