import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Search, Filter, X, Calendar, Clock, Tag } from 'react-feather';
import { Link } from 'react-router-dom';
import { useBlog } from '../hooks/useBlog';
import BlogPost from '../components/BlogPost';

const MobileBlog: React.FC = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState<any>(null);
  const {
    posts,
    loading,
    currentPage,
    totalPages,
    searchTerm,
    setSearchTerm,
    selectedTag,
    setSelectedTag,
    setCurrentPage,
  } = useBlog(1, 6);

  // Get unique tags from all posts
  const allTags = Array.from(
    new Set(posts.flatMap(post => post.tags))
  ).sort((a, b) => a.name.localeCompare(b.name));

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="flex items-center gap-4">
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="w-3 h-3 bg-pink-500 rounded-full animate-bounce"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Mobile Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700/50">
        <div className="flex items-center justify-between p-4">
          <Link to="/" className="flex items-center text-slate-300 hover:text-white transition-colors">
            <ArrowLeft size={20} className="mr-2" />
            Back
          </Link>
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className={`p-2 rounded-lg border transition-all duration-300
              ${isFilterOpen 
                ? 'bg-purple-500/20 border-purple-500/50 text-purple-400'
                : 'bg-slate-800/50 border-slate-700/50 text-slate-400 hover:text-slate-300'
              }`}
          >
            {isFilterOpen ? <X size={20} /> : <Filter size={20} />}
          </button>
        </div>

        {/* Search Bar */}
        <div className="px-4 pb-4">
          <div className="relative">
            <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg
                       bg-slate-800/50 text-slate-300
                       border border-slate-700/50
                       focus:outline-none focus:ring-2 focus:ring-purple-500/50
                       transition-all duration-300"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 
                         text-slate-400 hover:text-slate-300 transition-colors"
              >
                <X size={18} />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Filter Drawer */}
      <AnimatePresence>
        {isFilterOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-[105px] z-40 
                     bg-slate-800/95 backdrop-blur-sm 
                     border-b border-slate-700/50"
          >
            <div className="p-4 space-y-4">
              <h3 className="text-lg font-medium text-white">Filter by Tag</h3>
              <div className="flex flex-wrap gap-2 pb-2">
                {allTags.map((tag) => (
                  <button
                    key={tag.id}
                    onClick={() => setSelectedTag(selectedTag === tag.id ? null : tag.id)}
                    className={`px-3 py-1.5 rounded-lg text-sm flex items-center gap-2
                      ${selectedTag === tag.id 
                        ? 'bg-purple-500/20 text-purple-300 border border-purple-500/50' 
                        : 'bg-slate-700/50 text-slate-300 border border-slate-600/50'
                      } transition-all duration-300`}
                  >
                    <Tag size={14} />
                    {tag.name}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Blog Posts */}
      <div className="pt-[105px] px-4 pb-20">
        <div className="space-y-6">
          {posts.map((post) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="group relative overflow-hidden rounded-xl
                       bg-gradient-to-b from-slate-800/90 to-slate-800/50
                       border border-slate-700/50
                       backdrop-blur-sm"
              onClick={() => setSelectedPost(post)}
            >
              {post.imageUrl && (
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-50 z-10" />
                  <img 
                    src={post.imageUrl} 
                    alt={post.title}
                    className="w-full h-full object-cover 
                             transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
              <div className="p-4">
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.tags.map((tag) => (
                    <span
                      key={tag.id}
                      className="px-2 py-1 text-xs rounded-full
                               bg-slate-700/50 text-slate-300
                               border border-slate-600/30"
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>
                <h2 className="text-xl font-bold text-white mb-2 
                             group-hover:text-purple-400 transition-colors">
                  {post.title}
                </h2>
                <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-slate-500">
                  <span className="flex items-center gap-2">
                    <Calendar size={14} />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock size={14} />
                    {post.readTime}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="p-2 rounded-lg bg-slate-800/50 text-slate-300 
                       border border-slate-700/50
                       disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ArrowLeft size={20} />
            </button>
            <span className="text-slate-300">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="p-2 rounded-lg bg-slate-800/50 text-slate-300 
                       border border-slate-700/50
                       disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ArrowLeft size={20} className="rotate-180" />
            </button>
          </div>
        )}
      </div>

      {/* Single Post View */}
      <AnimatePresence>
        {selectedPost && (
          <BlogPost 
            post={selectedPost} 
            onClose={() => setSelectedPost(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileBlog; 