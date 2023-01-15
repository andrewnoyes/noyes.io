import {
  Box,
  Container,
  List,
  Space,
  Tabs,
  Text,
  Title,
  useMantineTheme,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { IconChevronRight } from '@tabler/icons';
import { SectionHeader } from './section-header';

interface JobDescription {
  title: string;
  company: string;
  companyUrl?: string;
  dateRange: string;
  details: string[];
  techStack: string[];
}

const jobDescriptions: JobDescription[] = [
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

const Job = ({ description }: { description: JobDescription }) => {
  const theme = useMantineTheme();

  return (
    <Box>
      <Title order={3} size="h4">
        {description.title}
        <Text span color="blue">
          {' '}
          @ {description.company}
        </Text>
      </Title>
      <Text color="dimmed" size="xs" sx={{ fontFamily: 'monospace' }}>
        {description.dateRange}
      </Text>
      <Space h="lg" />
      <List
        spacing="md"
        icon={
          <IconChevronRight
            size={18}
            style={{ marginTop: 2 }}
            color={theme.colors.blue[7]}
          />
        }
      >
        {description.details.map((detail) => (
          <List.Item key={detail}>{detail}</List.Item>
        ))}
      </List>
      <Space h="md" />
      <Text color="dimmed" size="sm" sx={{ fontFamily: 'monospace' }}>
        Tech stack: {description.techStack.join(', ')}
      </Text>
    </Box>
  );
};

export const Experience = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <section id="experience">
      <Container size="sm" sx={{ paddingTop: 100, paddingBottom: 100 }}>
        <SectionHeader title="Work Experience" />
        <Tabs
          defaultValue={jobDescriptions[0].company}
          orientation={isMobile ? 'horizontal' : 'vertical'}
        >
          <Tabs.List>
            {jobDescriptions.map((job) => (
              <Tabs.Tab
                key={job.company}
                value={job.company}
                sx={{ fontFamily: 'monospace' }}
              >
                {job.company}
              </Tabs.Tab>
            ))}
          </Tabs.List>
          {jobDescriptions.map((job) => (
            <Tabs.Panel
              key={job.company}
              value={job.company}
              pl={isMobile ? 0 : 'xl'}
              pt={isMobile ? 'xl' : 0}
            >
              <Job description={job} />
            </Tabs.Panel>
          ))}
        </Tabs>
      </Container>
    </section>
  );
};
