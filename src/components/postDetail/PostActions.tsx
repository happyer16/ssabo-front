import { ThumbsUp, MessageCircle, Share2 } from 'lucide-react';
import styled from "@emotion/styled";
import {Button} from "@chakra-ui/react";

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
  margin-bottom: 4rem;
`;

const ActionButton = styled(Button)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const PostActions = ({
                              likes,
                              comments,
                              onLike,
                              onShare
                            }: PostActionsProps) => {
  return (
    <ActionsWrapper>
      <ActionButton variant="outline" onClick={onLike}>
        <ThumbsUp size={20} />
        좋아요 {likes}
      </ActionButton>
      <ActionButton variant="outline">
        <MessageCircle size={20} />
        댓글 {comments}
      </ActionButton>
      <ActionButton variant="outline" onClick={onShare}>
        <Share2 size={20} />
        공유하기
      </ActionButton>
    </ActionsWrapper>
  );
};
