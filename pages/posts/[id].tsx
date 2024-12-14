import {GetServerSideProps} from "next";
import {Post} from "@/src/types/post";
import {Comment} from "@/src/types/comment";
import {PostDetailContainer} from "@/src/containers/PostDetailContainer";
import postService from "@/src/api/post";
interface PostDetailPageProps {
  post: Post;
  comments: Comment[];
}

export default function PostDetailPage({ post, comments }: PostDetailPageProps) {
  return (
    <PostDetailContainer
      post={post}
      comments={comments}
    />
  );
}
export const getServerSideProps: GetServerSideProps<PostDetailPageProps> = async (context) => {
  const { id } = context.params as { id: string };

  const response = await postService.getPostDetail(id);
  const post = response.result

  const comments: Comment[] = [
    {
      id: '1',
      author: {
        name: '댓글작성자1',
        image: '/api/placeholder/40/40'
      },
      content: '첫 번째 댓글입니다.',
      createdAt: '2024.12.10',
      isAuthor: true
    },
    {
      id: '2',
      author: {
        name: '댓글작성자2',
        image: '/api/placeholder/40/40'
      },
      content: '두 번째 댓글입니다.',
      createdAt: '2024.12.10'
    }
  ];

  return {
    props: {
      post,
      comments
    }
  };
};
