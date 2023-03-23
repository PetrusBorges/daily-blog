import PageHeaderRecent from '../../assets/icons/pageHeaderRecent.svg';

import { PageHeader } from '../../components/PageHeader';
import { SvgElipse } from '../../components/SvgElipse';

export function Home() {
  return (
    <>
      <SvgElipse />
      <PageHeader
        logoHeader={PageHeaderRecent}
        title='Mais recentes'
        description='Veja as postagens mais recentes!'
      />
    </>
  );
}
