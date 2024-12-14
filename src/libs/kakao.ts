export function getKakaoInstance(window: any): any {
  if (typeof window !== 'undefined' && window.Kakao !== undefined) {
    const Kakao = window.Kakao;

    if (!Kakao.isInitialized()) {
      Kakao.init('06d0660af1f1dd4c851ca673528bfb01');
    }

    return Kakao;
  }
}

export function loginWithKakao(
  window: any,
  isSupportsThroughTalk: boolean,
  iterationCount = 0,
) {
  if (window === null) return;
  if (!window.Kakao.isInitialized()) {
    // 카카오 인스턴스가 초기화되지 않았다면 초기화합니다.
    window.Kakao.init('06d0660af1f1dd4c851ca673528bfb01');
  }
  if ((!window.Kakao || !window.Kakao.Auth) && iterationCount < 10) {
    setTimeout(() => {
      getKakaoInstance(window);
      loginWithKakao(window, isSupportsThroughTalk, iterationCount + 1);
    }, 500);
    return;
  }

  const redirectUri = `${window.location.origin}/login/kakao`;
  try {
    window.Kakao.Auth.authorize({
      redirectUri,
      throughTalk: isSupportsThroughTalk,
    });
  } catch (e: any) {
    console.error(e);
    throw e;
  }
}
