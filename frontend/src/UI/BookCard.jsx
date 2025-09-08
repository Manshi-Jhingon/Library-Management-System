import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, User, BookOpen } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const BookCard = ({ book, index }) => {
  const cardRef = useRef(null);

  const volumeInfo = book.volumeInfo || {};
  const imageLinks = volumeInfo.imageLinks || {};

  useEffect(() => {
    const el = cardRef.current;

    gsap.fromTo(
      el,
      { opacity: 0, y: 40, scale: 0.97 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        ease: 'power2.out',
        delay: index * 0.08,
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, [index]);

  return (
    <a
      href={volumeInfo.infoLink}
      target="_blank"
      rel="noopener noreferrer"
      ref={cardRef}
      className="flex bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:-translate-y-1 w-full max-w-md cursor-pointer"
      style={{ height: '160px' }} // fixed standard height
    >
      {/* Cover Image */}
      <div className="w-28 h-full bg-gray-100 flex-shrink-0">
        <img
          src={imageLinks.thumbnail || '/placeholder-book.jpg'}
          alt={volumeInfo.title}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between flex-1 p-3 text-sm text-gray-800">
        <div>
          {/* Title */}
          <h3 className="text-sm font-semibold leading-tight line-clamp-2 text-gray-900">
            {volumeInfo.title}
          </h3>

          {/* Author, Year, Pages */}
          <div className="flex flex-wrap items-center gap-2 text-gray-600 text-xs mt-1">
            {volumeInfo.authors && (
              <span className="flex items-center">
                <User size={12} className="mr-1" />
                {volumeInfo.authors.join(', ')}
              </span>
            )}
            {volumeInfo.publishedDate && (
              <span className="flex items-center">
                <Calendar size={12} className="mr-1" />
                {new Date(volumeInfo.publishedDate).getFullYear()}
              </span>
            )}
            {volumeInfo.pageCount && (
              <span className="flex items-center">
                <BookOpen size={12} className="mr-1" />
                {volumeInfo.pageCount}p
              </span>
            )}
          </div>

          {/* Description */}
          {volumeInfo.description && (
            <p className="text-xs text-gray-600 leading-snug line-clamp-2 mt-1">
              {volumeInfo.description.replace(/<[^>]*>/g, '')}
            </p>
          )}

          {/* Categories */}
          {volumeInfo.categories && (
            <div className="flex flex-wrap gap-1 mt-2">
              {volumeInfo.categories.slice(0, 2).map((cat, i) => (
                <span
                  key={i}
                  className="px-2 py-0.5 bg-blue-50 text-blue-700 text-[10px] rounded-full border border-blue-200"
                >
                  {cat}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {volumeInfo.averageRating && (
          <div className="flex items-center text-yellow-400 text-xs mt-2">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-3.5 h-3.5 ${
                  i < Math.floor(volumeInfo.averageRating)
                    ? 'fill-current'
                    : 'text-gray-300'
                }`}
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="ml-1 text-gray-600">
              ({volumeInfo.ratingsCount || 0})
            </span>
          </div>
        )}
      </div>
    </a>
  );
};

export default BookCard;
