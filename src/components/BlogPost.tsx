import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock } from 'react-feather';
import { ReadingProgress } from './ReadingProgress';
import { TableOfContents } from './TableOfContents';
import { ShareButtons } from './ShareButtons';
import { getTagStyle } from '../utils/tagColors';
import { calculateReadingTime } from '../utils/readingTime';

interface BlogPostProps {
  post: {
    id: string;
    title: string;
    content: string;
    date: string;
    author: string;
    tags: { id: string; name: string }[];
    imageUrl?: string;
  };
  onClose: () => void;
}

const BlogPost: React.FC<BlogPostProps> = ({ post, onClose }) => {
  // Calculate reading time when post loads
  const readingTime = calculateReadingTime(post.content);

  // Add IDs to headings for table of contents
  useEffect(() => {
    const article = document.getElementById('blog-content');
    if (article) {
      const headings = article.querySelectorAll('h2, h3');
      headings.forEach(heading => {
        heading.id = heading.textContent?.toLowerCase().replace(/[^a-z0-9]/g, '-') || '';
      });
    }
  }, [post.content]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/95 backdrop-blur-sm"
    >
      <ReadingProgress />
      
      <div className="min-h-screen px-4 py-12">
        <div className="max-w-3xl mx-auto relative">
          <button
            onClick={onClose}
            className="mb-6 flex items-center text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Posts
          </button>

          {post.imageUrl && (
            <div className="relative h-[400px] rounded-xl overflow-hidden mb-8">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-50 z-10" />
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag) => (
              <span
                key={tag.id}
                className={`px-3 py-1 rounded-full text-sm 
                         bg-gradient-to-r ${getTagStyle(tag.name)}
                         border transition-all duration-300`}
              >
                {tag.name}
              </span>
            ))}
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400 mb-8">
            <span className="flex items-center gap-2">
              <Calendar size={16} />
              {post.date}
            </span>
            <span className="flex items-center gap-2">
              <Clock size={16} />
              {readingTime}
            </span>
            <span>By {post.author}</span>
          </div>

          <TableOfContents content={post.content} />

          <article 
            id="blog-content"
            className="prose prose-invert max-w-none
                     prose-p:text-slate-300 
                     prose-headings:text-white
                     prose-a:text-blue-400 hover:prose-a:text-blue-300
                     prose-strong:text-white
                     prose-code:text-pink-300
                     prose-pre:bg-slate-800/50
                     prose-pre:border prose-pre:border-slate-700/50
                     prose-img:rounded-xl
                     prose-blockquote:border-l-purple-500
                     prose-blockquote:bg-slate-800/50
                     prose-blockquote:rounded-r-lg
                     prose-blockquote:py-2
                     prose-blockquote:px-6"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </div>

      <ShareButtons 
        url={window.location.href} 
        title={post.title} 
      />
    </motion.div>
  );
};

export default BlogPost;