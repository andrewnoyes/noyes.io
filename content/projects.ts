import { ProjectDescription } from '../interfaces';

export const projects: ProjectDescription[] = [
  {
    title: 'Cop DB',
    description: `This is a tool for community-based police accountability. It tracks police officers, their departments, and incidents or misconduct they're involved in.`,
    images: [
      { url: '/copdb/cops-list.webp', caption: 'Cops table view' },
      { url: '/copdb/incident-view.webp', caption: 'Reported incident view' },
      { url: '/copdb/report-incident.webp', caption: 'Draft incnident report' },
      { url: '/copdb/report-media.webp', caption: 'Report media' },
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
      { url: '/lively/board-view.webp', caption: 'Kanban board view' },
      { url: '/lively/table-view.webp', caption: 'Table view' },
      { url: '/lively/chat-pane.webp', caption: 'Project chat pane' },
      {
        url: '/lively/detailed-item-view.webp',
        caption: 'Detailed item modal',
      },
    ],
    techStack: {
      frontend: ['React', 'Mobx', 'Styled Components'],
      backend: ['Node.js', 'NestJS', 'Socket.io', 'PostgreSQL'],
    },
  },
  {
    title: 'StepWise',
    description: `Block-based process editor for creating dynamic, step-by-step work instructions and training programs. Processes can be marked as 'controlled' to ensure each step is completed and signed off on.`,
    images: [
      { url: '/stepwise/process-view.webp', caption: 'Process view' },
      { url: '/stepwise/process-editor.webp', caption: 'Process step editor' },
      {
        url: '/stepwise/controlled-process.webp',
        caption: 'Signature required for controlled process',
      },
    ],
    techStack: {
      frontend: ['React', 'MobX', 'MUI'],
      backend: ['Node.js', 'NestJS', 'PostgresSQL', 'Redis'],
    },
  },
  {
    title: 'Carpool',
    description:
      'App for event organizers to create and list carpools that users can then sign up to be drivers or passengers for.',
    images: [
      { url: '/carpool/carpool-event.webp', caption: 'Carpool event page' },
      {
        url: '/carpool/join-as-passenger.webp',
        caption: 'Join as passenger',
      },
      {
        url: '/carpool/your-carpools.webp',
        caption: 'Your carpools',
      },
    ],
    techStack: {
      frontend: ['React', 'Mobx', 'MUI'],
      backend: ['Node.js', 'NestJS', 'Socket.io', 'PostgreSQL'],
    },
  },
];
