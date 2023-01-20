import { Box, List, Space, Text, Title, useMantineTheme } from '@mantine/core';
import { IconChevronRight } from '@tabler/icons';
import { JobDescription } from '../../utils';

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
              ? theme.colors.blue[4]
              : theme.colors.blue[9]
          }
        >
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
