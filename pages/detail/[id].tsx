import Banner from "@/components/Banner/Banner";
import { useRouter } from "next/router";
import Image from "next/image";
import rocketImg1 from "assets/images/rocket-1.png";
import Slider from "@/components/Slider/Slider";
import { useLaunches } from "@/context/LaunchesContext";
import { generateSlug } from "@/utils/stringUtils";
import config from "@/config/config";
import Spinner from "@/components/Spinner/Spinner";

export default function Page(props: any) {
  const router = useRouter();
  const { launches, isLoading, addFavorite, removeFavorite, favorites } =
    useLaunches();
  const { id } = router.query;
  console.log({ props });

  const launch = launches.find(
    (launch) =>
      `${generateSlug(launch.mission_name)}-${launch.flight_number}` === id
  );

  console.log({ launch });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen bg-app-bg">
        <Spinner />
      </div>
    );
  }

  if (!launch && !isLoading) {
    return <div>Launch not found</div>;
  }

  const launchDate = launch
    ? new Date(launch.launch_date_utc).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "Unknown date";

  const launchName = launch ? launch.mission_name : "Unknown mission";
  const launchDescription = launch
    ? launch.details || "No description available."
    : "No description available.";
  const launchImage =
    launch &&
    launch.links.flickr_images &&
    launch.links.flickr_images.length > 0
      ? launch.links.flickr_images[0]
      : config.DEFAULT_LAUNCH_IMAGE;

  const isFavorite = favorites.some(
    (fav) => fav.flight_number === launch?.flight_number
  );

  const handleAddFavorite = () => {
    if (launch) {
      addFavorite(launch);
    }
  };
  const handleRemoveFavorite = () => {
    if (launch) {
      removeFavorite(launch.flight_number);
    }
  };

  return (
    <>
      <Banner
        launchDate={launchDate}
        launchName={launchName}
        launchDescription={launchDescription}
        launchImage={launchImage}
        isFavorite={isFavorite}
        onAddFavorite={handleAddFavorite}
        onRemoveFavorite={handleRemoveFavorite}
      />
      <main className="pb-20">
        <section className="bg-app-surface">
          <div className="flex justify-center w-full items-center">
            <div className="max-w-[288px] p-4">
              <div className="bg-white p-6 rounded-lg text-center">
                <h2 className="text-5xl mb-4">122 </h2>
                <p className="uppercase font-extralight">
                  Total <br />
                  launches
                </p>
              </div>
            </div>
            <div className="border-l border-white mx-4 h-20"></div>
            <div className="max-w-[288px] p-4">
              <div className="bg-white p-6 rounded-lg text-center">
                <h2 className="text-5xl mb-4">82</h2>
                <p className="uppercase font-extralight">
                  Total <br />
                  landings
                </p>
              </div>
            </div>
            <div className="border-l border-white mx-4 h-20"></div>
            <div className="max-w-[288px] p-4">
              <div className="bg-white p-6 rounded-lg text-center">
                <h2 className="text-5xl mb-4">64</h2>
                <p className="uppercase font-extralight">
                  reflown <br />
                  rockets
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="pt-20 container m-auto max-w-3xl text-center">
            <h3 className="uppercase ">About THIS Launch</h3>
            <p className="pt-5">{launchDescription}</p>
          </div>
        </section>
        <section>
          <div className="container max-w-3xl mx-auto pt-20">
            <div className="flex flex-col text-center md:flex-row gap-4">
              <div className="flex-1 flex justify-center items-center">
                <Slider />
              </div>
              <div className="flex-1">
                <Image src={rocketImg1} alt="Launch Image" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
