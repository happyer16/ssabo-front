export interface TopPost {
  rank: number;
  title: string;
  category: string;
  date: string;
  likes: number;
  comments: number;
}

export interface TopPostsProps {
  posts: TopPost[];
  onPostClick?: (post: TopPost) => void;
  className?: string;
}
