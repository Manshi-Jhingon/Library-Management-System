// hooks/useBookFilter.js
import { useState, useMemo } from 'react';

export const useBookFilter = (books) => {
  const [filters, setFilters] = useState({
    categories: [],
    authors: [],
    rating: 0
  });
  
  const [sortConfig, setSortConfig] = useState({
    key: 'title',
    direction: 'asc'
  });
  
  const [pagination, setPagination] = useState({
    currentPage: 1,
    itemsPerPage: 12,
    totalPages: 1
  });

  // Filter and sort books
  const filteredBooks = useMemo(() => {
    let filtered = books.filter(book => {
      const volumeInfo = book.volumeInfo || {};
      
      // Category filter
      if (filters.categories.length > 0) {
        const bookCategories = volumeInfo.categories || [];
        if (!filters.categories.some(cat => bookCategories.includes(cat))) {
          return false;
        }
      }
      
      // Author filter
      if (filters.authors.length > 0) {
        const bookAuthors = volumeInfo.authors || [];
        if (!filters.authors.some(author => bookAuthors.includes(author))) {
          return false;
        }
      }
      
      // Rating filter
      if (filters.rating > 0) {
        if (!volumeInfo.averageRating || volumeInfo.averageRating < filters.rating) {
          return false;
        }
      }
      
      return true;
    });

    // Sorting
    if (sortConfig.key) {
      filtered.sort((a, b) => {
        const aValue = a.volumeInfo?.[sortConfig.key] || '';
        const bValue = b.volumeInfo?.[sortConfig.key] || '';
        
        let comparison = 0;
        
        if (typeof aValue === 'string' && typeof bValue === 'string') {
          comparison = aValue.localeCompare(bValue);
        } else {
          comparison = aValue > bValue ? 1 : aValue < bValue ? -1 : 0;
        }
        
        return sortConfig.direction === 'desc' ? -comparison : comparison;
      });
    }

    // Update pagination
    const totalPages = Math.ceil(filtered.length / pagination.itemsPerPage);
    setPagination(prev => ({
      ...prev,
      totalPages,
      currentPage: Math.min(prev.currentPage, totalPages || 1)
    }));

    return filtered;
  }, [books, filters, sortConfig, pagination.itemsPerPage]);

  return {
    filteredBooks,
    filters,
    setFilters,
    sortConfig,
    setSortConfig,
    pagination,
    setPagination
  };
};