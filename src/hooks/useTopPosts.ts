import {useEffect, useState} from 'react';
import {TOP_POSTS} from '@/src/containers/HomeContainer/constants';

export function useTopPosts() {
  const [posts, setPosts] = useState(TOP_POSTS);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 실제 API 호출
    const fetchTopPosts = async () => {
      try {
        setIsLoading(true);
        // const response = await fetch('/api/top-posts');
        // const data = await response.json();
        // setPosts(data);
        setPosts(TOP_POSTS); // 임시로 상수 데이터 사용
      } catch (error) {
        console.error('Failed to fetch top posts:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTopPosts();
  }, []);

  return {posts, isLoading};
}
