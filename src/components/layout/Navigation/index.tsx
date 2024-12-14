import styled from '@emotion/styled';
import {NavigationProps} from './types';
import {useRouter} from 'next/router';

export default function Navigation({items, selectedPath}: NavigationProps) {
  const router = useRouter();

  return (
    <Container>
      <NavigationContent>
        {items.map((item) => (
          <MenuItem
            key={item.title}
            isSelected={selectedPath === item.link}
            onClick={() => router.push(item.link)}
          >
            {item.title}
          </MenuItem>
        ))}
      </NavigationContent>
    </Container>
  );
}

const Container = styled.nav`
  width: 100%;
  background-color: white;
  border-bottom: 1px solid #e5e7eb;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 50;
`;

const NavigationContent = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  gap: 8px;
  padding: 0 24px;
  height: 56px;
  align-items: center;
`;

const MenuItem = styled.button<{ isSelected?: boolean }>`
  position: relative;
  padding: 8px 16px;
  height: 100%;
  border: none;
  background: none;
  font-size: 14px;
  font-weight: 500;
  color: ${props => (props.isSelected ? '#7c3aed' : '#374151')};
  cursor: pointer;
  transition: all 0.2s ease;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2px;
    background-color: #7c3aed;
    transform: scaleX(${props => (props.isSelected ? 1 : 0)});
    transition: transform 0.2s ease;
  }

  &:hover {
    color: #7c3aed;

    &:after {
      transform: scaleX(1);
    }
  }
`;
