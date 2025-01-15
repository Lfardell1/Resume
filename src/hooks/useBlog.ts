import { useState, useEffect } from 'react';
import { blogService } from '../services/pocketbase';
import { BlogPost } from '../types/blog';

export const useBlog = (initialPage = 1, limit = 6) => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [totalPages, setTotalPages] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await blogService.getPosts(
          currentPage, 
          limit, 
          searchTerm, 
          selectedTag ?? undefined
        );
        setPosts(response.posts as BlogPost[]);
        setTotalPages(response.totalPages);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch posts');
      } finally {
        setLoading(false);
      }
    };

    // Add debounce for search
    const timeoutId = setTimeout(fetchPosts, searchTerm ? 300 : 0);
    return () => clearTimeout(timeoutId);
  }, [currentPage, searchTerm, selectedTag, limit]);

  // Reset page when search or tag changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedTag]);

  return {
    posts,
    loading,
    error,
    currentPage,
    totalPages,
    searchTerm,
    selectedTag,
    setCurrentPage,
    setSearchTerm,
    setSelectedTag,
  };
};