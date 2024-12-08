// pages/_app.tsx
import type {AppProps} from 'next/app';
import styled from '@emotion/styled';
import Script from "next/script";
import {Global} from '@emotion/react';
import {globalStyles} from '@/styles/globalStyles';
import Header from "@/src/components/layout/Header";
import Navigation from "@/src/components/layout/Navigation";
import {useNavigation} from "@/src/hooks/useNavigation";
import {CATEGORY_GROUPS} from "@/src/constants/categories";
import {GoogleAnalytics} from '@next/third-parties/google'

export default function App({Component, pageProps}: AppProps) {
  const {selectedId, handleSelect} = useNavigation({
    initialSelectedId: 'all'
  });


  return (
    <>

      {process.env.NODE_ENV !== 'development' &&
        <><GoogleAnalytics gaId="G-LGDDWBGXJ0"/></>
      }
      <Script
        id="kakao-login"
        strategy="afterInteractive"
        src="/asset/js/kakao.min.js"
      />
      <Global styles={globalStyles}/>
      <Wrapper>
        <Header
          onSearch={(keyword) => console.log('Search:', keyword)}
          notificationCount={3}
        />
        <Navigation
          groups={CATEGORY_GROUPS}
          selectedId={selectedId}
          onSelect={handleSelect}
        />
        <Main>
          <Component {...pageProps} />
        </Main>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f9fafb;
`;

const Main = styled.main`
  flex: 1;
  background: #ffffff;
`;
