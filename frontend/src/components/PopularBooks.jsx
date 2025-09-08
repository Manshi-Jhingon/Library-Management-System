import React from "react";

const popularBooks = [
  { title: "Harry Potter", author: "J.K. Rowling", img: "/covers/harry-potter.jpg" },
  { title: "The Alchemist", author: "Paulo Coelho", img: "/covers/alchemist.jpg" },
  { title: "To Kill a Mockingbird", author: "Harper Lee", img: "/covers/to-kill-a-mockingbird.jpg" },
];

export const PopularBooks = () => (
  <section className="py-8">
    <h2 className="text-2xl font-bold mb-4 text-center">Popular Books</h2>
    <div className="flex flex-wrap justify-center gap-6">
      {popularBooks.map((book) => (
        <div key={book.title} className="bg-white rounded-lg p-4 shadow-md w-64">
          <img src={book.img} alt={book.title} className="h-32 w-full object-cover rounded-md mb-3" />
          <h3 className="font-semibold text-lg">{book.title}</h3>
          <p className="text-gray-600 text-sm">{book.author}</p>
        </div>
      ))}
    </div>
  </section>
);
