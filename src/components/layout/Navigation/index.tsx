import styled from '@emotion/styled';
import {Category, NavigationProps} from './types';
import CategoryGroup from './CategoryGroup';
import {useCallback} from 'react';

export default function Navigation(
  {
    groups,
    selectedId,
    onSelect
  }: NavigationProps) {
  const handleSelect = useCallback((category: Category) => {
    onSelect?.(category);
  }, [onSelect]);

  return (
    <Container>
      {groups.map((group) => (
        <CategoryGroup
          key={group.title}
          group={group}
          selectedId={selectedId}
          onSelect={handleSelect}
        />
      ))}
    </Container>
  );
}

const Container = styled.nav`
  width: 11rem;
  min-height: calc(100vh - 64px);
  background-color: white;
  border-right: 1px solid #e5e7eb;
`;
