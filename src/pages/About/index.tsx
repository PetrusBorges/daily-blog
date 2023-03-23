import PageHeaderAbout from '../../assets/icons/pageHeaderAbout.svg';

import { PageHeader } from '../../components/PageHeader';

export function About() {
  return (
    <PageHeader
      logoHeader={PageHeaderAbout}
      title='Sobre'
      description='Veja um pouco mais sobre a página!'
    />
  );
}
