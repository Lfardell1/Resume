// Define your blog types
export interface Tags {
  id: string;
  name: string;
  color?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  tags: Tags[];
  imageUrl?: string;
}

export interface BlogResponse {
  posts: BlogPost[];
  totalPosts: number;
  currentPage: number;
  totalPages: number;
} 
