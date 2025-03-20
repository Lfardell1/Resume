import{ useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, ArrowLeft, ChevronLeft, ChevronRight, 
  Calendar, Clock, Tag,
} from 'react-feather';
import { Link } from 'react-router-dom';
import { useBlog } from '../hooks/useBlog';
import BlogPost from '../components/BlogPost';
import { BlogSkeleton } from '../components/BlogSkeleton';
import { getTagStyle } from '../utils/tagColors';
import { calculateReadingTime } from '../utils/readingTime';

const Blog = () => {
  const {
    posts,
    loading,
  
    currentPage,
    totalPages,
    searchTerm,
    selectedTag,
    setCurrentPage,
    setSearchTerm,
    setSelectedTag,
  } = useBlog(1, 9);

  const [selectedPost, setSelectedPost] = useState<any>(null);


  // Get unique tags from all posts
  const allTags = Array.from(
    new Set(posts.flatMap(post => post.tags))
  ).sort((a, b) => a.name.localeCompare(b.name));

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <BlogSkeleton key={i} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Refined Header Section */}
      <div className="relative py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <Link 
              to="/"
              className="inline-flex items-center text-sm font-light tracking-wide
                       text-slate-400 hover:text-white mb-12 
                       transition-all duration-300 ease-out"
            >
              <ArrowLeft size={16} className="mr-2" />
              Back to Home
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-extralight text-white 
                         tracking-tight leading-tight mb-6">
              Latest Articles
            </h1>
            <p className="text-lg md:text-xl text-slate-400 font-light 
                       tracking-wide leading-relaxed
                       border-l-2 border-purple-500/30 pl-6">
              Exploring ideas at the intersection of technology, 
              investigation, and modern development.
            </p>
          </div>
        </div>

        {/* Subtle Divider */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r 
                     from-transparent via-slate-700/50 to-transparent" />
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Search and Filters */}
        <div className="mb-12 space-y-6">
          <div className="flex flex-col md:flex-row gap-6 md:items-center">
            <div className="relative flex-1 md:max-w-xs group">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-10 
                         bg-slate-800/30 rounded-lg text-slate-300
                         border border-slate-700/30 
                         group-hover:border-slate-600/50
                         focus:outline-none focus:ring-2 focus:ring-purple-500/20
                         font-light tracking-wide
                         transition-all duration-300 ease-out"
              />
              <Search size={18} className="absolute left-3 top-3.5 text-slate-400 
                                       group-hover:text-slate-300 transition-colors" />
            </div>
            
            <div className="flex flex-wrap gap-2">
              {allTags.map((tag) => (
                <button
                  key={tag.id}
                  onClick={() => setSelectedTag(selectedTag === tag.id ? null : tag.id)}
                  className={`px-4 py-2 rounded-lg text-sm flex items-center gap-2
                           font-light tracking-wide
                           backdrop-blur-sm
                           ${selectedTag === tag.id 
                             ? 'bg-purple-500/20 text-purple-300 border border-purple-500/50' 
                             : 'bg-slate-800/30 text-slate-300 border border-slate-700/30 hover:border-slate-600/50'
                           } transition-all duration-300 ease-out`}
                >
                  <Tag size={14} />
                  {tag.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Posts Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.98 }}
              className="group relative overflow-hidden rounded-lg
                       bg-gradient-to-b from-slate-800/80 to-slate-800/30
                       border border-slate-700/30 hover:border-slate-600/50
                       backdrop-blur-sm
                       shadow-lg hover:shadow-purple-500/10
                       transition-all duration-500 ease-out
                       cursor-pointer"
              onClick={() => setSelectedPost(post)}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100
                           bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10
                           transition-opacity duration-500 ease-out" />
              
              {post.imageUrl && (
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t 
                               from-slate-900 to-transparent opacity-50 z-10" />
                  <img 
                    src={post.imageUrl} 
                    alt={post.title}
                    className="w-full h-full object-cover 
                             transform group-hover:scale-105 
                             transition-transform duration-500 ease-out"
                  />
                </div>
              )}
              
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag.id}
                      className={`px-2 py-1 text-xs rounded-full
                               font-light tracking-wide
                               bg-gradient-to-r ${getTagStyle(tag.name)}
                               border transition-all duration-300`}
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>
                
                <h2 className="text-xl font-normal text-white mb-3 
                             tracking-wide leading-relaxed
                             group-hover:text-purple-400 
                             transition-colors duration-300">
                  {post.title}
                </h2>
                
                <p className="text-slate-400 mb-4 line-clamp-2
                           font-light tracking-wide">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between 
                             text-sm text-slate-500 font-light">
                  <span className="flex items-center gap-2">
                    <Calendar size={14} />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock size={14} />
                    {calculateReadingTime(post.content)}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-4 mt-12">
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-2 rounded-lg bg-slate-800/50 text-slate-300 
                       border border-slate-700/50
                       disabled:opacity-50 disabled:cursor-not-allowed
                       hover:bg-slate-700/50 transition-all duration-300"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-8 h-8 rounded-lg text-sm transition-all duration-300
                    ${currentPage === page
                      ? 'bg-purple-500/20 text-purple-300 border border-purple-500/50'
                      : 'bg-slate-800/50 text-slate-400 border border-slate-700/50 hover:text-slate-300'
                    }`}
                >
                  {page}
                </button>
              ))}
            </div>
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-2 rounded-lg bg-slate-800/50 text-slate-300 
                       border border-slate-700/50
                       disabled:opacity-50 disabled:cursor-not-allowed
                       hover:bg-slate-700/50 transition-all duration-300"
            >
              <ChevronRight size={20} />
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

export default Blog; 