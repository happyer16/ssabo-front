import styled from "@emotion/styled";
import {PostHeader} from "@/src/components/postDetail/PostHeader";
import {PostContent} from "@/src/components/postDetail/PostContent";
import {PostActions} from "@/src/components/postDetail/PostActions";
import {CommentSection} from "@/src/components/postDetail/comment/CommentSection";
import {Separator} from "@/src/components/ui/separator";

interface PostDetailProps {
  post: {
    id: string;
    title: string;
    content: string;
    author: {
      name: string;
      image: string;
    };
    createdAt: string;
    views: number;
    likes: number;
    images?: Array<{
      url: string;
      alt: string;
    }>;
  };
  comments: Array<{
    id: string;
    author: {
      name: string;
      image: string;
    };
    content: string;
    createdAt: string;
    isAuthor?: boolean;
  }>;
  isAuthor?: boolean;
  onEdit?: () => void;
  onDelete?: () => void;
  onLike?: () => void;
  onShare?: () => void;
  onCommentSubmit: (content: string) => void;
}

const Container = styled.div`
  max-width: 72rem;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

export const PostDetail = ({
                             post,
                             comments,
                             isAuthor,
                             onEdit,
                             onDelete,
                             onLike,
                             onShare,
                             onCommentSubmit
                           }: PostDetailProps) => {
  return (
    <Container>
      <PostHeader
        title={post.title}
        author={post.author}
        createdAt={post.createdAt}
        views={post.views}
        commentsCount={comments.length}
        isAuthor={isAuthor}
        onEdit={onEdit}
        onDelete={onDelete}
      />

      <Separator />

      <PostContent
        content={post.content}
        images={post.images}
      />

      <PostActions
        likes={post.likes}
        comments={comments.length}
        onLike={onLike}
        onShare={onShare}
      />

      <CommentSection
        comments={comments}
        onCommentSubmit={onCommentSubmit}
      />
    </Container>
  );
};
