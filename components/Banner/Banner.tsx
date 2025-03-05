import ArrowBackIcon from "@/components/Icons/ArrowBackIcon";
import StarIcon from "@/components/Icons/StarIcon";
import config from "@/config/config";
import { useRouter } from "next/router";

export default function Banner() {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  const launchDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const launchName = "FALCONSAT";
  const launchDescription = "First orbital class rocket capable of reflight";
  return (
    <header className="relative" style={{ aspectRatio: "1440 / 555" }}>
      <nav className="container flex justify-between items-center relative z-30 h-20">
        <button
          className="rounded-full w-10 h-10 bg-app-surface flex justify-center items-center"
          onClick={goBack}
        >
          <ArrowBackIcon />
        </button>
        <button className="rounded-full w-10 h-10 bg-app-surface flex justify-center items-center">
          <StarIcon />
        </button>
      </nav>
      <div className="container m-auto max-w-3xl top-64 relative z-30 text-white mt-20">
        <div className="launch-date">{launchDate}</div>
        <h1 className="text-4xl font-bold text-white uppercase">
          {launchName}
        </h1>
        <span className="text-2xl">{launchDescription}</span>
      </div>
      <div className="absolute w-full h-full bg-detail-gradient z-20 top-0"></div>
      <div
        className="launch-image absolute w-full h-full bg-cover bg-center z-10 top-0"
        style={{ backgroundImage: `url(${config.DEFAULT_LAUNCH_IMAGE})` }}
      ></div>
    </header>
  );
}
