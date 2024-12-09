import styled from "@emotion/styled";

interface PostContentProps {
  content: string;
  images?: Array<{
    url: string;
    alt: string;
  }>;
}

const Content = styled.div`
  margin-bottom: 4rem;
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
  return (
    <Content>
      <Text>{content}</Text>
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
