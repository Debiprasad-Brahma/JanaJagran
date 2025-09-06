import React, {useState} from "react"
import {Menu, X} from "lucide-react" // Hamburger icons
import {Link, useNavigate} from "react-router-dom"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-md shadow-md z-50">
      <nav className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <h1
        onClick={() => navigate("/")} 
        className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent cursor-pointer">
          JanaJagran
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          <Link to="/">
            <li className="hover:text-blue-600 cursor-pointer transition">Home</li>
          </Link>
          <Link to="/about">
            <li className="hover:text-blue-600 cursor-pointer transition">About</li>
          </Link>
          <Link to="/learn">
            <li className="hover:text-blue-600 cursor-pointer transition">Let's Learn</li>
          </Link>
          <Link to="/stories">
            <li className="hover:text-blue-600 cursor-pointer transition">Stories</li>
          </Link>
        </ul>

        {/* Desktop CTA Button */}
        <button
          onClick={() => navigate("/takepledge")}
          className="hidden md:block bg-gradient-to-r from-blue-600 to-green-500 text-white px-5 py-2 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-transform cursor-pointer"
        >
          Take the Pledge
        </button>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col gap-4 p-4 text-gray-700 font-medium">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
            >
              <li className="hover:text-blue-600 cursor-pointer transition">Home</li>
            </Link>
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
            >
              <li className="hover:text-blue-600 cursor-pointer transition">About</li>
            </Link>
            <Link
              to="/learn"
              onClick={() => setIsOpen(false)}
            >
              <li className="hover:text-blue-600 cursor-pointer transition">Let's Learn</li>
            </Link>
            <Link
              to="/stories"
              onClick={() => setIsOpen(false)}
            >
              <li className="hover:text-blue-600 cursor-pointer transition">Stories</li>
            </Link>
            <button
              onClick={() => {
                navigate("/takepledge")
                setIsOpen(false) // close menu after navigation
              }}
              className="bg-gradient-to-r from-blue-600 to-green-500 text-white px-5 py-2 rounded-full shadow-md hover:scale-105 transition cursor-pointer"
            >
              Take the Pledge
            </button>
          </ul>
        </div>
      )}
    </header>
  )
}

export default Navbar
