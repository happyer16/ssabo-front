import {useEffect, useState} from 'react';
import {POSTS} from '@/src/containers/HomeContainer/constants';

export function usePosts() {
  const [posts, setPosts] = useState(POSTS);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true);
        // const response = await fetch('/api/posts');
        // const data = await response.json();
        // setPosts(data);
        setPosts(POSTS); // 임시로 상수 데이터 사용
      } catch (error) {
        console.error('Failed to fetch posts:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return {posts, isLoading};
}
