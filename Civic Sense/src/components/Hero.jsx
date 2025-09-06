import React from "react"
import hero from "../assets/hero.png"
import {useNavigate} from "react-router-dom"
const Hero = () => {
  const navigate = useNavigate()
  return (
    <section className="w-full bg-gradient-to-r from-blue-50 via-white to-blue-50 py-25 px-6 md:px-16">
      <div className="flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Text Section */}
        <div className="flex-1 space-y-10 text-center md:text-left">
          {/* What is Civic Sense */}
          <div className="p-6 rounded-2xl shadow-md bg-white/70 hover:shadow-lg transition">
            <h1 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent mb-4">
              What is Civic Sense?
            </h1>
            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
              Civic sense means respecting public spaces, following rules, and caring for the
              community around us. It is the practice of keeping our surroundings clean, behaving
              responsibly in society, and treating others with respect. Civic sense is about
              discipline, consideration for others, and living as responsible citizens. It includes
              simple actions like obeying traffic rules, not littering, standing in queues, and
              respecting public property. In short, civic sense is nothing but common sense applied
              in public life.
            </p>
          </div>

          {/* Why is Civic Sense Important */}
          <div className="p-6 rounded-2xl shadow-md bg-white/70 hover:shadow-lg transition">
            <h1 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent mb-4">
              Why is Civic Sense Important?
            </h1>
            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
              Civic sense is the foundation of a safe, clean, and well-functioning society. Without
              civic sense, rules are broken, cities become dirty, and chaos replaces order. It
              ensures harmony, respect, and safety in our day-to-day interactions. A lack of civic
              sense not only affects others but also comes back to hurt us as citizens. Nations are
              judged not just by their economy, but by the civic behavior of their people. Civic
              sense helps build trust, unity, and dignity in society. The small habits of
              individuals create the big image of a nation.
            </p>
          </div>

          {/* CTA */}
          <div>
            <button
              onClick={() => navigate("/learn")}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-green-500 text-white font-semibold text-lg shadow-md hover:scale-105 transition-transform cursor-pointer"
            >
              Join the Movement 🚀
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 flex justify-center md:justify-end relative">
          <div className="relative">
            {/* Background Gradient Circle */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-300 via-green-200 to-pink-200 rounded-full blur-3xl opacity-40 animate-pulse"></div>

            {/* Main Image */}
            <img
              src={hero}
              alt="Civic Sense Awareness"
              className="relative w-[90%] md:w-[500px] lg:w-[600px] h-auto object-contain rounded-2xl shadow-xl transform hover:scale-105 hover:rotate-2 transition-all duration-500 animate-bounce-slow"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
