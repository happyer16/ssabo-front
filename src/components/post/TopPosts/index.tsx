import { Sparkles } from 'lucide-react';
import styled from '@emotion/styled';
import { TopPostsProps } from './types';
import TopPostItem from './TopPostItem';

export default function TopPosts({ posts, onPostClick, className }: TopPostsProps) {
  return (
    <Container className={className}>
      <Header>
        <Sparkles className="w-5 h-5 text-purple-400" />
        <Title>실시간 인기글 TOP 5</Title>
      </Header>
      <PostList>
        {posts.map((post) => (
          <TopPostItem
            key={post.rank}
            post={post}
            onClick={onPostClick}
          />
        ))}
      </PostList>
    </Container>
  );
}

const Container = styled.div`
  margin-bottom: 3rem;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const Title = styled.h2`
  font-size: 1.125rem;
  font-weight: 700;
  color: #111827;
`;

const PostList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;
