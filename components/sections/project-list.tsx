import { Box, Container } from '@mantine/core';
import { Fragment } from 'react';
import { projectDescriptions } from '../../utils';
import { ProjectItem } from './project-item';
import { SectionHeader } from './section-header';

export const ProjectList = () => {
  return (
    <section id="projects">
      <Container size="lg" sx={{ paddingTop: 100 }}>
        <SectionHeader title="Projects" />
        <Box>
          {projectDescriptions.map((project, index) => (
            <Fragment key={project.title}>
              <ProjectItem projectDescription={project} index={index} />
              <Box my={75} />
            </Fragment>
          ))}
        </Box>
      </Container>
    </section>
  );
};
