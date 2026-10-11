import { Box, List, Space, Text, Title, useMantineTheme } from '@mantine/core';
import { IconChevronRight } from '@tabler/icons-react';
import { JobDescription } from '../../utils';
import { BadgeList } from '../badge-list';
import { ExternalLink } from '../external-link';

export const WorkExperienceItem = ({
  description,
}: {
  description: JobDescription;
}) => {
  const theme = useMantineTheme();

  return (
    <Box>
      <Title order={3} size="h4">
        {description.title}
        <Text
          span
          color={
            theme.colorScheme === 'dark'
              ? theme.colors.violet[4]
              : theme.colors.violet[9]
          }
        >
          {' '}
          {description.companyUrl ? (
            <ExternalLink href={description.companyUrl}>
              @ {description.company}
            </ExternalLink>
          ) : (
            <Text span color="dimmed">
              @ {description.company}
            </Text>
          )}
        </Text>
      </Title>
      <Text color="dimmed" size="xs">
        {description.dateRange}
      </Text>
      <Space h="lg" />
      <List
        spacing="md"
        icon={
          <IconChevronRight
            size={18}
            style={{ marginTop: 2 }}
            color={theme.colors.violet[7]}
          />
        }
      >
        {description.details.map((detail) => (
          <List.Item key={detail}>{detail}</List.Item>
        ))}
      </List>
      <Space h="md" />
      <BadgeList items={description.techStack} />
    </Box>
  );
};
