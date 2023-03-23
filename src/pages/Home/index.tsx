import PageHeaderRecent from '../../assets/icons/pageHeaderRecent.svg';

import { SvgElipse } from '../../components/SvgElipse';
import { PageHeader } from '../../components/PageHeader';
import { PostsCard } from '../../components/PostsCard';

import { useHome } from '../../hooks/useHome';

export function Home() {

  const {
    postCard,
    handleSelectChange
  } = useHome();

  return (
    <>
      <SvgElipse />
      <PageHeader
        logoHeader={PageHeaderRecent}
        title='Mais recentes'
        description='Veja as postagens mais recentes!'
        onChange={handleSelectChange}
      />

      <PostsCard
        postCard={postCard}
      />
    </>
  );
}
