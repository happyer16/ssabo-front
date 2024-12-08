import {useRouter} from 'next/router';
import {useEffect} from 'react';
import styled from '@emotion/styled';
import TopPosts from '@/src/components/post/TopPosts';
import PostList from '@/src/components/post/PostList';
import {useTopPosts} from '@/src/hooks/useTopPosts';
import {usePosts} from '@/src/hooks/usePosts';
import Sidebar from '@/src/components/sidebar/Sidebar';

export default function HomeContainer() {
  const router = useRouter();
  const {domain} = router.query;

  const {posts: topPosts, isLoading: isTopPostsLoading} = useTopPosts();
  const {posts, isLoading: isPostsLoading} = usePosts();

  useEffect(() => {
    if (domain && domain !== 'beauty') {
      router.push('/404');
    }
  }, [domain, router]);

  if (isTopPostsLoading || isPostsLoading) {
    return <div>Loading...</div>; // 또는 Skeleton 컴포넌트
  }

  return (
    <Container>
      <Content>
        <Main>
          <TopPosts posts={topPosts}/>
          {Object.entries(posts).map(([category, categoryPosts]) => (
            <PostSection key={category}>
              <PostList
                title={category}
                posts={categoryPosts}
                onPostClick={(post) => {
                  router.push(`/${domain}/posts/${post.id}`);
                }}
              />
            </PostSection>
          ))}
        </Main>
        <Sidebar/>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  padding: 24px 0;
`;

const Content = styled.div`
  display: flex;
  gap: 24px;
`;

const Main = styled.div`
  flex: 1;
`;

const PostSection = styled.div`
  margin-top: 48px;

  &:first-of-type {
    margin-top: 32px;
  }
`;
