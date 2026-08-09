import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { About, Hero, ProjectList, WorkExperience } from '../components';
import { getPageTitle } from '../utils';

export default function Home() {
  const { asPath } = useRouter();
  const [pageTitle, setPageTitle] = useState(getPageTitle([]));

  // add the #about, #experience, etc sections to page title
  useEffect(() => {
    const hash = asPath.split('#')[1];
    setPageTitle(getPageTitle([hash || '']));
  }, [asPath, pageTitle, setPageTitle]);

  return (
    <div>
      <Head>
        <title>{pageTitle}</title>
        <meta property="og:title" content={pageTitle} key="title" />
      </Head>
      <Hero />
      <About />
      <WorkExperience />
      <ProjectList />
    </div>
  );
}
