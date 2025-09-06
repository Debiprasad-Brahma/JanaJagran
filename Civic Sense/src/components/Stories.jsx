import React from "react"

const stories = [
  // India – Failures
  {
    country: "India",
    type: "failure",
    title: "Garbage Piling Near Taj Mahal",
    img: "https://images.moneycontrol.com/static-mcnews/2022/07/Collage-Maker-03-Jul-2022-02.12-PM-770x435.jpg?impolicy=website&width=1600&height=900",
    link: "https://www.indiatimes.com/news/india/climate-activist-licipriya-kangujams-photo-of-littering-near-taj-mahal-573084.html",
    desc: "Climate activist’s photo revealed plastic waste behind the Taj Mahal, prompting civic action.",
  },
  {
    country: "India",
    type: "failure",
    title: "Taj Mahal Pollution & Litter",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR7cZvobb_u4s_hh-lkN5RZ_o9kp8bxF0amQ&s",
    link:"https://timesofindia.indiatimes.com/etimes/trending/polish-tourists-viral-video-highlights-garbage-behind-the-taj-mahal-sparks-debate-online/articleshow/122347645.cms",
    desc: "Garbage-lined Yamuna banks and air pollution are tarnishing the Taj Mahal.",
  },
  {
    country: "India",
    type: "failure",
    title: "Delhi Traffic Violations",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThVvC51iHbNzy_GdL23zvicvK2s4RrSMBQPQ&s",
    link: "https://www.ndtv.com/topic/delhi-traffic-violations",
    desc: "Rampant red-light jumping and speeding contribute to thousands of accidents annually.",
  },
  {
    country: "India",
    type: "failure",
    title: "Open Defecation in Pratapgarh",
    img: "https://media.newindianexpress.com/TNIE%2Fimport%2F2017%2F4%2F25%2Foriginal%2Fmurder_generic.jpg?w=1024&auto=format%2Ccompress&fit=max",
    link:"https://indianexpress.com/article/india/rajasthan-pratapgarh-man-zafar-hussain-dies-after-fight-with-officials-taking-photos-of-women-defecating-in-open-4707972/",
    desc: "An attempt to prevent open defecation ended violently, showing lack of civic awareness.",
  },
  {
    country: "India",
    type: "failure",
    title: "Nagpur Communal Violence",
    img: "https://static.toiimg.com/thumb/msid-119202560,imgsize-980112,width-400,height-225,resizemode-72/119202560.jpg",
    link: "https://en.wikipedia.org/wiki/2025_Nagpur_violence",
    desc: "Communal riots damaged public property and community harmony.",
  },

  // India – Successes
  {
    country: "India",
    type: "success",
    title: "Kerala Floods 2018 – Citizens Unite",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Flooded-home-companypady-2018-kerala-floods.jpg/500px-Flooded-home-companypady-2018-kerala-floods.jpg   ",
    link: "https://www.ndtv.com/kerala-news/kerala-floods-2018-rescue-efforts-1894129",
    desc: "Citizens helped with rescues and clean-up during Kerala's catastrophic floods.",
  },
  {
    country: "India",
    type: "success",
    title: "Kumbh Mela 2019 – Cleanest Ever",
    img: "https://static.dw.com/image/18763583_605.jpg",
    link: "https://www.ndtv.com/photos/news/kumbh-mela-2019-over-1-lakh-toilets-installed-will-this-be-a-swachh-kumbh--96996",
    desc: "With over 1 lakh toilets and thousands of volunteers, the Mela stayed notably clean.",
  },
  {
    country: "India",
    type: "success",
    title: "COVID-19 Vaccination Queue Discipline",
    img: "https://www.globalgovernmentforum.com/wp-content/uploads/vaccination-queue-1024x684.jpg",
    link: "https://www.globalgovernmentforum.com/getting-everyone-covid19-vaccination-queue/",
    desc: "Citizens maintained long queues calmly, showing civic responsibility.",
  },

  // Global – Failures
  {
    country: "Global",
    type: "failure",
    title: "Singapore Little India Riot 2013",
    img: "https://th-i.thgim.com/public/migration_catalog/article10548140.ece/alternates/LANDSCAPE_1200/SINGAPORE_RIOTS1.jpg",
    link: "https://www.thehindu.com/news/international/indian-goes-on-trial-for-little-india-riot-in-singapore/article7149877.ece",
    desc: "A minor accident escalated into riots, resulting in property damage and social unrest.",
  },
  {
    country: "Global",
    type: "failure",
    title: "USA Capitol Hill Riot 2021",
    img: "https://ichef.bbci.co.uk/news/1024/cpsprodpb/14EE/production/_116385350_gettyimages-1230465266.jpg.webp",
    link:"https://americanoversight.org/investigation/the-january-6-attack-on-the-u-s-capitol/",
    desc: "Protesters stormed government buildings, showing a collapse in civic order.",
  },
  {
    country: "Global",
    type: "failure",
    title: "Indian Tourists Littering Abroad",
    img: "https://www.hindustantimes.com/ht-img/img/2025/03/06/550x309/Indians_in_Pattaya_1741234177927_1741234223071.png",
    link: "https://www.hindustantimes.com/trending/viral-video-shows-indian-men-littering-sleeping-drinking-on-pattaya-beach-they-don-t-deserve-passports-101741234090397.html",
    desc: "Indians behaving uncivilly at beaches and heritage sites abroad, harming the country’s image.",
  },

  // Global – Successes
  {
    country: "Global",
    type: "success",
    title: "Japan Earthquake 2011 – Calm Queues",
    img: "https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2011/3/11/1299873054106/Sendai-007.jpg?width=620&dpr=2&s=none&crop=none",
    link: "https://abcnews.go.com/Health/japan-victims-show-resilience-earthquake-tsunami-sign-sense/story?id=13135355",
    desc: "People maintained discipline while waiting for essentials despite the disaster.",
  },
  {
    country: "Global",
    type: "success",
    title: "Germany Welcomes Refugees 2015",
    img: "https://static.dw.com/image/18763583_605.jpg",
    link: "https://www.dw.com/en/germanys-refugee-crisis-a-story-of-success-and-failure/a-59086825",
    desc: "Citizens welcomed Syrian refugees with compassion, offering food and shelter.",
  },
]

const Stories = () => (
  <section className="py-26 px-6 bg-gray-50">
    <div className="max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-12 text-blue-700">
        Civic Sense Stories: Failures & Successes
      </h1>

      {["India", "Global"].map((region) => (
        <div
          key={region}
          className="mb-12"
        >
          <h2 className="text-2xl font-semibold mb-6">{region} Stories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {stories
              .filter((s) => s.country === region)
              .map((story, i) => (
                <div
                  key={i}
                  className={`rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition ${
                    story.type === "failure"
                      ? "border-t-4 border-red-500"
                      : "border-t-4 border-green-500"
                  }`}
                >
                  <img
                    src={story.img}
                    alt={story.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-5">
                    <h3 className="text-xl font-semibold mb-3">{story.title}</h3>
                    <p className="text-gray-600 mb-4">{story.desc}</p>
                    <a
                      href={story.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 font-semibold hover:underline"
                    >
                      Read Full Story →
                    </a>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  </section>
)

export default Stories
