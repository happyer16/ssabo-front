import styled from "@emotion/styled";

interface PostContentProps {
  content: string;
  images?: Array<{
    url: string;
    alt: string;
  }>;
}

interface PostContentProps {
  content: string;
  images?: Array<{
    url: string;
    alt: string;
  }>;
}

interface PostContentProps {
  content: string;
  images?: Array<{
    url: string;
    alt: string;
  }>;
}

const Content = styled.div`
  margin-bottom: 4rem;
  color: rgb(55, 53, 47);
  font-size: 16px;
  line-height: 1.7;
  max-width: 100%;

  /* 기본 HTML 요소 스타일링 */

  h1 {
    font-size: 2rem;
    font-weight: 700;
    margin: 2.5rem 0 1.5rem;
    color: rgb(55, 53, 47);
  }

  h2 {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 2rem 0 1.25rem;
    color: rgb(55, 53, 47);
  }

  h3 {
    font-size: 1.2rem;
    font-weight: 600;
    margin: 1.75rem 0 1rem;
    color: rgb(55, 53, 47);
  }

  h4 {
    font-size: 1.15rem;
    font-weight: 600;
    margin: 1.5rem 0 1rem;
    color: rgb(55, 53, 47);
  }

  h5 {
    font-size: 1.1rem;
    font-weight: 600;
    margin: 1.25rem 0 0.75rem;
    color: rgb(55, 53, 47);
  }

  h6 {
    font-size: 1rem;
    font-weight: 600;
    margin: 1rem 0 0.75rem;
    color: rgb(55, 53, 47);
  }

  p {
    font-size: 1rem;
    line-height: 1.7;
    margin-bottom: 1rem;
    color: rgb(55, 53, 47);
    letter-spacing: -0.01em;
  }

  ol, ul {
    margin: 1.5rem 0;
    padding-left: 1.5rem;
    color: rgb(55, 53, 47);
  }

  li {
    font-size: 1rem;
    line-height: 1.7;
    margin-bottom: 0.5rem;
    padding-left: 0.5rem;
  }

  strong {
    font-weight: 600;
    color: rgb(55, 53, 47);
  }

  /* 테이블 스타일링 */

  table {
    width: 100%;
    border-collapse: collapse;
    margin: 1.5rem 0;
    background-color: #fff;
    font-size: 0.95rem;
  }

  th {
    background-color: rgb(247, 246, 243);
    color: rgb(55, 53, 47);
    font-weight: 600;
    text-align: left;
    padding: 0.875rem 1rem;
    border: 1px solid rgb(233, 233, 231);
  }

  td {
    padding: 0.875rem 1rem;
    border: 1px solid rgb(233, 233, 231);
    line-height: 1.4;
    color: rgb(55, 53, 47);
  }

  tr:hover {
    background-color: rgb(247, 246, 243);
  }

  /* 테이블 반응형 */
  @media (max-width: 768px) {
    table {
      display: block;
      overflow-x: auto;
      white-space: nowrap;
    }
  }

  /* 블록쿼트 스타일링 */

  blockquote {
    background-color: rgb(241, 241, 239);
    border-left: 3px solid rgb(120, 119, 116);
    padding: 1rem 1.5rem;
    margin: 1.5rem 0;
    color: rgb(55, 53, 47);
  }

  /* 링크 스타일링 */

  a {
    color: rgb(35, 131, 226);
    text-decoration: none;
    transition: color 0.2s ease;
    opacity: 0.7;

    &:hover {
      opacity: 1;
    }
  }

  /* 목차 스타일링 */

  .table-of-contents {
    background-color: rgb(247, 246, 243);
    padding: 1.5rem;
    border-radius: 0.5rem;
    margin: 2rem 0;

    h2 {
      margin-top: 0;
      margin-bottom: 1rem;
      font-size: 1.5rem;
    }

    a {
      display: block;
      margin: 0.5rem 0;
      color: rgb(35, 131, 226);
      text-decoration: none;
      opacity: 0.7;

      &:hover {
        opacity: 1;
      }
    }
  }

  /* 이미지 컨테이너 스타일링 */

  .image-container {
    margin: 2rem 0;
  }
`;

const Image = styled.img`
  width: 100%;
  margin: 2rem 0;
  border-radius: 0.5rem;
`;

export const PostContent = ({content, images}: PostContentProps) => {
  // HTML 콘텐츠 살균
  // const sanitizedContent = DOMPurify.sanitize(content);
  return (
    <Content>
      <div dangerouslySetInnerHTML={{__html: content}}/>
      {images?.map((image, index) => (
        <Image
          key={index}
          src={image.url}
          alt={image.alt}
        />
      ))}
    </Content>
  );
};
