import PageHeaderRecent from '../../assets/icons/pageHeaderRecent.svg';

import { useModal } from '../../hooks/useModal';
import { SvgElipse } from '../../components/SvgElipse';
import { PageHeader } from '../../components/PageHeader';
import { PostsCard } from '../../components/PostsCard';

import { useHome } from '../../hooks/useHome';
import { Modal } from '../../components/Modal';


export function Home() {

  const {
    postCard,
    handleSelectChange
  } = useHome();

  const {
    isVisible,
    postModal,
    comentaryPost,
    handleToggleModal,
    handleCloseModal,
  } = useModal();

  return (
    <>
      <Modal
        isVisible={isVisible}
        handleCloseModal={handleCloseModal}
        postModal={postModal}
        comentaryPost={comentaryPost}
      />

      <SvgElipse />
      <PageHeader
        logoHeader={PageHeaderRecent}
        title='Mais recentes'
        description='Veja as postagens mais recentes!'
        onChange={handleSelectChange}
      />

      <PostsCard
        postCard={postCard}
        handleToggleModal={handleToggleModal}
      />
    </>
  );
}
