import React from 'react';

export const BlogSkeleton = () => {
  return (
    <div className="animate-pulse">
      <div className="h-48 bg-slate-700/50 rounded-xl mb-4" />
      <div className="flex gap-2 mb-4">
        {[1, 2].map((i) => (
          <div key={i} className="h-6 w-16 bg-slate-700/50 rounded-full" />
        ))}
      </div>
      <div className="space-y-3">
        <div className="h-7 w-3/4 bg-slate-700/50 rounded" />
        <div className="h-4 w-full bg-slate-700/50 rounded" />
        <div className="h-4 w-5/6 bg-slate-700/50 rounded" />
      </div>
      <div className="flex justify-between mt-4">
        <div className="h-4 w-24 bg-slate-700/50 rounded" />
        <div className="h-4 w-24 bg-slate-700/50 rounded" />
      </div>
    </div>
  );
}; 