import PageHeaderUsers from '../../assets/icons/pageHeaderUsers.svg';

import { PageHeader } from '../../components/PageHeader';
import { UsersCard } from '../../components/UsersCard';

import { useUsers } from '../../hooks/useUsers';

export function Users() {

  const {
    userCard,
    handleSelectChange,
  } = useUsers();

  return (
    <>
      <PageHeader
        logoHeader={PageHeaderUsers}
        title='Usuários'
        description='Veja todos os usuários cadastrados!'
        onChange={handleSelectChange}
      />

      <UsersCard
        userCard={userCard}
      />
    </>
  );
}
