import React from "react";
import AtomicAssets from '../../public/AtomicAssets.jpg'

const featuredBooks = [
  { title: "Atomic Habits", author: "James Clear", img: "AtomicAssets" },
  { title: "Educated", author: "Tara Westover", img: "/covers/educated.jpg" },
  { title: "Sapiens", author: "Yuval Noah Harari", img: "/covers/sapiens.jpg" },
];

export const FeaturedBooks = () => (
  <section className="py-8">
    <h2 className="text-2xl font-bold mb-4 text-center">Featured Books</h2>
    <div className="flex flex-wrap justify-center gap-6">
      {featuredBooks.map((book) => (
        <div key={book.title} className="bg-white rounded-lg p-4 shadow-md w-64">
          <img src={book.img} alt={book.title} className="h-32 w-full object-cover rounded-md mb-3" />
          <h3 className="font-semibold text-lg">{book.title}</h3>
          <p className="text-gray-600 text-sm">{book.author}</p>
        </div>
      ))}
    </div>
  </section>
);
