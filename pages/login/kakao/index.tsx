import {type GetServerSideProps, type GetServerSidePropsContext, type NextPage,} from 'next';
import {useContext} from 'react';
import {setCookie} from 'nookies';
import {useAsyncEffect, useTimeoutWhen} from 'rooks';
import {UserContext} from "@/src/contexts/UserContext";
import {cookieConstants} from "@/src/constants/constants";
import {getCookieDomain} from "@/src/utils/cookie-util";
import authApiService from "@/src/api/auth";

interface KakaoLoginCallbackPageProps {
  userId: number | null;
  userToken: string | null;
  userKakaoId: number | null;
  isSignUp: boolean;
}

const KakaoLoginCallbackPage: NextPage<KakaoLoginCallbackPageProps> = (
  {
    userId,
    userToken,
    userKakaoId,
    isSignUp,
  }) => {
  const {loginToken} = useContext(UserContext);

  useAsyncEffect(
    async () => {
      try {
        const domain = getCookieDomain(window.location.host);
        if (userId != null) {
          const userIdString = userId.toString();
          setCookie(null, cookieConstants.USER_ID, userIdString, {
            maxAge: 60 * 60 * 24 * 90,
            domain,
            path: '/',
          });
        }

        if (userToken != null) {
          console.log('setToken')
          setCookie(null, cookieConstants.USER_TOKEN, userToken, {
            maxAge: 60 * 60 * 24 * 90,
            domain,
            path: '/',
          });
          loginToken(userToken);
        }

      } catch (_: any) {
        console.error(_)
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [userId, userToken, userKakaoId, isSignUp],
  );

  useTimeoutWhen(() => {
    // Redirect to original page.
    const originalUrl = localStorage.getItem(
      cookieConstants.LOGIN_CALLBACK_ORIGINAL_URL,
    );

    sessionStorage.setItem('isSignUp', `${isSignUp}`);

    if (originalUrl) {
      window.location.replace(originalUrl);
    } else {
      window.history.back();
    }
  }, 100);

  return <></>;
};

const getKakaoLoginRedirectUri = (context: GetServerSidePropsContext) => {
  const protocol = context.req.headers.host?.includes(':') ? 'http' : 'https';
  const url = new URL(
    context.req.url ?? '',
    `${protocol}://${context.req.headers.host}`,
  );
  return `${url.origin}${url.pathname}`;
};

export const getServerSideProps: GetServerSideProps<
  KakaoLoginCallbackPageProps
> = async (context) => {
  try {
    const uri = getKakaoLoginRedirectUri(context);
    const {code: authCode} = context.query;

    if (authCode == null) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
        props: {
          userId: null,
          userToken: null,
          userKakaoId: null,
          isSignUp: false,
        },
      };
    }

    const requestUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/ssabo/login/kakao/token`;

    const response = await fetch(requestUrl, {
      method: 'POST',
      mode: 'cors',
      headers: {
        Authorization: authCode as string,
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-Redirect-Mode': (process.env.NEXT_PUBLIC_APP_MODE ?? 'production').toUpperCase(),
        'X-SSR-Forwarded-Address':
          context.req.headers?.['x-forwarded-for']?.toString() || '',
        'X-SSR-Address':
          context.req.headers?.['x-forwarded-for']?.toString() ||
          context.req.socket.remoteAddress ||
          '',
      },
      body: JSON.stringify({
        redirectUri: uri,
      }),
    });

    const responseBody = await response.json();
    console.log(responseBody)
    const {accessToken} = responseBody.result;

    const result = await authApiService.kakaoLogin(accessToken);
    const user = result.result
    return {
      props: {
        userId: user.id || null,
        userToken: user.token || null,
        userKakaoId: user.kakaoId || null,
        isSignUp: user?.isSignUp,
      },
    };
  } catch (_: any) {
    console.error(_)
    return {
      props: {
        userId: null,
        userToken: null,
        userKakaoId: null,
        isSignUp: false,
      },
    };
  }
};

export default KakaoLoginCallbackPage;
