export default function Footer() {
  return (
    <footer className="bg-green-950 text-gray-100 py-6 text-center mt-auto">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-xl font-bold text-white mb-2">Gourmet Restaurant</h2>
        <p>📍 123 Foodie Street, Flavor Town</p>
        <p>📞 +91 98765 43210</p>
        <p>✉️ contact@gourmet.com</p>

        <div className="flex justify-center space-x-6 mt-3">
          <a href="#" className="hover:text-yellow-300">Facebook</a>
          <a href="#" className="hover:text-yellow-300">Instagram</a>
          <a href="#" className="hover:text-yellow-300">Twitter</a>
        </div>

        <p className="mt-4 text-sm text-gray-300">
          © 2025 Gourmet. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
