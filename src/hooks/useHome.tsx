import { useCallback, useEffect, useState } from 'react';

import { PostCardInfo } from '../types/postsCard';

import { api } from '../utils/api';

export function useHome() {
  const [ postCard, setPostCard ] = useState<PostCardInfo[]>([]);

  const filteredUsersByFetchData = useCallback(() => {
    api.get('posts')
      .then(postResponse => {
        setPostCard(postResponse.data);
      });
  }, []);

  const filteredUsersByAlphabet = useCallback(() => {
    api.get('posts')
      .then(postResponse => {
        const sortedUsers = postResponse.data.sort(( firstName: PostCardInfo, secondName: PostCardInfo ) => {
          if (firstName.title < secondName.title) {
            return -1;
          } else {
            return 1;
          }
        });
        setPostCard(sortedUsers);
      });
  }, []);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    switch (event.target.value) {
    case 'filteredUsersByFetchData':
      filteredUsersByFetchData();
      break;
    case 'filteredUsersByAlphabet':
      filteredUsersByAlphabet();
      break;
    default:
      break;
    }
  };

  useEffect(() => {
    filteredUsersByFetchData();
  }, [filteredUsersByFetchData]);

  return {
    postCard,
    handleSelectChange,
  };
}
