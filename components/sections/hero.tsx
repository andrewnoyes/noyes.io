import {
  Container,
  createStyles,
  Group,
  Space,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import {
  CopDbBadgeTag,
  EmailMeBadgeTag,
  NoAiBadgeTag,
  SlcTempBadgeTag,
} from '../badge-tags';
import { PrideFlagPicker } from '../pride-flag-picker';
import { HackerWebring, IndieWebWebring, NoAiWebring } from '../webrings';

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: '10%',
    paddingBottom: '10%',
  },
  greetingContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginTop: 40,
  },
  greeting: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: 'monospace',
    marginLeft: 8,
    marginBottom: 6,
  },
  title: {
    fontWeight: 800,
    fontSize: 'clamp(40px, 8vw, 80px)',
    letterSpacing: -1,
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.violet[4]
        : theme.colors.violet[9],
    fontFamily: 'monospace',
  },
}));

export const Hero = () => {
  const { classes } = useStyles();

  return (
    <Container className={classes.wrapper}>
      <PrideFlagPicker />
      <Container
        p={0}
        size={650}
        className={`${classes.greetingContainer} h-card`}
      >
        <Text className={classes.greeting}>Helloooo! My name is</Text>
        <Title className={`${classes.title} p-name`}>Andrew Noyes!</Title>
        <Text color="dimmed" size="lg">
          {`I'm a software engineer specializing in full-stack application
            development.`}
        </Text>
        <Space h="xl" mt="m" />
        <Group spacing="xs">
          <CopDbBadgeTag />
          <NoAiBadgeTag />
          <SlcTempBadgeTag />
          <EmailMeBadgeTag />
        </Group>
        <Stack sx={{ alignSelf: 'center' }} mt={40} spacing={0}>
          <IndieWebWebring />
          <NoAiWebring />
          <HackerWebring />
        </Stack>
      </Container>
    </Container>
  );
};
