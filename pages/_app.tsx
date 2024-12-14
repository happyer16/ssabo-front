// pages/_app.tsx
import type {AppProps} from 'next/app';
import {SSRProvider} from 'react-bootstrap';
import styled from '@emotion/styled';
import Script from "next/script";
import {Global} from '@emotion/react';
import {globalStyles} from '@/styles/globalStyles';
import Header from "@/src/components/layout/Header";
import Navigation from "@/src/components/layout/Navigation";
import {GoogleAnalytics} from '@next/third-parties/google'
import {useUser} from "@/src/hooks/useUser";
import {navigationItems} from "@/src/components/layout/Navigation/navigationData";
import {useRouter} from "next/router";

export default function App({Component, pageProps}: AppProps) {
  const userState = useUser();
  const router = useRouter();
  
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
      <SSRProvider>
        <Wrapper>
          <Header
            onSearch={(keyword) => console.log('Search:', keyword)}
            notificationCount={3}
            userInfo={userState.user}
          />
          <Navigation
            items={navigationItems}
            selectedPath={router.pathname}
          />
          <Main>
            <Component {...pageProps} />
          </Main>
        </Wrapper>
      </SSRProvider>
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
