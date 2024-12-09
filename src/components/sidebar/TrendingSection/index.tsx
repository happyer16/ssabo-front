// src/components/sidebar/TrendingSection/PostDetail.tsx
import styled from '@emotion/styled';
import {Flame} from 'lucide-react';

interface TrendingItem {
  id: number;
  title: string;
}

interface TrendingSectionProps {
  items: TrendingItem[];
}

export default function TrendingSection({items}: TrendingSectionProps) {
  return (
    <Container>
      <Header>
        <Flame className="w-4 h-4" color="#EC4899"/>
        <Title>트렌딩</Title>
      </Header>
      <List>
        {items.map((item, index) => (
          <ListItem key={item.id}>
            <Rank>{index + 1}</Rank>
            <Text>{item.title}</Text>
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

const Container = styled.div`
  //background-color: #f9fafb;
  border-radius: 0.5rem;
  border: 1px;
  padding: 1rem;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
`;

const Title = styled.h2`
  font-size: 0.875rem;
  font-weight: 600;
  color: #111827;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const ListItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.375rem 0.5rem;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: white;
  }
`;

const Rank = styled.span`
  font-size: 0.875rem;
  font-weight: 600;
  color: #9ca3af;
  min-width: 1rem;
`;

const Text = styled.span`
  font-size: 0.75rem;
  color: #4b5563;
`;
