import {useRouter} from 'next/router';
import {useEffect} from 'react';

export const GA_TRACKING_ID = 'G-LGDDWBGXJ0';

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const gaPageview = (url: URL, title: string) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
    page_title: title,
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const gaEvent = (
  action: Gtag.EventNames,
  {event_category, event_label, value}: Gtag.EventParams,
) => {
  window.gtag('event', action, {
    event_category,
    event_label,
    value,
  });
};

// route가 변경될 때 gtag에서
export const useGtag = () => {
  const router = useRouter();

  useEffect(() => {
    if (process.env.NODE_ENV === 'development') return;

    const handleRouteChange = (url: URL) => {
      const title = document.title;
      gaPageview(url, title);
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    router.events.on('hashChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
      router.events.off('hashChangeComplete', handleRouteChange);
    };
  }, [router.events]);
};
