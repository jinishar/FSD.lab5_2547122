import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full flex justify-center items-center px-8 py-4 text-white z-10 relative">
      
      {/* Links on the left */}
      <div className="absolute left-8 space-x-6 font-medium">
        <Link to="/" className="nav-item hover:text-green-400 transition-colors duration-300">
          Home
        </Link>
        <Link to="/menu" className="nav-item hover:text-green-400 transition-colors duration-300">
          Menu
        </Link>
        <Link to="/reservation" className="nav-item hover:text-green-400 transition-colors duration-300">
          Reservation
        </Link>
      </div>

      {/* Center Logo */}
      <h1 className="text-5xl font-bold logo">Gourmet</h1>
    </nav>
  );
}
