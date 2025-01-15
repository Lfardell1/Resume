import React, { useEffect, useState } from 'react';

export const TableOfContents = ({ content }: { content: string }) => {
  const [headings, setHeadings] = useState<Array<{ id: string, text: string }>>([]);

  useEffect(() => {
    const doc = new DOMParser().parseFromString(content, 'text/html');
    const elements = Array.from(doc.querySelectorAll('h2, h3'));
    
    setHeadings(elements.map(el => ({
      id: el.textContent?.toLowerCase().replace(/[^a-z0-9]/g, '-') || '',
      text: el.textContent || ''
    })));
  }, [content]);

  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 hidden xl:block w-64">
      <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm">
        <h4 className="text-white font-medium mb-4">Table of Contents</h4>
        <nav className="space-y-2">
          {headings.map((heading) => (
            <a
              key={heading.id}
              href={`#${heading.id}`}
              className="block text-sm text-slate-400 hover:text-white transition-colors"
            >
              {heading.text}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}; 