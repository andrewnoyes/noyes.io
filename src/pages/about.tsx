import React from 'react';

import { Content } from '../components/content';
import { Meta } from '../components/meta';
import { Main } from '../templates/main';

const About = () => (
  <Main meta={<Meta title="about" description="Lorem ipsum" />}>
    <Content>
      <p>about meh</p>
    </Content>
  </Main>
);

export default About;
