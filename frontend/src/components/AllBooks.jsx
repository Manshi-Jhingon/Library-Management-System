// components/AllBooks.jsx
import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Filter, 
  ChevronDown, 
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  X
} from 'lucide-react';
import BookCard from '../UI/BookCard.jsx';
import { useBookFilter } from '../hooks/useBookFilter';

const AllBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('Steve Jobs');
  const [showFilters, setShowFilters] = useState(false);
  
  const {
    filteredBooks,
    filters,
    setFilters,
    sortConfig,
    setSortConfig,
    pagination,
    setPagination
  } = useBookFilter(books);

  // Fetch books from Google Books API
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&maxResults=40`
        );
        const data = await response.json();
        setBooks(data.items || []);
      } catch (error) {
        console.error('Error fetching books:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, [searchQuery]);

  // Filter options
  const filterOptions = {
    categories: [...new Set(books.flatMap(book => book.volumeInfo?.categories || []))],
    authors: [...new Set(books.flatMap(book => book.volumeInfo?.authors || []))],
  };

  // Handle filter changes
  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: prev[filterType].includes(value)
        ? prev[filterType].filter(item => item !== value)
        : [...prev[filterType], value]
    }));
    setPagination(prev => ({ ...prev, currentPage: 1 }));
  };

  // Handle sort changes
  const handleSortChange = (key) => {
    setSortConfig(prev => ({
      key,
      direction: prev.key === key && prev.direction === 'asc' ? 'desc' : 'asc'
    }));
  };

  // Clear all filters
  const clearFilters = () => {
    setFilters({
      categories: [],
      authors: [],
      rating: 0
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header and Search */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-center mb-6">Book Discovery</h1>
        
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6">
          <div className="relative flex-grow max-w-2xl">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search for books..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-4 py-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            <Filter size={20} />
            Filters
            {(filters.categories.length > 0 || filters.authors.length > 0 || filters.rating > 0) && (
              <span className="bg-blue-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                {filters.categories.length + filters.authors.length + (filters.rating > 0 ? 1 : 0)}
              </span>
            )}
          </button>
        </div>

        {/* Filters Panel */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-white border border-gray-200 rounded-lg p-4 mb-6"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">Filters</h3>
                <div className="flex gap-2">
                  <button
                    onClick={clearFilters}
                    className="text-sm text-blue-600 hover:text-blue-800"
                  >
                    Clear All
                  </button>
                  <button
                    onClick={() => setShowFilters(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Categories Filter */}
                <div>
                  <h4 className="font-medium mb-2">Categories</h4>
                  <div className="space-y-1 max-h-40 overflow-y-auto">
                    {filterOptions.categories.slice(0, 10).map((category, index) => (
                      <label key={index} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={filters.categories.includes(category)}
                          onChange={() => handleFilterChange('categories', category)}
                          className="rounded text-blue-600 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-sm">{category}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Authors Filter */}
                <div>
                  <h4 className="font-medium mb-2">Authors</h4>
                  <div className="space-y-1 max-h-40 overflow-y-auto">
                    {filterOptions.authors.slice(0, 10).map((author, index) => (
                      <label key={index} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={filters.authors.includes(author)}
                          onChange={() => handleFilterChange('authors', author)}
                          className="rounded text-blue-600 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-sm">{author}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Rating Filter */}
                <div>
                  <h4 className="font-medium mb-2">Minimum Rating</h4>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((rating) => (
                      <button
                        key={rating}
                        onClick={() => setFilters(prev => ({
                          ...prev,
                          rating: prev.rating === rating ? 0 : rating
                        }))}
                        className={`p-2 rounded ${
                          filters.rating >= rating
                            ? 'bg-yellow-100 text-yellow-600'
                            : 'bg-gray-100 text-gray-600'
                        }`}
                      >
                        {rating}★
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Sort and Results Info */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <p className="text-gray-600">
          Showing {filteredBooks.length} books
          {searchQuery && ` for "${searchQuery}"`}
        </p>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-gray-600">Sort by:</span>
            <select
              value={sortConfig.key}
              onChange={(e) => handleSortChange(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="title">Title</option>
              <option value="publishedDate">Publication Date</option>
              <option value="averageRating">Rating</option>
              <option value="pageCount">Page Count</option>
            </select>
            <button
              onClick={() => handleSortChange(sortConfig.key)}
              className="p-2 hover:bg-gray-100 rounded"
            >
              {sortConfig.direction === 'asc' ? <ChevronUp /> : <ChevronDown />}
            </button>
          </div>
        </div>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        </div>
      )}

      {/* Books Grid */}
      {!loading && (
        <>
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8"
          >
            <AnimatePresence>
              {filteredBooks
                .slice(
                  (pagination.currentPage - 1) * pagination.itemsPerPage,
                  pagination.currentPage * pagination.itemsPerPage
                )
                .map((book, index) => (
                  <BookCard key={book.id} book={book} index={index} />
                ))}
            </AnimatePresence>
          </motion.div>

          {/* No Results */}
          {filteredBooks.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No books found matching your criteria.</p>
              <button
                onClick={clearFilters}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Clear Filters
              </button>
            </div>
          )}

          {/* Pagination */}
          {filteredBooks.length > 0 && (
            <div className="flex justify-center items-center gap-4">
              <button
                onClick={() => setPagination(prev => ({
                  ...prev,
                  currentPage: Math.max(prev.currentPage - 1, 1)
                }))}
                disabled={pagination.currentPage === 1}
                className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft size={20} />
              </button>
              
              {Array.from({ length: Math.min(5, pagination.totalPages) }, (_, i) => {
                const pageNum = i + 1;
                return (
                  <button
                    key={pageNum}
                    onClick={() => setPagination(prev => ({ ...prev, currentPage: pageNum }))}
                    className={`w-10 h-10 rounded-lg ${
                      pagination.currentPage === pageNum
                        ? 'bg-blue-600 text-white'
                        : 'border border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}
              
              <button
                onClick={() => setPagination(prev => ({
                  ...prev,
                  currentPage: Math.min(prev.currentPage + 1, prev.totalPages)
                }))}
                disabled={pagination.currentPage === pagination.totalPages}
                className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default AllBooks;