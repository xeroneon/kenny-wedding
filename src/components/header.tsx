import sunflower from "../assets/distressed.svg"; // Adjust path as needed

export default function Header() {
  return (
    <div className="relative w-2/3 flex flex-col items-center mt-10">
      {/* Sunflower behind the text (absolute positioning) */}
      <img
        src={sunflower}
        alt="Sunflower"
        className="absolute -left-20 -top-14 w-48 z-0"
      />

      <h1 className="text-6xl text-center font-eaves z-10 text-blue-950">
        JESSICA
        <br /> &amp; <br />
        KENNY
      </h1>
      <p className="text-2xl font-eaves text-blue-950">Are Getting Married!</p>
    </div>
  );
}
