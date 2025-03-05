import ArrowBackIcon from "@/components/Icons/ArrowBackIcon";
import StarIcon from "@/components/Icons/StarIcon";
import { useRouter } from "next/router";

interface BannerProps {
  launchDate: string;
  launchName: string;
  launchDescription: string;
  launchImage: string;
  isFavorite: boolean;
  onAddFavorite: () => void;
  onRemoveFavorite: () => void;
}

export default function Banner({
  launchDate,
  launchName,
  launchDescription,
  launchImage,
  isFavorite,
  onAddFavorite,
  onRemoveFavorite,
}: BannerProps) {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  const handleFavoriteClick = () => {
    if (isFavorite) {
      onRemoveFavorite();
    } else {
      onAddFavorite();
    }
  };

  return (
    <header className="relative" style={{ aspectRatio: "1440 / 555" }}>
      <nav className="container flex justify-between items-center relative z-30 h-20">
        <button
          className="rounded-full w-10 h-10 bg-app-surface flex justify-center items-center"
          onClick={goBack}
        >
          <ArrowBackIcon />
        </button>
        <button
          className="rounded-full w-10 h-10 bg-app-surface flex justify-center items-center"
          onClick={handleFavoriteClick}
        >
          <StarIcon isActive={isFavorite} />
        </button>
      </nav>
      <div className="container m-auto max-w-3xl top-64 relative z-30 text-white mt-20">
        <div className="launch-date">{launchDate}</div>
        <h1 className="text-4xl font-bold text-white uppercase">
          {launchName}
        </h1>
        <div className="text-2xl max-w-3xl overflow-hidden text-ellipsis whitespace-nowrap max-h-12">
          {launchDescription}
        </div>
      </div>
      <div className="absolute w-full h-full bg-detail-gradient z-20 top-0"></div>
      <div
        className="launch-image absolute w-full h-full bg-cover bg-center z-10 top-0"
        style={{ backgroundImage: `url(${launchImage})` }}
      ></div>
    </header>
  );
}
