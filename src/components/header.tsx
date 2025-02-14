import sunflower from "../assets/sunflower.svg"; // Adjust path as needed

export default function Header() {
  return (
    <div className="relative h-screen w-2/3 flex flex-col items-center">
      {/* Sunflower behind the text (absolute positioning) */}
      <img
        src={sunflower}
        alt="Sunflower"
        className="
        "
      />

      <h1
        className="
          text-4xl 
          font-bold 
          text-center
          font-mrsEaves
          
        "
      >
        JESSICA<br/> &amp; <br/>KENNY
      </h1>
      <p
        className="
          text-lg 
          font-mrsEaves
        "
      >
        Are Getting Married!
      </p>
    </div>
  );
}
