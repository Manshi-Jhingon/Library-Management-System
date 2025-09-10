import React from "react";

const stats = [
  { label: "Books Available", value: "15,000+" },
  { label: "Active Members", value: "3,200+" },
  { label: "Years Serving", value: "25+" },
  { label: "Awards Won", value: "10" }
];

const AboutLibrary = () => (
  <section className="bg-white h-screen overflow-y-hidden flex items-center justify-center">
    <div className="max-w-5xl w-auto mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-h-l">
      {/* Image */}
      <div>
        <img
          src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80"
          alt="Modern Library Interior"
          className="rounded-xl shadow-lg w-full h-96 object-cover"
        />
      </div>
      {/* Content */}
      <div>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-800">
          About Our Library
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Welcome to our Library—a hub for knowledge, learning, and innovation. For over two decades, we have served as the intellectual heart of the community, connecting readers and researchers with resources that inspire and empower.
        </p>
        <p className="text-gray-600 mb-4">
          Our mission is to make reading enjoyable and accessible, encourage curiosity, and foster lifelong learning. With thousands of books, journals, and digital materials, we support academic pursuits and personal growth for all ages.
        </p>
        <div className="grid grid-cols-2 gap-4 mb-6">
          {stats.map((s) => (
            <div
              className="bg-gray-100 rounded-lg p-4 text-center shadow flex flex-col"
              key={s.label}
            >
              <span className="text-xl md:text-2xl font-bold text-cyan-700">{s.value}</span>
              <span className="text-gray-600 text-xs mt-1">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AboutLibrary;
