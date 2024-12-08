import {useCallback, useState} from 'react';
import {Category} from '@/src/components/layout/Navigation/types';
import {useRouter} from 'next/router';

interface UseNavigationProps {
  initialSelectedId?: string;
  onCategoryChange?: (category: Category) => void;
}

export function useNavigation(
  {
    initialSelectedId,
    onCategoryChange
  }: UseNavigationProps = {}) {
  const router = useRouter();
  const [selectedId, setSelectedId] = useState(initialSelectedId);

  const handleSelect = useCallback((category: Category) => {
    setSelectedId(category.id);
    onCategoryChange?.(category);
    // URL 업데이트 예시
    router.push(`/category/${category.id}`, undefined, {shallow: true});
  }, [onCategoryChange, router]);

  return {
    selectedId,
    handleSelect
  };
}
