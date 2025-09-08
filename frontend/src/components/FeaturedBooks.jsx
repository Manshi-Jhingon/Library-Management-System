import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import img1 from '../images/AtomicAssets.jpg';
import img2 from '../images/Shapiens.jpeg';
import img3 from '../images/Educated.jpeg';
import img4 from '../images/Wings.jpeg';

gsap.registerPlugin(ScrollTrigger);

const featuredBooks = [
  { title: "Atomic Habits", author: "James Clear", img: img1 },
  { title: "Educated", author: "Tara Westover", img: img3 },
  { title: "Sapiens", author: "Yuval Noah Harari", img: img2 },
  { title: "Wings Of Fire", author: "A. P. J. Abdul Kalam", img: img4 },
];

export const FeaturedBooks = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title
      gsap.from(titleRef.current, {
        opacity: 0,
        y: -50,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      });

      // Animate each card individually
      cardsRef.current.forEach((card, i) => {
        if (!card) return;

        gsap.from(card, {
          opacity: 0,
          y: 50,
          scale: 0.95,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-gray-50">
      <h2
        ref={titleRef}
        className="text-4xl font-bold mb-12 text-center text-gray-800"
      >
        Featured Books
      </h2>

      <div className="flex flex-wrap justify-center gap-8 px-4">
        {featuredBooks.map((book, index) => (
          <div
            key={book.title}
            ref={(el) => (cardsRef.current[index] = el)}
            className="bg-white rounded-xl p-5 shadow-lg w-79 h-80 flex flex-col transform transition duration-300 hover:scale-105"
          >
            <img
              src={book.img}
              alt={book.title}
              className="w-full h-full object-cover rounded-md mb-4"
            />
            {/* <h3 className="font-semibold text-lg text-gray-900 truncate">
              {book.title}
            </h3> */}
            {/* <p className="text-gray-600 text-sm">{book.author}</p> */}
          </div>
        ))}
      </div>
    </section>
  );
};
