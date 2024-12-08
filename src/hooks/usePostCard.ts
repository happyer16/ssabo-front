import { useCallback } from 'react';
import {Post} from "@/src/components/post/PostCard/types";

interface UsePostCardProps {
  onPostClick?: (post: Post) => void;
}

export function usePostCard({ onPostClick }: UsePostCardProps = {}) {
  const handlePostClick = useCallback((post: Post) => {
    onPostClick?.(post);
  }, [onPostClick]);

  return {
    handlePostClick
  };
}
