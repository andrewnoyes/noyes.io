import { Accordion, Badge, Container, Group, Tabs, Text } from '@mantine/core';
import { useIsMobile } from '../../hooks';
import { JobDescription, jobDescriptions, slugify } from '../../utils';
import { SectionHeader } from './section-header';
import { WorkExperienceItem } from './work-experience-item';

const JobCompany = ({ job }: { job: JobDescription }) => {
  return (
    <Group noWrap>
      <Text sx={{ fontFamily: 'monospace' }}>{job.company}</Text>
      {job.active && (
        <Badge
          color="green"
          variant="dot"
          radius="xs"
          sx={{
            textTransform: 'lowercase',
          }}
        >
          active
        </Badge>
      )}
    </Group>
  );
};

export const WorkExperience = () => {
  const isMobile = useIsMobile();

  const defaultWorkTab = slugify(jobDescriptions[0].company);

  const renderContent = () => {
    if (isMobile) {
      return (
        <Accordion defaultValue={defaultWorkTab}>
          {jobDescriptions.map((job) => (
            <Accordion.Item key={job.company} value={slugify(job.company)}>
              <Accordion.Control>
                <JobCompany job={job} />
              </Accordion.Control>
              <Accordion.Panel>
                <WorkExperienceItem description={job} />
              </Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      );
    }

    return (
      <Tabs defaultValue={defaultWorkTab} orientation="vertical">
        <Tabs.List>
          {jobDescriptions.map((job) => (
            <Tabs.Tab key={job.company} value={slugify(job.company)}>
              <JobCompany job={job} />
            </Tabs.Tab>
          ))}
        </Tabs.List>
        {jobDescriptions.map((job) => (
          <Tabs.Panel key={job.company} value={slugify(job.company)} pl="xl">
            <WorkExperienceItem description={job} />
          </Tabs.Panel>
        ))}
      </Tabs>
    );
  };

  return (
    <section id="experience">
      <Container size="md" sx={{ paddingTop: '10%', paddingBottom: '10%' }}>
        <SectionHeader title="Work experience" />
        {renderContent()}
      </Container>
    </section>
  );
};
