import {useRouter} from 'next/router';
import {useEffect} from 'react';
import styled from '@emotion/styled';
import TopPosts from '@/src/components/post/TopPosts';
import PostList from '@/src/components/post/PostList';
import {useTopPosts} from '@/src/hooks/useTopPosts';
import {usePosts} from '@/src/hooks/usePosts';
import Sidebar from '@/src/components/sidebar/Sidebar';
import MobileNavigation from "@/src/components/layout/MobileNavigation";
import {useNavigation} from '@/src/hooks/useNavigation';
import Footer from "@/src/components/layout/Footer";

export default function HomeContainer() {
  const router = useRouter();
  const {domain} = router.query;

  const {selectedId, handleSelect} = useNavigation({
    initialSelectedId: 'home',
    onCategoryChange: (category) => {
      // 카테고리 변경 시 처리
      console.log('Category changed:', category);
      // 여기서 필요한 상태 업데이트나 API 호출 등을 수행
    }
  });

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
    <PageWrapper>
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
      <Footer/>
      <MobileNavigationWrapper>
        <MobileNavigation
          selectedId={selectedId}
          onSelect={handleSelect}
        />
      </MobileNavigationWrapper>
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  position: relative; // Footer 포지셔닝을 위해
  min-height: 100%;
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  flex: 1;
  max-width: 1024px;
  margin: 0 auto;
  padding: 24px 16px;
  width: 100%;

  @media (max-width: 768px) {
    padding-bottom: 80px; // 모바일 네비게이션 높이만큼 패딩
  }
`;

const Content = styled.div`
  display: flex;
  gap: 24px;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const Main = styled.div`
  flex: 1;
  width: 100%;
`;

const PostSection = styled.div`
  margin-top: 48px;

  &:first-of-type {
    margin-top: 32px;
  }
`;

const MobileNavigationWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 50;

  // PC에서는 숨김
  @media (min-width: 768px) {
    display: none;
  }
`;
