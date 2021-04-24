import React from 'react';

import { Content } from '../content/Content';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const Projects = () => (
  <Main meta={<Meta title="projects" description="Lorem ipsum" />}>
    <Content>
      <p >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione fuga recusandae quidem.
        Quaerat molestiae blanditiis doloremque possimus labore voluptatibus distinctio recusandae
        autem esse explicabo molestias officia placeat, accusamus aut saepe.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione fuga recusandae quidem.
        Quaerat molestiae blanditiis doloremque possimus labore voluptatibus distinctio recusandae
        autem esse explicabo molestias officia placeat, accusamus aut saepe.
      </p>
    </Content>
  </Main>
);

export default Projects;
