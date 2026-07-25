import {
  Button,
  Container,
  createStyles,
  Group,
  Space,
  Text,
  Title,
} from '@mantine/core';
import Link from 'next/link';
import { CopDbBadgeTag, NoAiBadgeTag } from '../badge-tags';
import { PrideFlagPicker } from '../pride-flag-picker';

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: '10%',
    paddingBottom: '25%',
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
  description: {
    fontSize: 20,
    '@media (max-width: 520px)': {
      fontSize: 18,
    },
  },
}));

export const Hero = () => {
  const { classes } = useStyles();

  return (
    <Container className={classes.wrapper}>
      <PrideFlagPicker />
      <Container p={0} size={650} className={classes.greetingContainer}>
        <Text className={classes.greeting}>Hey! My name is</Text>
        <Title className={classes.title}>Andrew Noyes.</Title>
        <Text color="dimmed" className={classes.description}>
          {`I'm a software engineer specializing in full-stack application
            development.`}
        </Text>
        <Space h="xl" mt="m" />
        <Group>
          <Link href="mailto:andrew@noyes.io">
            <Button
              variant="gradient"
              sx={{ width: 150 }}
              gradient={{ from: 'grape', to: 'violet' }}
              size="lg"
            >
              Email me!
            </Button>
          </Link>
          <CopDbBadgeTag />
          <NoAiBadgeTag />
        </Group>
      </Container>
    </Container>
  );
};
