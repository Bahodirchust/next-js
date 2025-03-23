import Image from "next/image";
import Dashboard from "./Dashboard/page"


export default function Home() {
  return (
    <div className="min-h-screen font-sans">
      <header className="flex justify-between items-center p-4 border-b">
        <div className="text-green-600 font-bold text-xl flex items-center gap-2">
          <span className="text-2xl">\u2714</span> GREENSHOP
        </div>
        <nav className="space-x-6">
          <a href="#" className="hover:text-green-600">Home</a>
          <a href="#" className="hover:text-green-600">Blog</a>
        </nav>
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:text-green-600">🔍</button>
          <button className="p-2 hover:text-green-600">🔔</button>
          <button className="p-2 hover:text-green-600">🛒</button>
          <button className="bg-green-600 text-white px-4 py-2 rounded flex items-center gap-2">
            🔑 Login
          </button>
        </div>
      </header>

      <section className="flex justify-between items-center p-10 bg-gray-100">
        <div className="max-w-lg">
          <h2 className="text-gray-700 text-sm">WELCOME TO GREENSHOP</h2>
          <h1 className="text-5xl font-bold text-gray-900">
            LET'S MAKE A <span className="text-green-600">BETTER PLANET</span>
          </h1>
          <p className="text-gray-600 mt-4">
            We are an online plant shop offering a wide range of cheap and trendy
            plants. Use our plants to create a unique Urban Jungle. Order your
            favorite plants!
          </p>
          <button className="mt-6 bg-green-600 text-white px-6 py-3 rounded">
            SHOP NOW
          </button>
        </div>
        <div>
          <Image
            src="/plants.png"
            width={500}
            height={400}
            alt="Plants"
            className="rounded"
          />
        </div>
      </section>

      <footer className="p-10 bg-gray-100 mt-10">
        <div className="grid grid-cols-4 gap-10">
          <div>
            <h3 className="text-xl font-bold text-green-600">GREENSHOP</h3>
            <p className="text-gray-600">70 West Buckingham Ave. Farmingdale, NY 11735</p>
            <p className="text-gray-600">contact@greenshop.com</p>
            <p className="text-gray-600">+88 01911 717 490</p>
          </div>
          <div>
            <h4 className="font-bold">My Account</h4>
            <ul className="text-gray-600">
              <li>My Account</li>
              <li>Address</li>
              <li>Wishlist</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold">Categories</h4>
            <ul className="text-gray-600">
              <li>House Plants</li>
              <li>Potter Plants</li>
              <li>Seeds</li>
              <li>Small Plants</li>
              <li>Accessories</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold">Social Media</h4>
            <div className="flex space-x-4">
              <span>📘</span>
              <span>📸</span>
              <span>🐦</span>
              <span>🔗</span>
              <span>🎥</span>
            </div>
            <h4 className="font-bold mt-4">We Accept</h4>
            <div className="flex space-x-2">
              <span>💳</span>
              <span>💳</span>
              <span>💳</span>
              <span>💳</span>
            </div>
          </div>
        </div>
        <p className="text-center text-gray-600 mt-10">&copy; 2023 GreenShop. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
