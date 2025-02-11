import "./App.css";
import { Background } from "./components/background";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./components/ui/carousel";
import { Separator } from "./components/ui/separator";
import image1 from "./assets/wingding 2.jpg";
import image2 from "./assets/wingding 3.jpg";
import image3 from "./assets/wingding 4.jpg";
import image4 from "./assets/wingding 5.jpg";
import image5 from "./assets/wingding 6.jpg";
import Countdown from "./components/countdown";
const carouselImages = [image1, image2, image3, image4, image5];

export default function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen subpixel-antialiased font-cormorant">
      <Background />
      <div className="bg-amber-50 text-amber-500 justify-center flex w-1/5 rounded-full p-4 shadow-xl mb-4 font-sans">
        <Countdown targetDate={"2025-04-04T16:00:00"} />
      </div>
      <div className="flex items-center w-1/2 h-1/2 bg-amber-50 shadow-xl rounded-lg p-6">
        <div className="w-1/2 flex flex-col items-center h-full">
          <h1 className="font-cormorant text-blue-900 mt-4 text-5xl">
            {"Jessica & Kenny"}
          </h1>
          <p className="text-amber-700 mt-10 font-cormorant text-xl">
            Request the pleasure of your company
          </p>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-md mt-10"
          >
            <CarouselContent>
              {carouselImages.map((src, index) => (
                <CarouselItem key={index} className="lg:basis-1/3">
                  <div className="aspect-square">
                    <img
                      src={src}
                      className="object-cover rounded-lg shadow-lg"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="border-blue-900 bg-blue-100" />
            <CarouselNext className="border-blue-900 bg-blue-100" />
          </Carousel>
          <div className="text-xl flex flex-col items-center mt-10 text-blue-900">
            <p>April 4th, 2025</p>
            <p>4:00 PM</p>
            <p>Tenaya Lodge in Yosemite</p>
          </div>
        </div>

        <Separator orientation="vertical" className="bg-blue-900" />

        <div className="flex flex-col items-center h-full p-6 w-1/2 gap-2 font-extralight font-playfair text-sm leading-relaxed tracking-wide">
          <h2 className="text-4xl font-cormorant w-full text-blue-900 mb-4 underline-offset-8 underline">
            Our Story
          </h2>
          <p className="">
            A tale as old as time, boy and girl both *heart* one another on
            Hinge (or un-Hinged if you ask Jess), boy and girl chat on app then
            exchange numbers. Boy asks girl out on brunch date.
          </p>
          <p>
            Girl almost bails when boy changes plans to Friday night drinks and
            girl agrees. They have their first date in downtown Benicia at First
            Street Taphouse. Girl freaks out friends when it's revealed the
            night ended at Gentleman Jim's, where there are few gentlemen and no
            Jim's.
          </p>
          <p>
            Fast forward a few months later and they are officially dating and
            living together with the most American (even more American than the
            mullet Kenny was rocking) anniversary of July 4th, 2023. They went
            through a lot as a couple in a short amount of time, both happy and
            sad, which only strengthened their bond and love for each other.{" "}
          </p>
          <p>
            And on January 4th, 2025, Kenny proposed and here we are, getting
            ready for the big day on May 24th, 2025! The adventure is only just
            beginning!
          </p>
          <div className="grow flex items-center">
            <Button className="bg-blue-900 rounded-full text-2xl p-6">
              RSVP
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
