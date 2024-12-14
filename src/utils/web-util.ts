import {type GetServerSidePropsContext} from 'next';

export function detectMobile(userAgent?: string) {
  const toMatch = [
    /android/i,
    /webos/i,
    /iphone/i,
    /ipad/i,
    /ipod/i,
    /blackberry/i,
    /windows phone/i,
  ];

  return toMatch.some((toMatchItem) => {
    return userAgent?.match(toMatchItem);
  });
}

export function isMoyoApp(navigator: Navigator) {
  return navigator.userAgent.includes('moyo-app');
}

// flutter앱 변경에 따라서 추가됨. 배포 이후에는 위의 isMoyoApp을
// 전체적으로 replace할 예정
export function isMoyoFlutterApp(navigator: Navigator) {
  return navigator.userAgent.includes('moyo-flutter-app');
}

// WARNING: This function is not safe to use in the browser.
// See here: https://developer.mozilla.org/en-US/docs/Web/HTTP/Browser_detection_using_the_user_agent
export function isMoyoAppInServer({req}: GetServerSidePropsContext) {
  const userAgent = req.headers['user-agent'];
  if (userAgent != null && userAgent.length > 0) {
    return (
      userAgent.includes('moyo-app') || userAgent.includes('moyo-flutter-app')
    );
  }
  return false;
}

export function isMoyoAppByUserAgent(userAgent?: string) {
  if (userAgent != null && userAgent.length > 0) {
    return (
      userAgent.includes('moyo-app') || userAgent.includes('moyo-flutter-app')
    );
  }
  return false;
}

export function isIosApp(navigator: Navigator) {
  return (
    navigator.userAgent.includes('moyo-app-ios') ||
    navigator.userAgent.includes('moyo-flutter-app-ios')
  );
}

export function isAndroidApp(navigator: Navigator) {
  return (
    navigator.userAgent.includes('moyo-app-android') ||
    navigator.userAgent.includes('moyo-flutter-app-android')
  );
}

export function getAppVersion() {
  if (
    typeof window === 'undefined' ||
    !window.navigator.userAgent.includes('moyo-flutter-app')
  ) {
    return;
  }
  const afterHyphenString = window.navigator.userAgent.split('/');

  return afterHyphenString[afterHyphenString.length - 1];
}

export function isInAppBrowser(navigator: Navigator) {
  return isInAppBrowserUserAgent(navigator.userAgent);
}

export function isAffiliateInAppBrowserUserAgent(userAgent: string) {
  return userAgent.match(/paybooc|finnq|ably\/[^1]/i) != null;
}

export function isInAppBrowserUserAgent(userAgent: string) {
  return (
    userAgent.match(
      /inapp|kakaotalk|naver|snapchat|line|wirtschaftswoche|thunderbird|instagram|everytimeapp|whatsapp|electron|wadiz|aliapp|zumapp|iphone(.*)whale|android(.*)whale|kakaostory|band|twitter|daumapps|daumdevice\/mobile|samsungbrowser\/[^1]/i,
    ) != null || isAffiliateInAppBrowserUserAgent(userAgent)
  );
}

export function isBrowserSupportsThroughTalk(userAgent: string) {
  return (
    !(
      userAgent.match(
        /inapp|kakaotalk|naver|snapchat|line|wirtschaftswoche|thunderbird|instagram|everytimeapp|whatsapp|electron|wadiz|aliapp|zumapp|iphone(.*)whale|android(.*)whale|kakaostory|band|twitter|daumapps|daumdevice\/mobile|fb_iab|fb4a|fban|fbios|fbss|samsungbrowser\/[^1]/i,
      ) != null
    ) || isAffiliateInAppBrowserUserAgent(userAgent)
  );
}

export const isBrowser = () => typeof window !== 'undefined';

export function isAndroid(userAgent: string) {
  return userAgent.match(/android/i);
}

export function isIOS(userAgent: string) {
  return userAgent.match(/iphone|ipad|ipod/i);
}

export function isSafari(userAgent: string) {
  const lowerUserAgent = userAgent.toLocaleLowerCase();
  if (lowerUserAgent.indexOf('chrome') > -1) return false;
  return lowerUserAgent.indexOf('safari') > -1;
}

