import restaurant from "../image/restaurant.jpg";
import Navbar from "./Navbar";
import Footer from "./Footer"; // ✅ Import Footer

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div
        className="relative w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${restaurant})` }}
      >
        <div className="absolute inset-0  bg-opacity-40 flex flex-col">
          <Navbar />
          <div className="flex-1 flex flex-col justify-center items-center text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold">Welcome to Gourmet</h1>
            <p className="mt-4 text-xl md:text-2xl">
              Book your table and enjoy our delicious menu
            </p>
          </div>
        </div>
      </div>

      {/* ✅ Footer at the bottom */}
      <Footer />
    </div>
  );
}
