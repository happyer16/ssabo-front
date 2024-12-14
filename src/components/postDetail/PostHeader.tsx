import styled from '@emotion/styled';
import {Avatar, AvatarImage} from '../ui/avatar';
import {Button} from '../ui/button';
import {getCloudFrontImageUrl} from "@/src/utils/aws-util";
import {formatDate} from "@/src/utils/date-util";

interface PostHeaderProps {
  title: string;
  author: {
    name: string;
    image: string;
  };
  createdAt: string;
  views: number;
  commentsCount: number;
  isAuthor?: boolean;
  onEdit?: () => void;
  onDelete?: () => void;
}

const Header = styled.div`
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 1.875rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
`;

const MetaWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const StyledAvatar = styled(Avatar)`
  width: 2.5rem;
  height: 2.5rem;
`;

const AuthorName = styled.p`
  font-weight: 500;
`;

const MetaInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 0.875rem;
  color: #6b7280;
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const DeleteButton = styled(Button)`
  color: #ef4444;
`;

export const PostHeader = ({
                             title,
                             author,
                             createdAt,
                             views,
                             commentsCount,
                             isAuthor,
                             onEdit,
                             onDelete
                           }: PostHeaderProps) => {
  return (
    <Header>
      <Title>{title}</Title>
      <MetaWrapper>
        <AuthorInfo>
          <StyledAvatar>
            <AvatarImage src={getCloudFrontImageUrl('/mypage/member_default.svg')}/>
          </StyledAvatar>
          <div>
            <AuthorName>{author.name}</AuthorName>
            <MetaInfo>
              <span>작성일 {formatDate(createdAt)}</span>
              <span>조회 {views}</span>
              <span>댓글 {commentsCount}</span>
            </MetaInfo>
          </div>
        </AuthorInfo>
        {isAuthor && (
          <ButtonGroup>
            <Button variant="outline" size="sm" onClick={onEdit}>수정</Button>
            <DeleteButton variant="outline" size="sm" onClick={onDelete}>삭제</DeleteButton>
          </ButtonGroup>
        )}
      </MetaWrapper>
    </Header>
  );
};
