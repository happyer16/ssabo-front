import styled from '@emotion/styled';
import { PostCardProps } from './types';
import PostThumbnail from './PostThumbnail';
import PostMeta from './PostMeta';

export default function PostCard({ post, onClick, className }: PostCardProps) {
  const handleClick = () => {
    onClick?.(post);
  };

  return (
    <Container className={className} onClick={handleClick}>
      <Content>
        {post.thumbnail && (
          <PostThumbnail src={post.thumbnail} alt={post.title} />
        )}
        <TextContent>
          <Header>
            <Title>{post.title}</Title>
            {post.tag && (
              <Tag type={post.tag}>{post.tag}</Tag>
            )}
          </Header>
          <Excerpt>{post.excerpt}</Excerpt>
          <PostMeta
            author={post.author}
            timestamp={post.timestamp}
            likes={post.likes}
            comments={post.comments}
          />
        </TextContent>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  padding: 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f5f3ff;
  }
`;

const Content = styled.div`
  display: flex;
  gap: 1rem;
`;

const TextContent = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Title = styled.h3`
  font-size: 1rem;
  font-weight: 700;
  color: #111827;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Tag = styled.span<{ type: 'HOT' | 'NEW' }>`
  flex-shrink: 0;
  padding: 0.125rem 0.5rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
  ${({ type }) => type === 'HOT'
  ? 'background-color: #fdf2f8; color: #db2777;'
  : 'background-color: #f5f3ff; color: #7c3aed;'
}
`;

const Excerpt = styled.p`
  font-size: 0.75rem;
  color: #6b7280;
  line-height: 1.5;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
