import React, { useEffect, useState } from "react";

const TopPicks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch top picks (NYT Best Sellers) on component mount
  useEffect(() => {
    const fetchTopPicks = async () => {
      try {
        // NYT API endpoint for current hardcover fiction best sellers
        const response = await fetch(
          "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=jLxGHcqdOk5X852OhXLJmq8nvEM4Fco0"
        );
        const data = await response.json();

        if (data.status === "OK") {
          setBooks(data.results.books);
          setLoading(false);
        } else {
          throw new Error("Failed to fetch top picks");
        }
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchTopPicks();
  }, []);

  if (loading) return <div className="text-center p-6">Loading Top Picks...</div>;
  if (error) return <div className="text-center p-6 text-red-500">Error: {error}</div>;

  return (
    <section className="max-w-5xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4 text-center">Top Picks - Trending Books</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {books.map((book) => (
          <div key={book.primary_isbn13} className="bg-white rounded-lg shadow-md p-4 flex flex-col">
            <img
              src={book.book_image}
              alt={book.title}
              className="w-full h-64 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-1">{book.title}</h3>
            <p className="text-gray-700 mb-2">by {book.author}</p>
            <p className="flex-grow text-gray-600 text-sm mb-4">{book.description}</p>
            <a
              href={book.amazon_product_url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Buy on Amazon
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopPicks;
