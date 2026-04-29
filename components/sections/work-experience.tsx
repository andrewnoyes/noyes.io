import { Badge, Container, Group, Tabs, Text } from '@mantine/core';
import { useIsMobile } from '../../hooks';
import { jobDescriptions } from '../../utils';
import { SectionHeader } from './section-header';
import { WorkExperienceItem } from './work-experience-item';

export const WorkExperience = () => {
  const isMobile = useIsMobile();

  return (
    <section id="experience">
      <Container size="md" sx={{ paddingTop: '5%', paddingBottom: '5%' }}>
        <SectionHeader title="Work experience" />
        <Tabs
          defaultValue={jobDescriptions[0].company}
          orientation={isMobile ? 'horizontal' : 'vertical'}
        >
          <Tabs.List>
            {jobDescriptions.map((job) => (
              <Tabs.Tab key={job.company} value={job.company}>
                <Group spacing={isMobile ? 8 : 'xl'}>
                  <Text
                    sx={{
                      fontFamily: 'monospace',
                      fontSize: isMobile ? 'medium' : 'inherit',
                    }}
                  >
                    {job.company}
                  </Text>
                  {job.active && (
                    <Badge
                      color="green"
                      variant="dot"
                      radius="xs"
                      size={isMobile ? 'sm' : undefined}
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
