import { useCallback, useEffect, useState } from 'react';

import { UserCardInfo } from '../types/usersCard';

import { api } from '../utils/api';

export function useUsers() {
  const [ userCard, setUserCard ] = useState<UserCardInfo[]>([]);

  const filteredUsersByFetchData = useCallback(() => {
    api.get('users')
      .then(usersResponse => {
        setUserCard(usersResponse.data);
      });
  }, []);

  const filteredUsersByAlphabet = useCallback(() => {
    api.get('users')
      .then(usersResponde => {
        const sortedUsers = usersResponde.data.sort(( firstName: UserCardInfo, secondName: UserCardInfo ) => {
          if (firstName.name < secondName.name) {
            return -1;
          } else {
            return 1;
          }
        });
        setUserCard(sortedUsers);
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
    userCard,
    handleSelectChange,
  };
}
