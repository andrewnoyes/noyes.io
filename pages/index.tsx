import Head from 'next/head';
import { Fragment } from 'react';
import { About, Hero, ProjectList, WorkExperience } from '../components';
import { getPageTitle } from '../utils';

export default function Home() {
  // add the #about, #experience, etc sections to page title
  const pageTitle = getPageTitle([window.location.hash]);

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
