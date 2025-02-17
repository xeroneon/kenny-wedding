import sunflower from "../assets/distressed.svg"; // Adjust path as needed

export default function Header() {
  return (
    <div className="relative flex flex-col items-center mt-10">
      <img
        src={sunflower}
        alt="Sunflower"
        className="absolute -left-24 -top-16 w-64 pointer-events-none"
      />

      <h1 className="text-6xl md:text-8xl text-center font-eaves z-10 text-blue-950">
        JESSICA
        <br /> &amp; <br />
        KENNY
      </h1>
      <p className="text-2xl  md:text-3xl font-eaves text-blue-950">Are Getting Married!</p>
    </div>
  );
}
