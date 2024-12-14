import {CommentForm} from "@/src/components/postDetail/comment/CommentForm";
import {CommentItem} from "@/src/components/postDetail/comment/CommentItem";
import styled from "@emotion/styled";

interface CommentSectionProps {
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
  onCommentSubmit: (content: string) => void;
}

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const CommentCount = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
`;

const CommentList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const CommentSection = ({
                                 comments,
                                 onCommentSubmit,
                               }: CommentSectionProps) => {
  return (
    <Section>
      <CommentCount>댓글 {comments.length}개</CommentCount>
      <CommentForm onSubmit={onCommentSubmit} />
      <CommentList>
        {comments.map((comment) => (
          <CommentItem
            key={comment.id}
            author={comment.author}
            content={comment.content}
            createdAt={comment.createdAt}
            isAuthor={comment.isAuthor}
            onReply={() => console.log('Reply to:', comment.id)}
            onEdit={() => console.log('Edit:', comment.id)}
            onDelete={() => console.log('Delete:', comment.id)}
          />
        ))}
      </CommentList>
    </Section>
  );
};
