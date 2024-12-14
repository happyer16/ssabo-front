import styled from "@emotion/styled";
import DOMPurify from 'dompurify';
interface PostContentProps {
  content: string;
  images?: Array<{
    url: string;
    alt: string;
  }>;
}

const Content = styled.div`
  margin-bottom: 4rem;

  /* HTML 콘텐츠 스타일링 */
  h1 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 1.125rem;
    line-height: 1.75;
    margin-bottom: 1rem;
  }

  ol, ul {
    margin: 1.5rem 0;
    padding-left: 1.5rem;
  }

  li {
    font-size: 1.125rem;
    line-height: 1.75;
    margin-bottom: 0.5rem;
  }

  strong {
    font-weight: 600;
  }
`;

const Text = styled.p`
  font-size: 1.125rem;
  line-height: 1.75;
`;

const Image = styled.img`
  width: 100%;
  margin: 2rem 0;
  border-radius: 0.5rem;
`;

export const PostContent = ({ content, images }: PostContentProps) => {
  // HTML 콘텐츠 살균
  // const sanitizedContent = DOMPurify.sanitize(content);
  return (
    <Content>
      <div dangerouslySetInnerHTML={{ __html: content }} />
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
