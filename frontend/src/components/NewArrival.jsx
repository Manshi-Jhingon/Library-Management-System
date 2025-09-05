import React from "react";

const newArrivals = [
  { title: "The Midnight Library", author: "Matt Haig", img: "/covers/midnight-library.jpg" },
  { title: "The Silent Patient", author: "Alex Michaelides", img: "/covers/silent-patient.jpg" },
  { title: "Project Hail Mary", author: "Andy Weir", img: "/covers/project-hail-mary.jpg" },
];

export const NewArrivals = () => (
  <section className="py-8 bg-gray-50">
    <h2 className="text-2xl font-bold mb-4 text-center">New Arrivals</h2>
    <div className="flex flex-wrap justify-center gap-6">
      {newArrivals.map((book) => (
        <div key={book.title} className="bg-white rounded-lg p-4 shadow-md w-64">
          <img src={book.img} alt={book.title} className="h-32 w-full object-cover rounded-md mb-3" />
          <h3 className="font-semibold text-lg">{book.title}</h3>
          <p className="text-gray-600 text-sm">{book.author}</p>
        </div>
      ))}
    </div>
  </section>
);
