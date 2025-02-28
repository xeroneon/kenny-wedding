import React from "react";
import { Button } from "./ui/button";
import { FiMapPin } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col xl:flex-row justify-between items-start w-full bg-sky-700 text-white py-4 px-6">
      <div className="w-full xl:w-3/4">
        <p className="block xl:hidden text-sm leading-normal">
          Enjoy special rates at Tenaya Lodge! Use promo code{" "}
          <strong className="text-yellow-500">BOYDKINCAID</strong>.
        </p>
        <p className="hidden xl:block leading-normal">
          We have a block of rooms reserved at Tenaya Lodge in Yosemite. Use our
          group code <strong className="text-yellow-500">BOYDKINCAID</strong>{" "}
          for special rates. Book by April 1st to secure your room. We can't
          wait to celebrate with you in this gorgeous setting!
        </p>
      </div>
      <div className="flex flex-row items-center justify-end w-full xl:w-1/4 gap-4 xl:gap-8 mt-4 xl:mt-0">
        <a
          href="geo:0,0?q=1122+Highway+41+Fish+Camp,+CA+93623"
          target="_blank"
          rel="noopener noreferrer"
          className="block xl:hidden text-2xl text-white hover:text-yellow-500"
        >
          <FiMapPin />
          <span className="sr-only">View location on map</span>
        </a>
        <div className="hidden xl:block text-right text-sm leading-tight">
          <p>
            <a
              href="geo:0,0?q=1122+Highway+41+Fish+Camp,+CA+93623"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-yellow-500"
            >
              Tenaya Lodge in Yosemite
            </a>
            <br />
            1122 Highway 41
            <br />
            Fish Camp, CA 93623
          </p>
        </div>
        <a href="https://www.visittenaya.com/" target="_blank">
          <Button
            variant="default"
            className="bg-yellow-600 text-gray-800 rounded-full px-6 py-3 text-base"
          >
            Book Now
            <IoIosArrowForward className="inline-block ml-2 xl:hidden" />
          </Button>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
