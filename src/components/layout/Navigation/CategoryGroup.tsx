import styled from '@emotion/styled';
import { Category, CategoryGroup } from './types';
import CategoryItem from './CategoryItem';

interface CategoryGroupProps {
  group: CategoryGroup;
  selectedId?: string;
  onSelect: (category: Category) => void;
}

export default function CategoryGroup({
                                        group,
                                        selectedId,
                                        onSelect
                                      }: CategoryGroupProps) {
  return (
    <Container>
      <Title>{group.title}</Title>
      <List>
        {group.items.map((category) => (
          <CategoryItem
            key={category.id}
            category={category}
            isSelected={category.id === selectedId}
            onClick={onSelect}
          />
        ))}
      </List>
    </Container>
  );
}

const Container = styled.div`
  padding: 0.5rem 0;
`;

const Title = styled.div`
  padding: 0.5rem 1rem;
  font-size: 0.75rem;
  font-weight: 500;
  color: #9ca3af;
`;

const List = styled.div``;
