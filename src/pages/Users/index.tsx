import PageHeaderUsers from '../../assets/icons/pageHeaderUsers.svg';

import { PageHeader } from '../../components/PageHeader';

export function Users() {
  return (
    <PageHeader
      logoHeader={PageHeaderUsers}
      title='Usuários'
      description='Veja todos os usuários cadastrados!'
    />
  );
}
