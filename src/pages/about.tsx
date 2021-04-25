import React from 'react';

import { Content } from '../content/content';
import { Meta } from '../layout/meta';
import { Main } from '../templates/main';

const About = () => (
  <Main meta={<Meta title="about" description="Lorem ipsum" />}>
    <Content>
      <p>about meh</p>
    </Content>
  </Main>
);

export default About;
