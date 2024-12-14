import {type NextPage} from 'next';
import {useRouter} from 'next/router';
import {Col, Row} from 'react-bootstrap';
import Image from "next/image";
import styles from './Login.module.scss';
import styled from 'styled-components';
import React from "react";
import theme from "@/styles/theme";
import {useKakaoLogin} from "@/src/hooks/useKakaoLogin";
import {userService} from "@/src/services/UserService";
import {delCookie} from "@/src/utils/cookie-util";
import Typography from "@/src/components/common/Typography";
import {getCloudFrontImageUrl} from "@/src/utils/aws-util";

interface LoginProps {
  redirect?: string;
}

const KakaoLoginButton = styled.div`
  width: 100%;
  height: 60px;
  background-color: #fedc3f;
  border-radius: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  font-size: 16px;
`
const LoginSpan = styled.span`
  color: ${theme.color.indigo600}
`
const LoginPage: NextPage<LoginProps> = ({redirect}: LoginProps) => {
  const router = useRouter();

  useKakaoLogin(() => {
    if (redirect) {
      router.push(decodeURIComponent(redirect)).then(r => console.log(r));
    } else {
      router.back();
    }
  }, [router]);

  const handleLogin = () => {
    try {
      userService.loginKakaoUser(window, redirect);
    } catch {
      delCookie('token');
      alert('로그인에 문제가 발생했습니다. 다시 로그인 해주세요 🥺');
    }
  };

  return (
    <>
      {/*<Header selectedTab={NavigationKey.MYPAGE}/>*/}
      <div className="content_section" style={{height: '100%'}}>
        <Row className="d-flex justify-content-center">
          <Col md={8} lg={6}>
            <div className="login-wrapper">
              <div className={styles['login-content-wrapper']}>
                <Typography
                  as="h2"
                  size={18}
                  weight={600}
                  lineHeight={1.4}
                  color={theme.color.gray700}
                >
                  지금 <LoginSpan>로그인</LoginSpan>하고
                  <br/>
                  뷰티클래스!
                </Typography>
                <div
                  className={styles['login-button-wrapper']}
                  onClick={handleLogin}
                >
                  <KakaoLoginButton
                    id="kakao-login-button"
                  >
                    <Image
                      alt="카톡"
                      style={{marginRight: '10px'}}
                      width={30}
                      height={30}
                      src={getCloudFrontImageUrl('/mypage/kakao_login.png')}
                    />
                    카카오로 시작하기
                  </KakaoLoginButton>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default LoginPage;
