import { useEffect, useRef } from "react";


export default function Testimonials() {
  const cardsRef = useRef([]);

//   useEffect(() => {


  const testimonials = [
    {
      name: "Aarav Mehta",
      role: "Student",
      feedback:
        "This Library Management System has made accessing books so easy. Love the modern design!",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Riya Sharma",
      role: "Faculty",
      feedback:
        "Managing and tracking books is super smooth now. The interface feels premium and efficient!",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Kabir Singh",
      role: "Researcher",
      feedback:
        "I can quickly find resources I need for my research. The search and organization is fantastic!",
      image: "https://randomuser.me/api/portraits/men/65.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center px-6 py-12">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12 text-center">
        What People Say
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <div
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
            className="relative group w-72 h-96 bg-white border border-gray-200 rounded-2xl shadow-xl p-6 text-gray-800 transform transition-transform duration-500 hover:rotate-y-6 hover:-rotate-x-3"
          >
            <p className="text-lg italic mb-6">“{t.feedback}”</p>
            <div className="absolute bottom-6 left-6 flex items-center gap-3">
              <img
                src={t.image}
                alt={t.name}
                className="w-12 h-12 rounded-full border-2 border-purple-400 shadow-lg"
              />
              <div>
                <p className="font-semibold">{t.name}</p>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            </div>

            {/* Glow effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-900 group-hover:opacity-900 transition duration-500"></div>
          </div>
        ))}
      </div>
    </div>
  );
}