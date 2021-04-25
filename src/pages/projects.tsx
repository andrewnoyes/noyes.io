import React from 'react';

import { Content } from '../components/content';
import { Meta } from '../components/meta';
import { Main } from '../templates/main';

const Projects = () => (
  <Main meta={<Meta title="projects" description="Lorem ipsum" />}>
    <Content>
      <p>
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
