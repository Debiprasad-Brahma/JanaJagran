import React from "react"
import {CheckCircle, XCircle, Globe2, BookOpen} from "lucide-react"
import {useNavigate} from "react-router-dom"

const Learn = () => {
  const navigate = useNavigate()
  return (
    <section className="w-full bg-gradient-to-b from-green-50 via-white to-blue-50 py-25 px-6 md:px-20">
      <div className="max-w-7xl mx-auto space-y-14">
        {/* Title Section */}
        <div className="text-center">
          <BookOpen
            size={50}
            className="mx-auto text-blue-600 mb-4"
          />
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
            Learn Civic Sense
          </h1>
          <p className="mt-4 text-gray-600 text-lg max-w-3xl mx-auto">
            Civic sense is not just about rules, it’s about respect and responsibility. Here’s a
            simple guide on what every responsible citizen should **do**, **avoid**, and how to
            **behave with foreigners and abroad** to make society better for all.
          </p>
        </div>

        {/* Do’s, Don’ts, and Treat Foreigners Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {/* Do's */}
          <div className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-xl transition">
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle
                size={35}
                className="text-green-600"
              />
              <h2 className="text-2xl font-bold text-green-700">Do’s ✅</h2>
            </div>
            <ul className="space-y-4 text-gray-700 text-lg">
              <li>🧹 Keep your surroundings clean</li>
              <li>🚦 Follow traffic rules and signals</li>
              <li>♻️ Reduce, reuse, recycle whenever possible</li>
              <li>🤝 Respect elders, women, and differently-abled people</li>
              <li>📚 Educate others about civic responsibilities</li>
              <li>🚮 Throw garbage only in bins</li>
              <li>🚌 Give up seats for those in need in public transport</li>
              <li>⏳ Stand in queues and wait your turn</li>
              <li>🌱 Protect trees, plants, and natural resources</li>
            </ul>
          </div>

          {/* Don’ts */}
          <div className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-xl transition">
            <div className="flex items-center gap-3 mb-6">
              <XCircle
                size={35}
                className="text-red-600"
              />
              <h2 className="text-2xl font-bold text-red-700">Don’ts ❌</h2>
            </div>
            <ul className="space-y-4 text-gray-700 text-lg">
              <li>🚯 Don’t litter on roads or public places</li>
              <li>🚫 Don’t damage public property</li>
              <li>📢 Don’t create unnecessary noise pollution</li>
              <li>🚷 Don’t break traffic rules or overtake dangerously</li>
              <li>🙅 Don’t spit, urinate, or throw waste in open spaces</li>
              <li>😡 Don’t use abusive language in public</li>
              <li>🛑 Don’t discriminate against others</li>
              <li>🏍️ Don’t ride/drink and drive recklessly</li>
              <li>⚡ Don’t waste water and electricity</li>
            </ul>
          </div>

          {/* How to Treat Foreigners */}
          <div className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-xl transition">
            <div className="flex items-center gap-3 mb-6">
              <Globe2
                size={35}
                className="text-blue-600"
              />
              <h2 className="text-2xl font-bold text-blue-700">Respecting Foreigners 🌍</h2>
            </div>
            <ul className="space-y-4 text-gray-700 text-lg">
              <li>🙏 Welcome foreigners with kindness and hospitality</li>
              <li>🗣️ Communicate politely, even if language is a barrier</li>
              <li>🛕 Help them understand local culture and traditions</li>
              <li>🗺️ Offer assistance if they look lost or confused</li>
              <li>🚖 Ensure they are not overcharged or cheated</li>
              <li>🤝 Show respect for their culture and differences</li>
              <li>🇮🇳 Represent your country with dignity and pride</li>
              <li>✈️ When abroad, follow local laws and respect customs</li>
              <li>🕊️ Be an ambassador of peace and respect</li>
            </ul>
          </div>
        </div>

        {/* Importance Paragraph */}
        <div className="text-center max-w-4xl mx-auto">
          <p className="mt-10 text-gray-700 text-lg leading-relaxed">
            Treating foreigners with respect and behaving responsibly abroad is a reflection of our
            culture and values. When we welcome guests kindly, they take back positive memories of
            our nation. Similarly, when we travel to other countries, our actions shape how people
            see our homeland. Respect, tolerance, and hospitality build bridges between nations,
            foster peace, and promote unity in diversity. 🌏
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            A small step towards civic sense is a big step towards a better society 🌍
          </h2>
          <button
            onClick={() => navigate("/takepledge")}
            className="bg-gradient-to-r from-blue-600 to-green-500 text-white px-8 py-3 rounded-full shadow-md hover:scale-105 transition font-semibold cursor-pointer"
          >
            Take the Pledge 🚀
          </button>
        </div>
      </div>
    </section>
  )
}

export default Learn
