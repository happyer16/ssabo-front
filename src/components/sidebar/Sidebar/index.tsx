// src/components/sidebar/Sidebar/index.tsx
import styled from '@emotion/styled';
import LoginSection from '../LoginSection';
import TrendingSection from '../TrendingSection';

const TRENDING_ITEMS = [
  {id: 1, title: '연말성형이벤트'},
  {id: 2, title: '눈성형후기'},
  {id: 3, title: '보톡스할인'},
  {id: 4, title: '리프팅최저가'},
  {id: 5, title: '병원추천'},
];

export default function Sidebar() {
  return (
    <Container>
      <LoginSection/>
      <TrendingSection items={TRENDING_ITEMS}/>
    </Container>
  );
}

const Container = styled.aside`
  width: 16rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
