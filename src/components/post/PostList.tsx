import styled from '@emotion/styled';
import PostCard from './PostCard';
import { Post } from './PostCard/types';

interface PostListProps {
  title: string;
  posts: Post[];
  onPostClick?: (post: Post) => void;
}

export default function PostList({ title, posts, onPostClick }: PostListProps) {
  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        <PostCount>총 {posts.length}개의 글</PostCount>
        <MoreButton>더보기</MoreButton>
      </Header>
      <List>
        {posts.map(post => (
          <PostCard
            key={post.id}
            post={post}
            onClick={onPostClick}
          />
        ))}
      </List>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 3rem;
  &:first-of-type {
    margin-top: 0;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const Title = styled.h2`
  font-size: 1.125rem;
  font-weight: 700;
  color: #111827;
`;

const PostCount = styled.span`
  font-size: 0.75rem;
  color: #6b7280;
  margin-left: 0.75rem;
`;

const MoreButton = styled.button`
  margin-left: auto;
  font-size: 0.75rem;
  color: #6b7280;
  font-weight: 500;
  &:hover {
    color: #111827;
  }
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
