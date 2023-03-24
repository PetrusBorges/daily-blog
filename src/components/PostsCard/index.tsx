import PostNotFoundImage from '../../assets/icons/postIcon.svg';
import ShareIcon from '../../assets/icons/shareIcon.svg';

import { Button } from '../Button';

import { Container, Content, PostCard, PostCardComunity } from './styles';

import { PostsCardProps } from '../../types/postsCard';

export function PostsCard({ postCard, handleToggleModal }: PostsCardProps) {

  return (
    <>
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
                  onClick={() => handleToggleModal(postCard.id)}
                >
                Ver comentários
                </Button>

                <button
                  type='button'
                >
                  <img src={ShareIcon} alt="ShareIcon" />
                </button>
              </PostCardComunity>
            </PostCard>
          ))}
        </Content>
      </Container>
    </>
  );
}
