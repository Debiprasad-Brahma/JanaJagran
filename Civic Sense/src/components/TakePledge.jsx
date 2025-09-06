import React, {useState} from "react"

const TakePledge = () => {
  const [accepted, setAccepted] = useState(false)
  const [quizStarted, setQuizStarted] = useState(false)
  const [quizSubmitted, setQuizSubmitted] = useState(false)
  const [userAnswers, setUserAnswers] = useState({})

  const pledgeText = `
I pledge to be a responsible citizen.
I will respect public property and maintain cleanliness.
I will follow traffic rules and ensure my actions do not harm others.
I will stand in queues, avoid littering, and contribute positively to society.
I will treat foreigners and visitors with respect and help promote India’s good image.
I promise to set an example of civic sense for others to follow.
  `

  // 🔹 Tricky Civic Sense Quiz Questions
  const questions = [
    {
      id: 1,
      question: "You see someone littering on the road. What is the most civic way to respond?",
      options: [
        "Ignore it, it's not your problem.",
        "Politely remind them to use a dustbin.",
        "Shout at them in public.",
        "Record and post it on social media.",
      ],
      correct: "Politely remind them to use a dustbin.",
    },
    {
      id: 2,
      question: "While driving, there’s no traffic police nearby. Should you follow traffic rules?",
      options: [
        "Yes, because rules ensure safety for everyone.",
        "No, since no one is watching.",
        "Only if you might get fined.",
        "Follow rules only during rush hours.",
      ],
      correct: "Yes, because rules ensure safety for everyone.",
    },
    {
      id: 3,
      question: "In a foreign country, if you don’t understand their culture, what should you do?",
      options: [
        "Ignore and behave as you do at home.",
        "Observe, learn, and follow respectfully.",
        "Criticize their customs.",
        "Avoid interacting with locals.",
      ],
      correct: "Observe, learn, and follow respectfully.",
    },
    {
      id: 4,
      question: "If a queue is very long, what is the right thing to do?",
      options: [
        "Try to skip ahead if no one notices.",
        "Wait patiently for your turn.",
        "Ask a friend to hold a spot for you.",
        "Argue with people to move faster.",
      ],
      correct: "Wait patiently for your turn.",
    },
    {
      id: 5,
      question: "You are in a movie theatre. Your phone rings loudly. What should you do?",
      options: [
        "Answer immediately.",
        "Switch it to silent and step out if urgent.",
        "Ignore the call.",
        "Talk in low voice while sitting.",
      ],
      correct: "Switch it to silent and step out if urgent.",
    },
    {
      id: 6,
      question:
        "A foreign tourist asks you for directions but you are in a hurry. What should you do?",
      options: [
        "Ignore and move on.",
        "Quickly guide them politely or suggest Google Maps.",
        "Say you don’t know without listening.",
        "Tell them to ask someone else rudely.",
      ],
      correct: "Quickly guide them politely or suggest Google Maps.",
    },
    {
      id: 7,
      question:
        "On a train, someone elderly is standing but your seat is reserved. What is the right action?",
      options: [
        "Offer your seat if possible.",
        "Ignore, since it’s your reserved seat.",
        "Ask them to find another coach.",
        "Pretend to be asleep.",
      ],
      correct: "Offer your seat if possible.",
    },
    {
      id: 8,
      question:
        "You are crossing the road but there’s a pedestrian bridge nearby. What should you do?",
      options: [
        "Cross the road anywhere if traffic looks clear.",
        "Always use the pedestrian bridge or zebra crossing.",
        "Run across quickly without looking.",
        "Wait for someone else to cross and follow them.",
      ],
      correct: "Always use the pedestrian bridge or zebra crossing.",
    },
    {
      id: 9,
      question: "A friend throws garbage out of a bus window. What should you do?",
      options: [
        "Laugh and ignore.",
        "Tell them it’s wrong and ask to use a dustbin instead.",
        "Do the same thing.",
        "Say nothing because they might get angry.",
      ],
      correct: "Tell them it’s wrong and ask to use a dustbin instead.",
    },
    {
      id: 10,
      question: "While visiting another country, what is the most important civic sense rule?",
      options: [
        "Respect local culture and laws.",
        "Behave as you do in your own country.",
        "Speak loudly to get attention.",
        "Ignore their traditions.",
      ],
      correct: "Respect local culture and laws.",
    },
    {
      id: 11,
      question: "In a public bus, you are listening to music. What should you ensure?",
      options: [
        "Play it loud so everyone enjoys.",
        "Use earphones at a safe volume.",
        "Keep phone speaker on.",
        "Ask driver to play your playlist.",
      ],
      correct: "Use earphones at a safe volume.",
    },
    {
      id: 12,
      question: "A guest from abroad visits your home. How should you treat them?",
      options: [
        "Ignore them, they’ll manage.",
        "Treat them with respect and offer help.",
        "Ask them to pay for food.",
        "Avoid talking much.",
      ],
      correct: "Treat them with respect and offer help.",
    },
  ]

  // Handle quiz option selection
  const handleAnswer = (qid, option) => {
    setUserAnswers({...userAnswers, [qid]: option})
  }

  // Handle quiz submission
  const handleSubmitQuiz = () => {
    setQuizSubmitted(true)
  }

  return (
    <section className="py-26 px-6 bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-8">
        {/* Step 1: Pledge */}
        {!accepted ? (
          <>
            <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">
              Civic Sense Pledge
            </h2>
            <p className="whitespace-pre-line text-gray-700 mb-6">{pledgeText}</p>
            <div className="flex justify-center">
              <button
                onClick={() => setAccepted(true)}
                className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition"
              >
                I Accept the Pledge
              </button>
            </div>
          </>
        ) : !quizStarted ? (
          // Step 2: Start Quiz
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-green-700 mb-4">
              Thank you for taking the pledge! 🎉
            </h3>
            <p className="text-gray-700 mb-6">
              Now, let’s test your civic sense knowledge with a short quiz.
            </p>
            <button
              onClick={() => setQuizStarted(true)}
              className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
            >
              Start Quiz
            </button>
          </div>
        ) : (
          // Step 3: Quiz Section
          <>
            <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">Civic Sense Quiz</h2>

            {questions.map((q) => (
              <div
                key={q.id}
                className="mb-6"
              >
                <h3 className="font-semibold text-lg mb-2">{q.question}</h3>
                <div className="space-y-2">
                  {q.options.map((opt) => (
                    <label
                      key={opt}
                      className={`block px-4 py-2 border rounded-lg cursor-pointer ${
                        userAnswers[q.id] === opt
                          ? "bg-blue-100 border-blue-500"
                          : "hover:bg-gray-100"
                      }`}
                    >
                      <input
                        type="radio"
                        name={`q-${q.id}`}
                        value={opt}
                        checked={userAnswers[q.id] === opt}
                        onChange={() => handleAnswer(q.id, opt)}
                        className="mr-2"
                      />
                      {opt}
                    </label>
                  ))}
                </div>

                {/* Show correct answer if wrong */}
                {quizSubmitted && userAnswers[q.id] !== q.correct && (
                  <p className="text-red-600 mt-2">
                    ❌ Correct Answer: <span className="font-semibold">{q.correct}</span>
                  </p>
                )}
              </div>
            ))}

            {/* Submit button */}
            {!quizSubmitted ? (
              <div className="flex justify-center">
                <button
                  onClick={handleSubmitQuiz}
                  className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition"
                >
                  Submit Quiz
                </button>
              </div>
            ) : (
              <div className="text-center mt-6">
                <h3 className="text-xl font-bold text-green-700 mb-2">Quiz Completed!</h3>
                {questions.every((q) => userAnswers[q.id] === q.correct) ? (
                  <p className="text-gray-700">🎉 Excellent! You got all answers correct!</p>
                ) : (
                  <p className="text-gray-700">
                    Some answers were incorrect. Review the correct ones above and keep learning!
                  </p>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </section>
  )
}

export default TakePledge
