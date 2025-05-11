import Head from 'next/head';
import { useRouter } from 'next/router';
import { Fragment, useEffect, useState } from 'react';
import { About, Hero, ProjectList, WorkExperience } from '../components';
import { getPageTitle } from '../utils';

export default function Home() {
  const { asPath } = useRouter();
  const [pageTitle, setPageTitle] = useState(getPageTitle([]));

  // add the #about, #experience, etc sections to page title
  useEffect(() => {
    const hash = asPath.split('#')[1];
    setPageTitle(getPageTitle([hash ? `#${hash}` : '']));
  }, [asPath, pageTitle, setPageTitle]);

  return (
    <Fragment>
      <Head>
        <title>{pageTitle}</title>
        <meta property="og:title" content={pageTitle} />
      </Head>
      <Hero />
      <About />
      <WorkExperience />
      <ProjectList />
    </Fragment>
  );
}
