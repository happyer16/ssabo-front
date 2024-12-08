import styled from '@emotion/styled';
import { ChevronRight } from 'lucide-react';
import { Category } from './types';

interface CategoryItemProps {
  category: Category;
  isSelected: boolean;
  onClick: (category: Category) => void;
}

export default function CategoryItem({
                                       category,
                                       isSelected,
                                       onClick
                                     }: CategoryItemProps) {
  const handleClick = () => onClick(category);

  return (
    <Container
      onClick={handleClick}
      isSelected={isSelected}
    >
      <Label>{category.label}</Label>
      {isSelected && <ChevronRight className="w-4 h-4" />}
    </Container>
  );
}

const Container = styled.div<{ isSelected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-size: 0.875rem;
  transition: all 0.2s;
  ${({ isSelected }) => isSelected ? `
    color: #7c3aed;
    font-weight: 500;
    background-color: #f5f3ff;
  ` : `
    color: #4b5563;
    &:hover {
      background-color: #f9fafb;
    }
  `}
`;

const Label = styled.span``;
