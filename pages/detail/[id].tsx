import Banner from "@/components/Banner/Banner";
import { useRouter } from "next/router";
import Image from "next/image";
import rocketImg1 from "assets/images/rocket-1.png";
import Slider from "@/components/Slider/Slider";

export default function Page(props: any) {
  const router = useRouter();
  const { id } = router.query;
  console.log({ props });

  return (
    <>
      <Banner />
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
            <p className="pt-5">
              FalconSat is a reusable, two-stage rocket designed and
              manufactured by SpaceX for the reliable and safe transport of
              people and payloads into Earth orbit and beyond. FalconSat is the
              world’s first orbital class reusable rocket. Reusability allows
              SpaceX to refly the most expensive parts of the rocket, which in
              turn drives down the cost of space access.
            </p>
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
