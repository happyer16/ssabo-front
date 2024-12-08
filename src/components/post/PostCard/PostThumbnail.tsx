import styled from '@emotion/styled';

interface PostThumbnailProps {
  src: string;
  alt?: string;
}

export default function PostThumbnail({ src, alt }: PostThumbnailProps) {
  return (
    <ThumbnailWrapper>
      <ThumbnailImage src={src} alt={alt || ''} />
    </ThumbnailWrapper>
  );
}

const ThumbnailWrapper = styled.div`
  flex-shrink: 0;
  width: 120px;
  height: 90px;
  border-radius: 0.375rem;
  overflow: hidden;
`;

const ThumbnailImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
