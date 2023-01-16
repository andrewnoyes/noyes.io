import { Box, Container } from '@mantine/core';
import { Fragment } from 'react';
import { ProjectDescription, ProjectItem } from './project-item';
import { SectionHeader } from './section-header';

const projects: ProjectDescription[] = [
  {
    title: 'Cop DB',
    description: `This is a tool for community-based police accountability. It tracks police officers, their departments, and incidents or misconduct they're involved in.`,
    images: [
      { url: '/copdb/cops-list.png', caption: 'Cops table view' },
      { url: '/copdb/incident-view.png', caption: 'Reported incident view' },
      { url: '/copdb/report-incident.png', caption: 'Draft incnident report' },
      { url: '/copdb/report-media.png', caption: 'Report media' },
    ],
    techStack: {
      frontend: ['React', 'MobX', 'Emotion'],
      backend: ['.NET Core', 'SignalR', 'PostgreSQL', 'Redis'],
    },
  },
  {
    title: 'Lively',
    description: `Web app for task management and project collaboration. Its API is based on the concept of 'blocks', allowing them to be rendered in a variety of views like kanban boards, tables, checklists, and more. Each project is associated with a channel for team chat and other rich content embeds.`,
    images: [
      { url: '/lively/board-view.png', caption: 'Kanban board view' },
      { url: '/lively/table-view.png', caption: 'Table view' },
      { url: '/lively/chat-pane.png', caption: 'Project chat pane' },
      { url: '/lively/detailed-item-view.png', caption: 'Detailed item modal' },
    ],
    techStack: {
      frontend: ['React', 'Mobx', 'Styled Components'],
      backend: ['Node.js', 'Nest.js', 'Socket.io', 'PostgreSQL'],
    },
  },
  {
    title: 'StepWise',
    description: `Block-based process editor for creating dynamic, step-by-step work instructions and training programs. Processes can be marked as 'controlled' to ensure each step is completed and signed off on.`,
    images: [
      { url: '/stepwise/process-view.png', caption: 'Process view' },
      { url: '/stepwise/process-editor.png', caption: 'Process step editor' },
      {
        url: '/stepwise/controlled-process.png',
        caption: 'Signature required for controlled process',
      },
    ],
    techStack: {
      frontend: ['React', 'MobX', 'MUI'],
      backend: ['Node.js', 'Nest.js', 'PostgresSQL', 'Redis'],
    },
  },
  {
    title: 'Carpool',
    description:
      'App for event organizers to create and list carpools that users can then sign up to be drivers or passengers for.',
    images: [
      { url: '/carpool/carpool-event.png', caption: 'Carpool event page' },
      {
        url: '/carpool/join-as-passenger.png',
        caption: 'Join as passenger',
      },
      {
        url: '/carpool/your-carpools.png',
        caption: 'Your carpools',
      },
    ],
    techStack: {
      frontend: ['React', 'Mobx', 'MUI'],
      backend: ['Node.js', 'Nest.js', 'Socket.io', 'PostgreSQL'],
    },
  },
];

export const Projects = () => {
  return (
    <section id="projects">
      <Container size="lg" sx={{ paddingTop: 100 }}>
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
