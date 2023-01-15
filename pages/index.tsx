import { Fragment } from 'react';
import { About, Experience, Hero, Projects } from '../components';

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <About />
      <Experience />
      <Projects />
    </Fragment>
  );
}
