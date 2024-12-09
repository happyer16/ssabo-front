import { Post } from '@/src/types/post';
import { Comment } from '@/src/types/comment';
import { PostDetail } from '@/src/components/postDetail/PostDetail';

interface PostDetailContainerProps {
  post: Post;
  comments: Comment[];
}

export const PostDetailContainer = ({ post, comments }: PostDetailContainerProps) => {
  const handleEdit = () => {
    // 게시글 수정 로직
  };

  const handleDelete = () => {
    // 게시글 삭제 로직
  };

  return (
    <PostDetail
      post={post}
      comments={comments}
      isAuthor={true}
      onEdit={handleEdit}
      onDelete={handleDelete}
      onLike={() => {}}
      onShare={() => {}}
      onCommentSubmit={() => {}}
    />
  );
};
