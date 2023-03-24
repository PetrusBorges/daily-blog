import PostNotFoundImage from '../../assets/icons/postIcon.svg';
import ShareIcon from '../../assets/icons/shareIcon.svg';

import { PostsCardProps, PostModal } from '../../types/postsCard';
import { Button } from '../Button';

import { Container, Content, PostCard, PostCardComunity } from './styles';

import { Modal } from '../../components/Modal';

import { useState } from 'react';

import { api } from '../../utils/api';

import { ComentaryPostInfo } from '../../types/comentaryPost';

export function PostsCard({ postCard }: PostsCardProps) {

  const [ isVisible, setIsVisible ] = useState(false);
  const [ postModal, setPostModal ] = useState<null | PostModal>(null);
  const [ comentaryPost, setComentaryPost ] = useState<ComentaryPostInfo[]>([]);

  async function handleToggleModal(postCardId: number) {
    try {
      Promise.all([
        api.get(`/posts/${postCardId}`),
        api.get(`/posts/${postCardId}/comments`),
      ]).then(([postCardIdResponse, comentaryCardIdResponse]) => {
        setPostModal(postCardIdResponse.data);
        setComentaryPost(comentaryCardIdResponse.data);
      });
    } catch {} finally {

      setIsVisible(true);
    }
  }

  function handleCloseModal() {
    setIsVisible(false);
  }

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
