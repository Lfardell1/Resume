import { useState } from 'react';
import { Twitter, Facebook, Link, Check } from 'react-feather';
import { motion, AnimatePresence } from 'framer-motion';

export const ShareButtons = ({ url, title }: { url: string; title: string }) => {
  const [copied, setCopied] = useState(false);

  const copyLink = async () => {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed bottom-6 right-6 flex items-center gap-3">
      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="px-3 py-2 rounded-lg bg-green-500/20 text-green-300 
                     border border-green-500/30 text-sm"
          >
            Copied to clipboard!
          </motion.div>
        )}
      </AnimatePresence>
      
      <div className="flex items-center gap-2">
        <button
          onClick={() => window.open(`https://twitter.com/intent/tweet?url=${url}&text=${title}`)}
          className="p-2 rounded-full bg-slate-800/50 text-slate-300 
                   hover:text-blue-400 hover:bg-slate-700/50
                   border border-slate-700/50
                   transition-all duration-300"
        >
          <Twitter size={20} />
        </button>
        <button
          onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`)}
          className="p-2 rounded-full bg-slate-800/50 text-slate-300 
                   hover:text-blue-600 hover:bg-slate-700/50
                   border border-slate-700/50
                   transition-all duration-300"
        >
          <Facebook size={20} />
        </button>
        <button
          onClick={copyLink}
          className="p-2 rounded-full bg-slate-800/50 text-slate-300 
                   hover:text-purple-400 hover:bg-slate-700/50
                   border border-slate-700/50
                   transition-all duration-300"
        >
          {copied ? <Check size={20} /> : <Link size={20} />}
        </button>
      </div>
    </div>
  );
}; 