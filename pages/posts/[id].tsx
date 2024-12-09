import {GetServerSideProps} from "next";
import {Post} from "@/src/types/post";
import {Comment} from "@/src/types/comment";
import {PostDetailContainer} from "@/src/containers/PostDetailContainer";
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

  const post: Post = {
    id,
    title: '게시글 제목입니다.',
    content: '게시글 본문입니다. 이것은 테스트를 위한 목 데이터입니다.',
    author: {
      name: '홍길동',
      image: '/api/placeholder/40/40'
    },
    createdAt: '2024.12.10',
    views: 156,
    likes: 42,
    images: [
      {
        url: '/api/placeholder/800/400',
        alt: '테스트 이미지'
      }
    ]
  };

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
