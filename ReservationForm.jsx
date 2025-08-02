import { useState } from "react";
import Navbar from "./Navbar";
import restaurant from "../image/restaurant.jpg"; // ✅ Add your background image

export default function ReservationForm() {
  const [formData, setFormData] = useState({ name: "", email: "", date: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${restaurant})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-opacity-50 flex flex-col">
        <Navbar /> {/* ✅ Navbar inside background */}

        <div className="flex-1 flex justify-center items-center px-4">
          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg w-full max-w-md"
            >
              <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
                Book a Table
              </h2>

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border rounded mb-3"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border rounded mb-3"
                required
              />

              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full p-2 border rounded mb-3"
                required
              />

              <button className="bg-green-700 text-white w-full py-2 rounded hover:bg-green-800">
                Reserve
              </button>
            </form>
          ) : (
            <div className="bg-white bg-opacity-90 p-6 rounded-lg text-center shadow-lg">
              <h2 className="text-2xl font-bold text-green-800">
                Reservation Confirmed!
              </h2>
              <p className="mt-2 text-gray-800">
                Thank you, {formData.name}. Your table is booked for {formData.date}.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
