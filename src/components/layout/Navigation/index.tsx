// src/components/layout/Navigation/PostDetail.tsx
import styled from '@emotion/styled';
import {Category, NavigationProps} from './types';
import {useCallback} from 'react';

export default function Navigation({groups, selectedId, onSelect}: NavigationProps) {
  const handleSelect = useCallback((category: Category) => {
    onSelect?.(category);
  }, [onSelect]);

  return (
    <Container>
      <NavigationContent>
        {groups.map((group) => (
          <CategorySection key={group.title}>
            <CategoryTitle>{group.title}</CategoryTitle>
            <CategoryList>
              {group.items.map((category) => (
                <CategoryItem
                  key={category.id}
                  isSelected={category.id === selectedId}
                  onClick={() => handleSelect(category)}
                >
                  {category.label}
                </CategoryItem>
              ))}
            </CategoryList>
          </CategorySection>
        ))}
      </NavigationContent>
    </Container>
  );
}

const Container = styled.nav`
  display: none;
  width: 100%;
  background-color: white;
  border-bottom: 1px solid #e5e7eb;
  padding: 0 24px;

  @media (min-width: 768px) {
    display: block;
  }
`;

const NavigationContent = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  gap: 48px;
  padding: 16px 0;
`;

const CategorySection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const CategoryTitle = styled.span`
  font-size: 14px;
  color: #6b7280;
`;

const CategoryList = styled.div`
  display: flex;
  gap: 8px;
`;

const CategoryItem = styled.button<{ isSelected?: boolean }>`
  padding: 6px 12px;
  border-radius: 16px;
  font-size: 14px;
  background-color: ${props => props.isSelected ? '#8b5cf6' : 'transparent'};
  color: ${props => props.isSelected ? 'white' : '#374151'};
  transition: all 0.2s;

  &:hover {
    background-color: ${props => props.isSelected ? '#7c3aed' : '#f3f4f6'};
  }
`;
