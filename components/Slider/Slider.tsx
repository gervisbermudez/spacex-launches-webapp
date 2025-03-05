import { useEffect, useState } from "react";

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const nextButton = document.querySelector("#next");
    const prevButton = document.querySelector("#prev");

    function handleNextClick() {
      setCurrentSlide(
        (prev) => (prev + 1) % document.querySelectorAll(".slide").length
      );
    }

    function handlePrevClick() {
      setCurrentSlide(
        (prev) =>
          (prev - 1 + document.querySelectorAll(".slide").length) %
          document.querySelectorAll(".slide").length
      );
    }

    nextButton?.addEventListener("click", handleNextClick);
    prevButton?.addEventListener("click", handlePrevClick);

    // Cleanup event listeners on component unmount
    return () => {
      nextButton?.removeEventListener("click", handleNextClick);
      prevButton?.removeEventListener("click", handlePrevClick);
    };
  }, []);

  useEffect(() => {
    const slides = document.querySelectorAll(".slide");

    function showSlide(index: number) {
      slides.forEach((slide, i) => {
        slide.classList.toggle("opacity-0", i !== index);
        slide.classList.toggle("translate-x-full", i > index);
        slide.classList.toggle("-translate-x-full", i < index);
      });
    }

    showSlide(currentSlide);
  }, [currentSlide]);

  console.log({
    currentSlide,
  });

  return (
    <div className="w-full">
      <div className="relative overflow-hidden h-60">
        <div className="slide transition-transform duration-500 ease-in-out transform">
          <h3 className="text-left uppercase text-xl">Overview</h3>
          <table className="min-w-full bg-white">
            <tbody>
              <tr className="border-b last:border-b-0">
                <td className="px-0 py-2 text-left uppercase">Launch Date</td>
                <td className="px-0 py-2 text-right">2023-10-10</td>
              </tr>
              <tr className="border-b last:border-b-0">
                <td className="px-0 py-2 text-left uppercase">Rocket Name</td>
                <td className="px-0 py-2 text-right">Falcon 9</td>
              </tr>
              <tr className="border-b last:border-b-0">
                <td className="px-0 py-2 text-left uppercase">Launch Site</td>
                <td className="px-0 py-2 text-right">Cape Canaveral</td>
              </tr>
              <tr className="border-b last:border-b-0">
                <td className="px-0 py-2 text-left uppercase">Payload</td>
                <td className="px-0 py-2 text-right">Starlink Satellites</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="slide transition-transform duration-500 ease-in-out transform opacity-0 translate-x-full">
          <h3>Slider 2</h3>
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2">Parameter</th>
                <th className="py-2">Value</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b last:border-b-0">
                <td className="px-0 py-2 text-left uppercase">Parameter 1</td>
                <td className="px-0 py-2 text-right">Value 1</td>
              </tr>
              <tr className="border-b last:border-b-0">
                <td className="px-0 py-2 text-left uppercase">Parameter 2</td>
                <td className="px-0 py-2 text-right">Value 2</td>
              </tr>
              <tr className="border-b last:border-b-0">
                <td className="px-0 py-2 text-left uppercase">Parameter 3</td>
                <td className="px-0 py-2 text-right">Value 3</td>
              </tr>
              <tr className="border-b last:border-b-0">
                <td className="px-0 py-2 text-left uppercase">Parameter 4</td>
                <td className="px-0 py-2 text-right">Value 4</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="slide transition-transform duration-500 ease-in-out transform opacity-0 translate-x-full">
          <h3>Slider 3</h3>
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2">Parameter</th>
                <th className="py-2">Value</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b last:border-b-0">
                <td className="px-0 py-2 text-left uppercase">Parameter 1</td>
                <td className="px-0 py-2 text-right">Value 1</td>
              </tr>
              <tr className="border-b last:border-b-0">
                <td className="px-0 py-2 text-left uppercase">Parameter 2</td>
                <td className="px-0 py-2 text-right">Value 2</td>
              </tr>
              <tr className="border-b last:border-b-0">
                <td className="px-0 py-2 text-left uppercase">Parameter 3</td>
                <td className="px-0 py-2 text-right">Value 3</td>
              </tr>
              <tr className="border-b last:border-b-0">
                <td className="px-0 py-2 text-left uppercase">Parameter 4</td>
                <td className="px-0 py-2 text-right">Value 4</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex justify-between items-center mt-4">
        <button id="prev" className="bg-gray-800 text-white px-2 py-1">
          <svg
            width={8}
            height={15}
            viewBox="0 0 8 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.875 13.375L1.375 7.1875L6.875 1"
              stroke="white"
              strokeOpacity="0.87"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <div className="flex justify-center mt-4">
          <button
            className={`indicator w-2 h-2 rounded-full mx-1 ${
              currentSlide === 0 ? "bg-app-gray-100" : "bg-app-surface"
            }`}
          ></button>
          <button
            className={`indicator w-2 h-2 rounded-full mx-1 ${
              currentSlide === 1 ? "bg-app-gray-100" : "bg-app-surface"
            }`}
          ></button>
          <button
            className={`indicator w-2 h-2 rounded-full mx-1 ${
              currentSlide === 2 ? "bg-app-gray-100" : "bg-app-surface"
            }`}
          ></button>
        </div>
        <button id="next" className="bg-gray-800 text-white px-2 py-1">
          <svg
            width={8}
            height={15}
            viewBox="0 0 8 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.125 1.625L6.625 7.8125L1.125 14"
              stroke="white"
              strokeOpacity="0.87"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
