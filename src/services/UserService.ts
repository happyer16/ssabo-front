import {cookieConstants} from "@/src/constants/constants";
import {isBrowserSupportsThroughTalk} from "@/src/utils/web-util";
import {getKakaoInstance, loginWithKakao} from "@/src/libs/kakao";

class UserService {
  loginKakaoUser(window: any, redirectUrl?: string) {

    localStorage.setItem(cookieConstants.LOGIN_CALLBACK_READY, 'true');
    localStorage.setItem(
      cookieConstants.LOGIN_CALLBACK_ORIGINAL_URL,
      redirectUrl ? redirectUrl : window.location.href,
    );

    const isReady =
      localStorage.getItem(cookieConstants.LOGIN_CALLBACK_READY) != null &&
      localStorage.getItem(cookieConstants.LOGIN_CALLBACK_ORIGINAL_URL) != null;

    if (isReady) {
      getKakaoInstance(window);
      loginWithKakao(window, isBrowserSupportsThroughTalk(navigator.userAgent));
    }
  }
}

export const userService = new UserService();
