import styled from '@emotion/styled';

export default function LoginSection() {
  return (
    <Container>
      <Text>로그인하고 나만의 시술 정보를 기록해보세요!</Text>
      <LoginButton>로그인하기</LoginButton>
    </Container>
  );
}

const Container = styled.div`
  background-color: #f9fafb;
  border-radius: 0.5rem;
  padding: 1rem;
`;

const Text = styled.p`
  font-size: 0.875rem;
  color: #4b5563;
  margin-bottom: 0.75rem;
`;

const LoginButton = styled.button`
  width: 100%;
  padding: 0.5rem;
  background-color: #8b5cf6;
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #7c3aed;
  }
`;
