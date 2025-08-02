import Navbar from "./Navbar";
import DishCard from "./DishCard";
import pizza from "../image/pizza.jpg";
import pasta from "../image/pasta.jpg";
import paneer from "../image/paneer tikka.jpg";
import tiramisu from "../image/tiramisu.jpg";
import chicken from "../image/grilled chicken.jpg";
import salad from "../image/salad.jpg";
import menuBg from "../image/restaurant.jpg"; // ✅ Add a background image for the menu page

export default function Menu() {
  const dishes = [
    { name: "Margherita Pizza", price: 299, description: "Classic cheese pizza with fresh basil.", image: pizza },
    { name: "Pasta Alfredo", price: 349, description: "Creamy white sauce pasta with parmesan.", image: pasta },
    { name: "Paneer Tikka", price: 199, description: "Grilled paneer marinated in spices.", image: paneer },
    { name: "Tiramisu", price: 249, description: "Classic Italian dessert with coffee and mascarpone.", image: tiramisu },
    { name: "Grilled Chicken", price: 399, description: "Juicy grilled chicken served with herbs.", image: chicken },
    { name: "Fresh Garden Salad", price: 149, description: "A healthy mix of fresh vegetables and greens.", image: salad },
  ];

  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${menuBg})` }}
    >
      <div className="absolute inset-0 bg-opacity-40"></div> {/* ✅ Dark overlay */}
      <Navbar />

      <div className="relative pt-24 px-6 z-10">
        <h1 className="text-3xl font-bold text-center mb-8 text-white">Our Menu</h1>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {dishes.map((dish, i) => (
            <DishCard key={i} {...dish} />
          ))}
        </div>
      </div>
    </div>
  );
}
