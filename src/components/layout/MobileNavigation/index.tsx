// src/components/layout/MobileNavigation/index.tsx
// src/components/layout/MobileNavigation/index.tsx
import styled from '@emotion/styled';
import {BookOpen, Home, Search, User} from 'lucide-react';
import {MobileNavigationProps} from './types';

export default function MobileNavigation({selectedId, onSelect}: MobileNavigationProps) {
  const handleClick = (id: string) => {
    // Category 타입에 맞춰서 데이터 전달
    onSelect?.({
      id,
      label: MOBILE_MENU_ITEMS.find(item => item.id === id)?.label || ''
    });
  };

  return (
    <Container>
      {MOBILE_MENU_ITEMS.map(item => (
        <NavItem
          key={item.id}
          isSelected={selectedId === item.id}
          onClick={() => handleClick(item.id)}
        >
          {getIcon(item.id)}
          <Label>{item.label}</Label>
        </NavItem>
      ))}
    </Container>
  );
}

const MOBILE_MENU_ITEMS = [
  {id: 'home', label: '홈', icon: 'Home'},
  {id: 'search', label: '검색', icon: 'Search'},
  {id: 'community', label: '커뮤니티', icon: 'BookOpen'},
  {id: 'my', label: '마이', icon: 'User'}
];

const getIcon = (id: string) => {
  switch (id) {
    case 'home':
      return <Home className="w-6 h-6"/>;
    case 'search':
      return <Search className="w-6 h-6"/>;
    case 'community':
      return <BookOpen className="w-6 h-6"/>;
    case 'my':
      return <User className="w-6 h-6"/>;
    default:
      return null;
  }
};

// ... 스타일 컴포넌트는 이전과 동일
const Container = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 56px;
  background: white;
  border-top: 1px solid #e5e7eb;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 8px;

  @media (min-width: 768px) {
    display: none;
  }
`;

const NavItem = styled.button<{ isSelected?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 4px 0;
  color: ${props => props.isSelected ? '#8b5cf6' : '#6b7280'};
  transition: color 0.2s;

  &:hover {
    color: #8b5cf6;
  }
`;

const Label = styled.span`
  font-size: 12px;
  font-weight: 500;
`;
