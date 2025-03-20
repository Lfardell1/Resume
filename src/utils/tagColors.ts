export const tagColorMap: Record<string, string> = {
  'React': 'from-blue-500/20 to-cyan-500/20 text-cyan-300 border-cyan-500/30',
  'TypeScript': 'from-blue-500/20 to-blue-400/20 text-blue-300 border-blue-500/30',
  'Web Development': 'from-purple-500/20 to-pink-500/20 text-purple-300 border-purple-500/30',
  'Insurance': 'from-green-500/20 to-emerald-500/20 text-emerald-300 border-emerald-500/30',
  'Investigation': 'from-orange-500/20 to-amber-500/20 text-amber-300 border-amber-500/30',
  'Technology': 'from-indigo-500/20 to-blue-500/20 text-blue-300 border-blue-500/30',
  'AI': 'from-purple-500/20 to-violet-500/20 text-violet-300 border-violet-500/30',
};

export const getTagStyle = (tagName: string) => {
  return tagColorMap[tagName] || 'from-slate-500/20 to-slate-400/20 text-slate-300 border-slate-500/30';
}; 