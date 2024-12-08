// src/components/layout/Header/index.tsx
import styled from '@emotion/styled';
import {Bell, Menu, Search, Settings} from 'lucide-react';

interface HeaderProps {
  onSearch: (keyword: string) => void;
  notificationCount?: number;
  isLoggedIn?: boolean;
  onLoginClick?: () => void;
  onMenuClick?: () => void;
}

export default function Header({
                                 onSearch,
                                 notificationCount,
                                 isLoggedIn = false,
                                 onLoginClick,
                                 onMenuClick
                               }: HeaderProps) {
  return (
    <Container>
      <Wrapper>
        <LeftSection>
          <MenuButton onClick={onMenuClick} aria-label="메뉴">
            <Menu className="w-6 h-6 text-gray-600"/>
          </MenuButton>
          <Logo>
            <LogoText>뷰티클래스</LogoText>
          </Logo>
          <SearchWrapper>
            <SearchIcon>
              <Search className="w-5 h-5 text-gray-400"/>
            </SearchIcon>
            <SearchInput
              type="text"
              placeholder="시술 정보, 후기를 검색해보세요"
            />
          </SearchWrapper>
        </LeftSection>
        <RightSection>
          {isLoggedIn ? (
            <>
              <IconButton aria-label="알림">
                <Bell className="w-6 h-6 text-gray-600"/>
                {notificationCount && notificationCount > 0 && (
                  <NotificationBadge>{notificationCount > 99 ? '99+' : notificationCount}</NotificationBadge>
                )}
              </IconButton>
              <IconButton aria-label="설정">
                <Settings className="w-6 h-6 text-gray-600"/>
              </IconButton>
            </>
          ) : (
            <LoginButton onClick={onLoginClick}>로그인</LoginButton>
          )}
        </RightSection>
      </Wrapper>
    </Container>
  );
}

const Container = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  width: 100%;
  height: 64px;
  background-color: white;
  border-bottom: 1px solid #e5e7eb;
`;

const Wrapper = styled.div`
  max-width: 1024px;
  height: 100%;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 768px) {
    padding: 0 1.5rem;
  }
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (min-width: 768px) {
    gap: 2rem;
  }
`;

const MenuButton = styled.button`
  display: flex;
  padding: 0.5rem;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: background-color 0.2s;

  @media (min-width: 768px) {
    display: none;
  }

  &:hover {
    background-color: #f3f4f6;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  min-width: max-content;
`;

const LogoText = styled.h1`
  font-size: 1.25rem;
  font-weight: 700;
  color: #111827;
`;

const SearchWrapper = styled.div`
  position: relative;
  display: none;
  width: 100%;
  max-width: 24rem;

  @media (min-width: 768px) {
    display: block;
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0.5rem 1rem 0.5rem 2.5rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  background-color: #f9fafb;
  font-size: 0.875rem;
  transition: all 0.2s;

  &:focus {
    outline: none;
    border-color: #8b5cf6;
    box-shadow: 0 0 0 2px rgba(139, 92, 246, 0.1);
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (min-width: 768px) {
    gap: 1rem;
  }
`;

const IconButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 0.375rem;
  transition: background-color 0.2s;
  color: #6B7280;

  svg {
    stroke-width: 1.5px;
  }

  &:hover {
    background-color: #f3f4f6;
  }
`;
const NotificationBadge = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  min-width: 1.25rem;
  height: 1.25rem;
  padding: 0 0.375rem;
  background-color: #e11d48;
  color: white;
  font-size: 0.75rem;
  font-weight: 500;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #8b5cf6;
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  transition: background-color 0.2s;

  &:hover {
    background-color: #7c3aed;
  }
`;
