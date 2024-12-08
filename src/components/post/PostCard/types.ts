export interface PostCardProps {
  post: Post;
  onClick?: (post: Post) => void;
  className?: string;
}

export interface Post {
  id: number;
  title: string;
  category: string;
  excerpt: string;
  author: {
    id: number;
    name: string;
    image: string;
  };
  thumbnail?: string;
  likes: number;
  comments: number;
  timestamp: string;
  tag?: 'HOT' | 'NEW';
}
