import styled from "@emotion/styled";

const FooterWrapper = styled.footer`
  background-color: #f9fafb; // 상단과 동일한 밝은 배경색
  color: #6b7280; // 기본 텍스트 색상
  padding: 50px 20px 100px;
  font-size: 14px;
  width: 100%;
  box-sizing: border-box;
  border-top: 1px solid #e5e7eb; // 구분선 추가

  @media (min-width: 768px) {
    padding: 50px 100px 100px;
  }
`;

const FooterTitle = styled.h3`
  color: #111827; // 진한 회색으로 변경
  font-size: 14px;
  font-weight: 500;
  padding-bottom: 15px;
`;

const FooterListItem = styled.li`
  margin-bottom: 10px;
  list-style: none;
  font-size: 13px; // 15px에서 13px로 축소
  line-height: 25px;
  color: #6b7280; // 더 연한 회색으로 변경

  a {
    color: inherit; // 부모의 색상 상속
    text-decoration: none; // 밑줄 제거
  }

  a:hover {
    text-decoration: none; // hover 시에도 밑줄 없음
    cursor: pointer;
    color: inherit; // hover 시에도 색상 변경 없음
  }
`;
const CompanyInfo = styled.div`
  margin-top: 40px;
  color: #6b7280; // 기본 회색
  font-size: 13px;
  font-style: normal;
  line-height: 20px;
  white-space: pre-wrap;

  strong {
    font-size: 15px;
    color: #111827; // 진한 회색
  }
`;

const FooterContent = styled.div`
  max-width: 1064px;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const FooterColumn = styled.div`
  width: 100%;
  margin-bottom: 30px;

  @media (min-width: 768px) {
    width: 200px;
    margin-bottom: 0;

    :last-child {
      flex: 1;
    }
  }
`;


const FooterList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const SocialIcons = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 10px;
`;

const SocialIcon = styled.a`
  width: 30px;
  height: 30px;
  background-color: #3e4149;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-decoration: none;
`;

const Terms = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  margin: 0;
  padding: 24px 0 30px;
  list-style: none;
  font-size: 12px; // 더 작은 폰트 사이즈
  color: #6b7280; // 더 연한 회색으로 변경

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, auto);
    column-gap: 34px;
  }
`;

const TermsItem = styled.li`
  a {
    color: inherit; // 부모 요소의 색상 상속
    text-decoration: none; // 링크 밑줄 제거
  }

  a:hover {
    text-decoration: none; // hover 시에도 밑줄 없음
    cursor: pointer;
  }
`;

// React 컴포넌트
const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <FooterColumn>
          <FooterTitle>서비스</FooterTitle>
          <FooterList>
            <FooterListItem><a href={"https://www.naver.com"}>공지사항</a></FooterListItem>
            <FooterListItem>자주 묻는 질문</FooterListItem>
            <FooterListItem>고객센터</FooterListItem>
          </FooterList>
        </FooterColumn>

        <FooterColumn>
          <FooterTitle>문의</FooterTitle>
          <FooterList>
            <FooterListItem>사업 제휴</FooterListItem>
            <FooterListItem>광고 문의</FooterListItem>
          </FooterList>
        </FooterColumn>

        <FooterColumn>
          <FooterTitle>고객센터</FooterTitle>
          <FooterList>
            <FooterListItem>이메일: help.beauty.class@gmail.com</FooterListItem>
          </FooterList>
        </FooterColumn>
      </FooterContent>

      <CompanyInfo>
        <strong>(주)뷰티클래스</strong>
        <br/>
        <br/>
        {/*<p>사업자 등록번호 : 343-66-00581 | 통신판매업 신고번호 : 2024-서울용산-1144 | 대표 : 하슬기예</p>*/}
        {/*<p>서울시 용산구 한강대로 109, 11층 1105호 | 고객센터: 010-9905-2343</p>*/}
        <p>서울시 강남구 도곡로27길 30 202호</p>
      </CompanyInfo>

      <Terms>
        <TermsItem>
          <a href={"https://www.beauty-klass.com/terms/use"}>서비스 이용약관</a>
        </TermsItem>
        <TermsItem><a href={"https://www.beauty-klass.com/terms/privacy-policy"}>개인정보 처리방침</a></TermsItem>
      </Terms>

      {/*<SocialIcons>*/}
      {/*  <SocialIcon href="#" aria-label="Facebook">F</SocialIcon>*/}
      {/*  <SocialIcon href="#" aria-label="Blog">B</SocialIcon>*/}
      {/*  <SocialIcon href="#" aria-label="Naver">N</SocialIcon>*/}
      {/*  <SocialIcon href="#" aria-label="Twitter">T</SocialIcon>*/}
      {/*  <SocialIcon href="#" aria-label="Instagram">I</SocialIcon>*/}
      {/*</SocialIcons>*/}
    </FooterWrapper>
  );
};

export default Footer;
