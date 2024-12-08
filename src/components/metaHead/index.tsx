import Head from 'next/head';
import {useEffect} from 'react';
import env from '@beam-australia/react-env';

export interface CommonHeadProps {
  path?: string;
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImagePath?: string;
  structuredData?: string | string[];
  children?: JSX.Element | null;
  forceHideSubfix?: boolean;
}

export default function MetaHead({
                                   path = '/',
                                   title,
                                   description,
                                   keywords,
                                   ogTitle,
                                   ogDescription,
                                   ogImagePath,
                                   structuredData = `
            {
              "@context": "http://schema.org",
              "@type": "Organization",
              "name": "BeautyKlass",
              "url": https://www.beauty-klass.com
              "logo": "https://www.beauty-klass.com/asset/logo/logo.svg"
            }
            `,
                                   children,
                                   forceHideSubfix,
                                 }: CommonHeadProps) {
  const metaTitle = title ?? '뷰티클래스'
  const metaDescription =
    description ??
    '성형 정보를 제공해주는 뷰티클래스입니다.';
  const metaKeywords =
    keywords ??
    '성형,미모,뷰티클래스';
  const baseUrl = env('WEB_URL');

  /**
   * Extra security measure to check if the script has
   * already been included in the DOM
   */
  const scriptAlreadyExists = () =>
    document.querySelector('script#kakao-pixel') !== null;

  /**
   * Append the script to the document.
   * Whenever the script has been loaded it will
   * set the isLoaded state to true.
   */
  const appendSdkScript = () => {
  };
  /**
   * Runs first time when component is mounted
   * and adds the script to the document.
   */
  useEffect(() => {
    if (!scriptAlreadyExists()) {
      appendSdkScript();
    }
  }, []);

  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription}/>
        {keywords != null && keywords.length > 0 && (
          <meta name="keywords" content={metaKeywords}/>
        )}
        <link rel="icon" href="/asset/logo/logo.svg"/>

        <meta name="naver-site-verification" content="c42f78161e752e696b750eee6188bfa90e6fa6dc"/>
        <meta name="google-adsense-account" content="ca-pub-4686385222672499"/>
        {/* Open Graph */}
        <meta property="og:title" content={ogTitle ?? metaTitle}/>
        <meta
          property="og:description"
          content={ogDescription ?? metaDescription}
        />
        <meta property="og:url" content={`${baseUrl}${path}`}/>
        <meta property="og:type" content="website"/>
        <meta
          property="og:image"
          content={ogImagePath}
        />
        {structuredData &&
          (typeof structuredData === 'string' ? (
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: structuredData,
              }}
            />
          ) : (
            structuredData.map(
              (structuredDataItem, index) =>
                structuredData && (
                  <script
                    key={index}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                      __html: structuredDataItem,
                    }}
                  />
                ),
            )
          ))}
        {children}
      </Head>
    </>
  );
}
