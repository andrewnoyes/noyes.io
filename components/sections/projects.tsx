import { Box, Container } from '@mantine/core';
import { Fragment } from 'react';
import { ProjectDescription, ProjectItem } from './project-item';
import { SectionHeader } from './section-header';

const projects: ProjectDescription[] = [
  {
    title: 'Cop Database',
    description:
      'Hot chicken big mood austin mustache single-origin coffee af. Portland chartreuse meggings ethical art party locavore.',
    images: [
      { url: '/copdb/cops-list.png' },
      { url: '/copdb/incident-view.png' },
      { url: '/copdb/report-incident.png' },
      { url: '/copdb/report-media.png' },
    ],
    techStack: {
      frontend: ['React', 'MobX', 'Emotion'],
      backend: ['.NET Core', 'SignalR', 'PostgreSQL', 'Redis'],
    },
  },
  {
    title: 'StepWise',
    description:
      'Hot chicken big mood austin mustache single-origin coffee af. Portland chartreuse meggings ethical art party locavore.',
    images: [
      { url: '/stepwise/process-view.png' },
      { url: '/stepwise/process-editor.png' },
      { url: '/stepwise/controlled-process.png' },
    ],
    techStack: {
      frontend: ['React', 'MobX', 'MUI'],
      backend: ['Node.js', 'Nest.js', 'PostgresSQL', 'Redis'],
    },
  },
  {
    title: 'Lively',
    description:
      'Hot chicken big mood austin mustache single-origin coffee af. Portland chartreuse meggings ethical art party locavore.',
    images: [{ url: '/stepwise/controlled-process.png' }],
    techStack: {
      frontend: ['React', 'Mobx', 'Styled Components'],
      backend: ['Node.js', 'Nest.js', 'Socket.io', 'PostgreSQL'],
    },
  },
  {
    title: 'Carpool',
    description:
      'Hot chicken big mood austin mustache single-origin coffee af. Portland chartreuse meggings ethical art party locavore.',
    images: [{ url: '/stepwise/controlled-process.png' }],
    techStack: {
      frontend: ['React', 'Mobx', 'MUI'],
      backend: ['Node.js', 'Nest.js', 'Socket.io', 'PostgreSQL'],
    },
  },
];

export const Projects = () => {
  return (
    <section id="projects">
      <Container size="lg" sx={{ paddingTop: 100, paddingBottom: 100 }}>
        <SectionHeader title="Projects" />
        <Box>
          {projects.map((project, index) => (
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
