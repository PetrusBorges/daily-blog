import { PostModal } from '../types/postsCard';

import { useState } from 'react';

import { api } from '../utils/api';

import { ComentaryPostInfo } from '../types/comentaryPost';

export function useModal() {
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

  return {
    isVisible,
    postModal,
    comentaryPost,
    handleToggleModal,
    handleCloseModal,
  };
}
