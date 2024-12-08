// pages/_app.tsx
import type {AppProps} from 'next/app';
import styled from '@emotion/styled';

import {Global} from '@emotion/react';
import {globalStyles} from '@/styles/globalStyles';
import Header from "@/src/components/layout/Header";
import Navigation from "@/src/components/layout/Navigation";
import {useNavigation} from "@/src/hooks/useNavigation";
import {CATEGORY_GROUPS} from "@/src/constants/categories";

export default function App({Component, pageProps}: AppProps) {
  const {selectedId, handleSelect} = useNavigation({
    initialSelectedId: 'all'
  });

  return (
    <>
      <Global styles={globalStyles}/>
      <Wrapper>
        <Header
          onSearch={(keyword) => console.log('Search:', keyword)}
          notificationCount={3}
        />
        <ContentWrapper>
          <Layout>
            <Navigation
              groups={CATEGORY_GROUPS}
              selectedId={selectedId}
              onSelect={handleSelect}
            />
            <Main>
              <Component {...pageProps} />
            </Main>
          </Layout>
        </ContentWrapper>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  min-height: 100vh;
  background-color: #f9fafb;
`;

const ContentWrapper = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 24px;
`;

const Layout = styled.div`
  display: flex;
  gap: 24px;
  min-height: calc(100vh - 64px);
`;

const Main = styled.main`
  flex: 1;
  background: #ffffff;
`;
