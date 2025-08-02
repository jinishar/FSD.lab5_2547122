export default function DishCard({ name, price, description, image }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow hover:shadow-xl transition text-center">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover rounded mb-3"
      />
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-gray-600">{description}</p>
      <p className="mt-2 font-bold text-green-900">₹{price}</p>
    </div>
  );
}
