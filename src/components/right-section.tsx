import Navbar from "./navbar";
import HowWeGotHere from "./how-we-got-here";
import WeddingParty from "./wedding-party";
import ThingsToDo from "./things-to-do";
import HoneymoonFund from "./honeymoon-fund";
import { PhotoCarousel } from "./photo-carousel";
import Footer from "./footer";

export default function RightSection() {
  return (
    <div className="flex flex-col min-h-screen bg-sky-800 text-white font-eaves">
      <Navbar />
      <div className="flex justify-center">
      <img
  src="src/assets/lodge.jpg"
  alt="hero"
  className="w-full h-96 object-cover object-center"
/>
        </div>
      <div className="flex-grow overflow-y-auto p-6 space-y-12 max-w-4xl mx-auto">
        
        
        <section id="how-we-got-here" className="space-y-4">
          <HowWeGotHere />
          <div className="flex justify-center">
            <PhotoCarousel />
          </div>
        </section>
        <section id="what-were-doing" className="space-y-4">
          <WeddingParty />
        </section>
        <section id="where-were-going" className="space-y-4">
          <ThingsToDo />
          <HoneymoonFund />
        </section>
      </div>
      <Footer />
    </div>
  );
}
