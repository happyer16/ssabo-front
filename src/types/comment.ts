import {Author} from "@/src/types/post";

export interface Comment {
  id: string;
  author: Author;
  content: string;
  createdAt: string;
  isAuthor?: boolean;
}
