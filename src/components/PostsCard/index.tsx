import PostNotFoundImage from '../../assets/icons/postIcon.svg';
import ShareIcon from '../../assets/icons/shareIcon.svg';

import { PostsCardProps } from '../../types/postsCard';
import { Button } from '../Button';

import { Container, Content, PostCard, PostCardComunity } from './styles';

export function PostsCard({ postCard }: PostsCardProps) {
  return (
    <Container>
      <Content>
        {postCard.map((postCard) => (
          <PostCard
            key={postCard.id}
          >
            <h2>{postCard.title}</h2>
            <p>{postCard.body}</p>
            <img src={PostNotFoundImage} alt="PostNotFoundImage" />

            <PostCardComunity>
              <Button
                type='button'
              >
                Ver comentários
              </Button>

              <button
                type='button'>
                <img src={ShareIcon} alt="ShareIcon" />
              </button>
            </PostCardComunity>
          </PostCard>
        ))}
      </Content>
    </Container>
  );
}
