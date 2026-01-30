import { Badge, Box, Container, Flex, Group, Tabs, Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { jobDescriptions } from '../../utils';
import { SectionHeader } from './section-header';
import { WorkExperienceItem } from './work-experience-item';

export const WorkExperience = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <section id="experience">
      <Container size="md" sx={{ paddingTop: 100, paddingBottom: 100 }}>
        <SectionHeader title="Work experience" />
        <Tabs
          defaultValue={jobDescriptions[0].company}
          orientation={isMobile ? 'horizontal' : 'vertical'}
        >
          <Tabs.List>
            {jobDescriptions.map((job) => (
              <Tabs.Tab key={job.company} value={job.company}>
                <Group spacing="xl">
                  <Text sx={{ fontFamily: 'monospace' }}>{job.company}</Text>
                  {job.active && (
                    <Badge
                      color="green"
                      variant="dot"
                      radius="xs"
                      sx={{ fontFamily: 'monospace' }}
                    >
                      active
                    </Badge>
                  )}
                </Group>
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
              <WorkExperienceItem description={job} />
            </Tabs.Panel>
          ))}
        </Tabs>
      </Container>
    </section>
  );
};
