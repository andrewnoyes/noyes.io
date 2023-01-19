import { Container, Tabs } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { jobs } from '../../content';
import { SectionHeader } from './section-header';
import { WorkExperienceItem } from './work-experience-item';

export const WorkExperience = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <section id="experience">
      <Container size="sm" sx={{ paddingTop: 100, paddingBottom: 100 }}>
        <SectionHeader title="Work Experience" />
        <Tabs
          defaultValue={jobs[0].company}
          orientation={isMobile ? 'horizontal' : 'vertical'}
        >
          <Tabs.List>
            {jobs.map((job) => (
              <Tabs.Tab
                key={job.company}
                value={job.company}
                sx={{ fontFamily: 'monospace' }}
              >
                {job.company}
              </Tabs.Tab>
            ))}
          </Tabs.List>
          {jobs.map((job) => (
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
