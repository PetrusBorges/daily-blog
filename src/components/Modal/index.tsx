import PostNotFoundImage from '../../assets/icons/postIcon.svg';
import UserNotFoundImage from '../../assets/icons/pageHeaderUsers.svg';
import IconClose from '../../assets/icons/mobileIconClose.svg';

import { VerticalScroll } from '../Slider';
import { ReactPortal } from '../ReactPortal';

import { Overlay, Container, Header, PostContent, HeaderComentary, PostComentary, PostComentaryCard, UserInfo } from './styles';

import { useAnimateUnmount } from '../../hooks/useAnimateUnmount';

import { PostModal } from '../../types/postsCard';
import { ComentaryPostInfo } from '../../types/comentaryPost';

interface ModalProps {
  isVisible: boolean;
  handleCloseModal: () => void;
  postModal: null | PostModal;
  comentaryPost: ComentaryPostInfo[];
}

export function Modal({ isVisible, handleCloseModal, postModal, comentaryPost }: ModalProps) {

  const { shouldRender, animatedElementRef } = useAnimateUnmount(isVisible);

  if (!shouldRender || !postModal) {
    return null;
  }

  return (
    <ReactPortal
      containerId='modal-root'
    >
      <Overlay
        isVisible={!isVisible}
        ref={animatedElementRef}
      >
        <Container
          isVisible={!isVisible}
        >
          <Header>
            <h4>{postModal.title}</h4>

            <button
              type='button'
              onClick={handleCloseModal}
            >
              <img src={IconClose} alt="IconClose" />
            </button>
          </Header>
          <PostContent>
            <p>{postModal.body}</p>

            <img src={PostNotFoundImage} alt="PostNotFoundImage" />
          </PostContent>

          <HeaderComentary>
            Comentários
          </HeaderComentary>

          <VerticalScroll>
            {comentaryPost.map((comentaryPost) => (
              <PostComentary
                key={comentaryPost.id}
              >
                <PostComentaryCard>
                  <img src={UserNotFoundImage} alt="UserNotFoundImage" />
                  <UserInfo>
                    <p>{comentaryPost.name}</p>
                    <p>{comentaryPost.email}</p>
                  </UserInfo>
                </PostComentaryCard>

                <p>{comentaryPost.body}</p>
              </PostComentary>
            ))}
          </VerticalScroll>
        </Container>
      </Overlay>
    </ReactPortal>
  );
}
