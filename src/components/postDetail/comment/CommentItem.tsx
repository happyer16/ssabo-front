import {AvatarFallback, AvatarImage} from "@/src/components/ui/avatar";
import { Button } from '../../ui/button';
import styled from "@emotion/styled";
import { Avatar } from '../../ui/avatar';
interface CommentItemProps {
  author: {
    name: string;
    image: string;
  };
  content: string;
  createdAt: string;
  isAuthor?: boolean;
  onReply?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
}

const CommentWrapper = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1.5rem 0;
  border-bottom: 1px solid #e5e7eb;
  &:last-child {
    border-bottom: none;
  }
`;

const StyledAvatar = styled(Avatar)`
  width: 2.5rem;
  height: 2.5rem;
  flex-shrink: 0;
`;

const CommentContent = styled.div`
  flex: 1;
`;

const CommentHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.5rem;
`;

const CommentAuthor = styled.span`
  font-weight: 500;
`;

const CommentDate = styled.span`
  font-size: 0.875rem;
  color: #6b7280;
`;

const CommentText = styled.p`
  color: #374151;
  margin-bottom: 0.75rem;
  line-height: 1.5;
`;

const CommentActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const DeleteButton = styled(Button)`
  color: #ef4444;
`;

export const CommentItem = ({
                              author,
                              content,
                              createdAt,
                              isAuthor,
                              onReply,
                              onEdit,
                              onDelete
                            }: CommentItemProps) => {
  return (
    <CommentWrapper>
      <StyledAvatar>
        <AvatarImage src={author.image} />
        <AvatarFallback>{author.name[0]}</AvatarFallback>
      </StyledAvatar>
      <CommentContent>
        <CommentHeader>
          <CommentAuthor>{author.name}</CommentAuthor>
          <CommentDate>{createdAt}</CommentDate>
        </CommentHeader>
        <CommentText>{content}</CommentText>
        <CommentActions>
          <Button variant="ghost" size="sm" onClick={onReply}>답글</Button>
          {isAuthor && (
            <>
              <Button variant="ghost" size="sm" onClick={onEdit}>수정</Button>
              <DeleteButton variant="ghost" size="sm" onClick={onDelete}>삭제</DeleteButton>
            </>
          )}
        </CommentActions>
      </CommentContent>
    </CommentWrapper>
  );
};
