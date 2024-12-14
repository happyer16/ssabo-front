export function isCookieLogin() {
  return getCookie('token') != null && getCookie('token') != '';
}

/**
 * 쿠키 삭제
 * @param value
 */
export function delCookie(value: string) {
  const now = new Date();
  const time = now.getTime();
  const expireTime = time + 150000;
  now.setTime(expireTime);
  document.cookie = `${value}=;expires=${now};path=/`;
  document.cookie = `${value}=; Max-Age=-99999999; path=/`;
}

/**
 * 쿠키 조회
 * @param name
 */
export function getCookie(name: string): string | null {
  if (typeof window === 'undefined') {
    console.log('window is undefined');
    return null;
  }
  const nameLenPlus = name.length + 1;
  return (
    document.cookie
    .split(';')
    .map((c) => c.trim())
    .filter((cookie) => {
      return cookie.substring(0, nameLenPlus) === `${name}=`;
    })
    .map((cookie) => {
      return decodeURIComponent(cookie.substring(nameLenPlus));
    })[0] || null
  );
}


const SUBDOMAIN_LIST = ['alpha', 'staging'];

export const getCookieDomain = (host?: string) => {
  const hasSubdomain = SUBDOMAIN_LIST.find(
    (subdomain) => host?.includes(subdomain),
  );
  const firstSubdomain = host?.split(/\.|:/)[0] ?? '';
  return hasSubdomain
    ? SUBDOMAIN_LIST.includes(firstSubdomain)
      ? host
      : host?.split('.').slice(1).join('.')
    : undefined;
};

