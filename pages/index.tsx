import { Fragment } from 'react';
import { About, Hero, ProjectList, WorkExperience } from '../components';

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <About />
      <WorkExperience />
      <ProjectList />
    </Fragment>
  );
}
