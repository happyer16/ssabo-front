import { ThumbsUp, MessageCircle, Share2 } from 'lucide-react';
import styled from "@emotion/styled";
import { Button } from '../ui/button';

interface PostActionsProps {
  likes: number;
  comments: number;
  onLike?: () => void;
  onShare?: () => void;
}

const ActionsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 2rem 0;
`;

const ActionButton = styled(Button)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: none;
  border: none;
  color: #4B5563;
  padding: 0.5rem 1rem;

  &:hover {
    background: none;
    color: #1F2937;
  }
`;

const StyledIcon = styled.div`
 display: flex;
 align-items: center;
`;

const ButtonText = styled.span`
 font-size: 0.875rem;
`;

export const PostActions = ({
                              likes,
                              comments,
                              onLike,
                              onShare
                            }: PostActionsProps) => {
  return (
    <ActionsWrapper>
      <ActionButton onClick={onLike}>
        <StyledIcon>
          <ThumbsUp size={18} />
        </StyledIcon>
        <ButtonText>좋아요 {likes}</ButtonText>
      </ActionButton>
      <ActionButton>
        <StyledIcon>
          <MessageCircle size={18} />
        </StyledIcon>
        <ButtonText>댓글 {comments}</ButtonText>
      </ActionButton>
      <ActionButton onClick={onShare}>
        <StyledIcon>
          <Share2 size={18} />
        </StyledIcon>
        <ButtonText>공유하기</ButtonText>
      </ActionButton>
    </ActionsWrapper>
  );
};
