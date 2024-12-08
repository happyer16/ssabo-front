import styled from '@emotion/styled';
import { ThumbsUp, MessageSquare } from 'lucide-react';

interface PostMetaProps {
  author: {
    name: string;
    image: string;
  };
  timestamp: string;
  likes: number;
  comments: number;
}

export default function PostMeta({ author, timestamp, likes, comments }: PostMetaProps) {
  return (
    <MetaContainer>
      <AuthorInfo>
        <AuthorImage src={author.image} alt={author.name} />
        <AuthorName>{author.name}</AuthorName>
        <Dot>•</Dot>
        <TimeStamp>{timestamp}</TimeStamp>
      </AuthorInfo>
      <Interactions>
        <InteractionItem>
          <ThumbsUp className="w-3.5 h-3.5" />
          <span>{likes.toLocaleString()}</span>
        </InteractionItem>
        <InteractionItem>
          <MessageSquare className="w-3.5 h-3.5" />
          <span>{comments.toLocaleString()}</span>
        </InteractionItem>
      </Interactions>
    </MetaContainer>
  );
}

const MetaContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.75rem;
  color: #6b7280;
`;

const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const AuthorImage = styled.img`
  width: 1rem;
  height: 1rem;
  border-radius: 9999px;
`;

const AuthorName = styled.span`
  font-weight: 500;
  color: #111827;
`;

const Dot = styled.span`
  color: #d1d5db;
`;

const TimeStamp = styled.span``;

const Interactions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const InteractionItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;
