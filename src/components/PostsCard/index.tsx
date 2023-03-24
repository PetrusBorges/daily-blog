import PostNotFoundImage from '../../assets/icons/postIcon.svg';
import ShareIcon from '../../assets/icons/shareIcon.svg';

import { Button } from '../Button';
import { Modal } from '../../components/Modal';

import { Container, Content, PostCard, PostCardComunity } from './styles';

import { usePostsCard } from '../../hooks/usePostsCard';

import { PostsCardProps } from '../../types/postsCard';

export function PostsCard({ postCard }: PostsCardProps) {

  const {
    isVisible,
    postModal,
    comentaryPost,
    handleToggleModal,
    handleCloseModal,
  } = usePostsCard();

  return (
    <>
      <Modal
        isVisible={isVisible}
        handleCloseModal={handleCloseModal}
        postModal={postModal}
        comentaryPost={comentaryPost}
      />

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
