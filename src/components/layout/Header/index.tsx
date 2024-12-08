import {useCallback} from 'react';
import styled from '@emotion/styled';
import {Settings} from 'lucide-react';
import SearchBar from './SearchBar';
import Notification from './Notification';
import {HeaderProps} from './types';

export default function Header({onSearch, notificationCount}: HeaderProps) {
  const handleSettingsClick = useCallback(() => {
    // 설정 메뉴 처리
  }, []);

  const handleNotificationClick = useCallback(() => {
    // 알림 목록 처리
  }, []);

  return (
    <Container>
      <Wrapper>
        <LeftSection>
          <Logo>
            {/*<Heart className="w-5 h-5 text-pink-500" />*/}
            <LogoText>뷰티톡</LogoText>
          </Logo>
          <SearchBar onSearch={onSearch}/>
        </LeftSection>
        <RightSection>
          <Notification
            count={notificationCount}
            onClick={handleNotificationClick}
          />
          <IconButton onClick={handleSettingsClick}>
            <Settings className="w-6 h-6 text-gray-600"/>
          </IconButton>
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
  max-width: 1280px;
  height: 100%;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`;

const LogoText = styled.h1`
  font-size: 1.25rem;
  font-weight: 700;
  color: #111827;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const IconButton = styled.button`
  padding: 0.5rem;
  border-radius: 0.375rem;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f3f4f6;
  }
`;
