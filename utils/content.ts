import { JobDescription, ProjectDescription } from './interfaces';

export const jobDescriptions: JobDescription[] = [
  {
    title: 'Worker Owner & Engineer',
    company: 'Unfrl',
    dateRange: 'January 2019 - Present',
    details: [
      'Interfacing with local activists to develop a police accountability tool that will be run and moderated by the community.',
      'Worked with a client to build their MVP for a process builder and editor to standardize complex work instructions.',
      'Developed and open sourced our carpool web app for event organizers to list carpools that users can sign up to be drivers or passengers for.',
    ],
    techStack: [
      'Node.js',
      'Typescript',
      'Next.js',
      '.NET Core',
      'React',
      'PostgreSQL',
      'Redis',
    ],
  },
  {
    title: 'Senior Software Engineer',
    company: 'Wisely',
    dateRange: 'March 2021 - November 2021',
    details: [
      'Part of the sentiment team responsible for guest review aggregation, sentiment and trend analysis, and automated summary reports.',
      'Implemented the review context service for associating guest visit data with their online reviews.',
      'Worked closely with design to rebuild and ship the front-end for viewing, filtering, and responding to reviews.',
    ],
    techStack: ['Node.js', 'Typescript', 'Vue', 'PostgreSQL', 'Redis'],
  },
  {
    title: 'Senior Software Engineer',
    company: 'PDQ.com',
    dateRange: 'October 2016 - January 2019',
    details: [
      'Created the live webcast app and real-time API that supported chat, Q/A feed, and YouTube live integration.',
      'Led a small team to develop the custom forums and knowledge base that supported rich-text editing, version tracking and diff rendering, and an extensive commenting system.',
      'Re-built the payments API that handled all customer transactions for product purchases.',
      'Collaborated with end-users to determine product requirements and prioritization of features.',
    ],
    techStack: [
      '.NET Core',
      'Node.js',
      'Typescript',
      'React',
      'Angular',
      'MySQL',
      'Elasticsearch',
    ],
  },
  {
    title: 'Lead Software Developer',
    company: 'CivicMinder',
    dateRange: 'January 2016 - October 2016',
    details: [
      'Built our Android and iOS apps for political engagement and news aggregation in React Native.',
      'Developed the backend services for user management, voter registration, link unfurling, and the news feed.',
    ],
    techStack: ['Node.js', 'React', 'React Native', 'MongoDB'],
  },
  {
    title: 'Software Engineer',
    company: 'ASEC',
    dateRange: 'October 2014 - January 2016',
    details: [
      'Built an asset management system for linking PLS-CADD projects with manufacture drawings, GIS, 3D model rendering, and more.',
      'Gave a presentation on PLS integration and demoed the asset management system at the PLS user group meeting.',
      'Made a tool to parse and dynamically filter very large PLS XML project files.',
    ],
    techStack: ['.NET', 'WPF', 'MySQL'],
  },
];

export const projectDescriptions: ProjectDescription[] = [
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
      frontend: ['React', 'MobX', 'Styled Components'],
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
      frontend: ['React', 'MobX', 'MUI'],
      backend: ['Node.js', 'NestJS', 'Socket.io', 'PostgreSQL'],
    },
  },
];
