import React from "react"
import { Users, Leaf, ShieldCheck, Target, Eye } from "lucide-react"
import { useNavigate } from "react-router-dom"
const About = () => {
  const navigate = useNavigate()
  return (
    <section className="w-full bg-gradient-to-b from-blue-50 via-white to-green-50 py-25 px-6 md:px-20">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Page Title */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
            About JanaJagran
          </h1>
          <p className="mt-4 text-gray-600 text-lg max-w-3xl mx-auto">
            Civic sense is the backbone of a respectful, safe, and progressive society. 
            At JanaJagran, we are committed to spreading awareness and inspiring responsibility 
            in every citizen.
          </p>
        </div>

        {/* Who We Are */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-blue-700 mb-4">Who We Are</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              JanaJagran is a civic awareness initiative dedicated to building a society where 
              responsibility, respect, and discipline guide our daily lives. We believe that real 
              progress begins not with policies alone, but with the everyday actions of people.
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <Users size={120} className="text-blue-600" />
          </div>
        </div>

        {/* What is Civic Sense */}
        <div className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-xl transition">
          <h2 className="text-3xl font-bold text-green-600 mb-6">What is Civic Sense?</h2>
          <ul className="space-y-3 text-gray-700 text-lg">
            <li>🧹 Keeping public spaces clean</li>
            <li>🚦 Respecting traffic rules</li>
            <li>🏛️ Using public property responsibly</li>
            <li>⏳ Standing in queues and respecting others’ time</li>
            <li>🤝 Showing kindness and empathy in public places</li>
          </ul>
        </div>

        {/* Why It Matters */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 flex justify-center">
            <ShieldCheck size={120} className="text-green-600" />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-green-700 mb-4">Why It Matters</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              A nation’s true identity is not only reflected in its economy or technology, 
              but in the behavior of its people. Civic sense promotes safety, dignity, and harmony, 
              while its absence creates chaos, dirt, and disrespect. The small habits of individuals 
              build the big image of a nation.
            </p>
          </div>
        </div>

        {/* Mission and Vision */}
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-gradient-to-br from-blue-600 to-green-500 text-white p-8 rounded-2xl shadow-lg hover:scale-105 transition">
            <Target size={50} />
            <h3 className="text-2xl font-bold mt-4 mb-2">Our Mission</h3>
            <p className="text-lg">
              To awaken every citizen about their civic duties and empower them 
              to take small, meaningful actions that lead to big societal change.
            </p>
          </div>
          <div className="bg-gradient-to-br from-green-500 to-blue-600 text-white p-8 rounded-2xl shadow-lg hover:scale-105 transition">
            <Eye size={50} />
            <h3 className="text-2xl font-bold mt-4 mb-2">Our Vision</h3>
            <p className="text-lg">
              A future where cities are clean and green 🌱, roads are safe 🚗, 
              public spaces are respected 🏞️, and every citizen feels proud to contribute 🙌
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Change starts with awareness — but it grows with responsibility.
          </h2>
          <button
          onClick={() => navigate('/takepledge')} 
          className="bg-gradient-to-r from-blue-600 to-green-500 text-white px-8 py-3 rounded-full shadow-md hover:scale-105 transition font-semibold cursor-pointer">
            Take the Pledge 🚀
          </button>
        </div>
      </div>
    </section>
  )
}

export default About
