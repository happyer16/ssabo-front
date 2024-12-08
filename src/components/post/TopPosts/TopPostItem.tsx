import styled from '@emotion/styled';
import {MessageSquare, ThumbsUp} from 'lucide-react';
import {TopPost} from './types';

interface TopPostItemProps {
  post: TopPost;
  onClick?: (post: TopPost) => void;
}

export default function TopPostItem({post, onClick}: TopPostItemProps) {
  const handleClick = () => {
    onClick?.(post);
  };

  return (
    <Container onClick={handleClick}>
      <PostHeader>
        <Rank>{post.rank}</Rank>
        <TitleText>{post.title}</TitleText>
        <MetaInfo>
          <CategoryTag>{post.category}</CategoryTag>
          <Date>{post.date}</Date>
        </MetaInfo>
      </PostHeader>
      <PostFooter>
        <InteractionInfo>
          <IconWrapper>
            <ThumbsUp size={12} color="#6b7280"/>
            <span>{post.likes.toLocaleString()}</span>
          </IconWrapper>
          <IconWrapper>
            <MessageSquare size={12} color="#6b7280"/>
            <span>{post.comments.toLocaleString()}</span>
          </IconWrapper>
        </InteractionInfo>
      </PostFooter>
    </Container>
  );
}

const Container = styled.div`
  padding: 0.5rem;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f5f3ff;
  }
`;

const PostItem = styled.div`
  padding: 0.5rem;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f5f3ff;
  }
`;

const PostHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.25rem;
`;

const Rank = styled.span`
  width: 1.5rem;
  text-align: center;
  font-weight: 700;
  color: #9ca3af;
`;

const TitleText = styled.div`
  flex: 1;
  font-size: 0.875rem;
  font-weight: 500;
  color: #111827;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const MetaInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.75rem;
  color: #6b7280;
  flex-shrink: 0;
`;

const CategoryTag = styled.span`
  background-color: #f5f3ff;
  color: #7c3aed;
  padding: 0.125rem 0.5rem;
  border-radius: 9999px;
`;

const Date = styled.span``;

const PostFooter = styled.div`
  padding-left: 2.25rem;
`;

const InteractionInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 0.75rem;
  color: #6b7280;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;
