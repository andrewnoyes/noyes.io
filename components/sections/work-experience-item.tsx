import { Box, createStyles, List, Space, Text, Title } from '@mantine/core';
import { IconChevronRight } from '@tabler/icons';
import Link from 'next/link';
import { JobDescription } from '../../utils';

const useStyles = createStyles((theme) => ({
  companyUrl: {
    textDecoration: 'none',
    color: 'inherit',
    ...theme.fn.hover({
      textDecoration: 'underline',
    }),
  },
}));

export const WorkExperienceItem = ({
  description,
}: {
  description: JobDescription;
}) => {
  const { classes, theme } = useStyles();

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
          {description.companyUrl ? (
            <Link
              href={description.companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={classes.companyUrl}
            >
              @ {description.company}
            </Link>
          ) : (
            <Text span color="dimmed">
              @ {description.company}
            </Text>
          )}
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
