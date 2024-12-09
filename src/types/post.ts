export interface Author {
  name: string;
  image: string;
}

export interface Image {
  url: string;
  alt: string;
}

export interface Post {
  id: string;
  title: string;
  content: string;
  author: Author;
  createdAt: string;
  views: number;
  likes: number;
  images?: Image[];
}
