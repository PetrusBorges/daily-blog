import PageHeaderAbout from '../../assets/icons/pageHeaderAbout.svg';

import { AboutInfo } from '../../components/AboutInfo';
import { PageHeader } from '../../components/PageHeader';

export function About() {
  return (
    <>
      <PageHeader
        logoHeader={PageHeaderAbout}
        title='Informações'
        description='Veja um pouco mais sobre a página!'
      />

      <AboutInfo />
    </>
  );
}
