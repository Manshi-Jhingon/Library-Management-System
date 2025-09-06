import React, { useState, useEffect } from "react";

export default function QuoteGenerator() {
  const [quote, setQuote] = useState({ content: "", author: "" });
  const [loading, setLoading] = useState(false);

  // Fetch a random quote from API
  const fetchQuote = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://api.quotable.io/random");
      const data = await res.json();
      setQuote({ content: data.content, author: data.author });
    } catch (err) {
      console.error("Error fetching quote:", err);
    }
    setLoading(false);
  };

  // Fetch on first render
  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-100 to-blue-100 p-4">
      <div className="max-w-xl w-full p-8 rounded-2xl shadow-xl border border-green-300 bg-white text-center transition transform hover:scale-105">
        {loading ? (
          <p className="text-gray-500">Loading...</p>
        ) : (
          <>
            <blockquote className="text-xl text-gray-800 mb-4 italic font-medium">
              "{quote.content}"
            </blockquote>
            <p className="text-md text-gray-600 mb-6 font-semibold">
              — {quote.author}
            </p>
          </>
        )}
        <button
          className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 active:scale-95 transition"
          onClick={fetchQuote}
        >
          {loading ? "Fetching..." : "New Quote"}
        </button>
      </div>
    </div>
  );
}
