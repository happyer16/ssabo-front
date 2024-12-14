// src/hooks/useUser.ts
import {useEffect, useState} from 'react';
import {destroyCookie, parseCookies, setCookie} from 'nookies';
import {cookieConstants} from '@/src/constants/constants';
import {UserInfo} from '@/src/entity/user';
import {userApiService} from "@/src/api/user";

export const useUser = () => {
  const [user, setUser] = useState<UserInfo>({
    isInitialized: false,
  });

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      const cookies = parseCookies();
      const token = cookies[cookieConstants.USER_TOKEN];

      if (token) {
        // 토큰이 있으면 사용자 정보 가져오기
        const response = await userApiService.getUserInfo();
        const userData = response.data;

        setUser({
          isInitialized: true,
          userId: userData.id,
          userToken: token,
          name: userData.profile,
          email: userData.email,
        });
      } else {
        setUser({
          isInitialized: true,
        });
      }
    } catch (error) {
      console.error('Auth check failed:', error);
      setUser({
        isInitialized: true,
      });
    }
  };

  const loginToken = (token: string) => {
    // 토큰 저장
    setCookie(null, cookieConstants.USER_TOKEN, token, {
      maxAge: 30 * 24 * 60 * 60, // 30일
      path: '/',
    });

    setUser({
      isInitialized: true,
      userToken: token,
    });

    // 로그인 후 사용자 정보 가져오기
    checkAuthStatus();
  };

  const logoutUser = () => {
    setUser({
      isInitialized: true,
      userId: undefined,
      userToken: undefined,
    });

    destroyCookie(null, cookieConstants.USER_ID);
    destroyCookie(null, cookieConstants.USER_TOKEN);
  };

  return {user, loginToken, logoutUser};
};
