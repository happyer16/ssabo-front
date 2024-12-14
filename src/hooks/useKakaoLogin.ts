import {useContext, useEffect} from 'react';
import {UserContext} from "@/src/contexts/UserContext";
import {cookieConstants} from "@/src/constants/constants";


export const useKakaoLogin = (
  onSuccess: (() => boolean | void) | null,
  deps: unknown[],
) => {
  const {user} = useContext(UserContext);

  useEffect(
    () => {
      if (user == null || !user.isInitialized || user.userId == null) {
        console.log('user invalid : ' + user)
        return;
      }

      const shouldRunSuccessLogic =
        localStorage.getItem(cookieConstants.LOGIN_CALLBACK_READY) === 'true';

      if (!shouldRunSuccessLogic) {
        return;
      }

      const shouldCleanUp = onSuccess?.() ?? true;
      if (shouldCleanUp) {
        localStorage.removeItem(cookieConstants.LOGIN_CALLBACK_READY);
        localStorage.removeItem(cookieConstants.LOGIN_CALLBACK_ORIGINAL_URL);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...deps, user, onSuccess],
  );

  return {isLoggedIn: user?.isInitialized && user.userId != null};
};
