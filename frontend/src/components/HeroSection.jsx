import React from "react";
import arrow from "../assets/footerAssets/arrow.svg";
import HeroBg from "../assets/HeroSection/HeroBg.svg";
import Video from "../assets/HeroSection/Group 31.svg";
import VideoIcon from "../assets/HeroSection/videoImg.svg";
import clientImg1 from '../assets/ClientPgAssets/1.jpg';
import clientImg2 from '../assets/ClientPgAssets/2.jpg';
import clientImg3 from '../assets/ClientPgAssets/3.jpg';

const HeroSection = () => {
  const handlePlay = (e) => {
    e.preventDefault();
    const videoElement = e.currentTarget.querySelector("video");
    videoElement.requestFullscreen();
    videoElement.play();
  };

  return (
    <section
      className="max-w-screen relative py-44 flex justify-end"
      style={{
        backgroundImage: `url(${HeroBg})`,
        backgroundSize: "80%",
        backgroundPosition: "50% 15%",
        backgroundRepeat: "no-repeat",
        height: "80vh",
      }}
    >
      <div className="relative container mx-auto px-6 flex flex-col lg:flex-row items-start justify-around w-screen">
        <div className="lg:w-1/2">
          <h1
            data-aos="fade-right"
            className="text-4xl md:text-7xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6"
          >
            More Than Just <br />
            <span className="inline-flex items-center">
              <span className="mx-2">A</span>
              <img
                src={arrow}
                alt="Arrow Icon"
                className="bg-[#227c85] hover:bg-[#165056] duration-300 rounded-full w-20 h-10"
              />
              <span className="mx-2">Creative</span>
            </span>
            <br />
            Agency
          </h1>

          <div className="flex flex-wrap gap-2" data-aos="fade-up-left">
            <button className="bg-[#227c85] py-1 px-6 mr-2 text-white rounded-full text-xl font-semibold font-sans hover:bg-[#165056] duration-300  transition duration-300 ease-in-out">
              View Projects
            </button>
            <div className="flex items-center">
              <img
                src= {clientImg1}
                alt="Client 1"
                className="w-10 h-10 rounded-full border-2 border-white -ml-2"
                loading="lazy"
              />
              <img
                src= {clientImg2}
                alt="Client 2"
                className="w-10 h-10 rounded-full border-2 border-white -ml-2"
                loading="lazy"
              />
              <img
                src= {clientImg3}
                alt="Client 3"
                className="w-10 h-10 rounded-full border-2 border-white -ml-2"
                loading="lazy"
              />
              <span className="ml-4 text-gray-700 font-sans text-xl font-medium">
                100k+ Awesome <br /> Clients
              </span>
            </div>
          </div>
        </div>
        <div className="mt-6 mx-2 lg:mt-0 relative" data-aos="fade-left">
          <p className="text-gray-700 text-xl md:text-2xl leading-relaxed md:w-96 lg:block hidden">
            The Art Of Visual Communication, Creatively Impacting The World
            Around Us - One Good Design At A Time.
          </p>
          <div
            className="mt-1 py-3 w-full relative cursor-pointer group"
            onClick={handlePlay}
          >
            <img
              className="group-hover:w-0 group-hover:opacity-0 transition-opacity duration-300"
              src={Video}
              alt=""
              loading="lazy"
            />
            <img
              className="opacity-0 w-0 group-hover:w-12 group-hover:opacity-100 transition-opacity duration-700"
              src={VideoIcon}
              alt=""
              loading="lazy"
            />
            <video
              src="https://kota-content.b-cdn.net/app/uploads/2023/10/Kota-loop.mp4"
              className="absolute w-0"
              preload="metadata"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
