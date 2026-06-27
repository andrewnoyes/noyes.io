import {
  Button,
  Container,
  createStyles,
  Group,
  Space,
  Text,
  Title,
} from '@mantine/core';
import { IconHeart } from '@tabler/icons';
import Link from 'next/link';
import { Dots } from '../dots';

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    paddingTop: '20%',
    height: '100vh',
  },
  inner: {
    position: 'relative',
    zIndex: 1,
  },
  dots: {
    position: 'absolute',
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.violet[4]
        : theme.colors.violet[9],
    '@media (max-width: 750px)': {
      display: 'none',
    },
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
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
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
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
    <Container className={classes.wrapper} size={1400}>
      <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
      <Dots className={classes.dots} style={{ right: 0, top: 60 }} />
      <div className={classes.inner}>
        <Container p={0} size={600} className={classes.titleContainer}>
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
                gradient={{ from: 'grape', to: 'violet' }}
                size="lg"
              >
                Email me!
              </Button>
            </Link>
            <Group spacing="xs" sx={{ border: '1px solid grape', p: 1 }}>
              <IconHeart size={32} aria-hidden />
              <Text size="xs">
                made by a human <br />
                <strong>not by ai</strong>
              </Text>
            </Group>
          </Group>
        </Container>
      </div>
    </Container>
  );
};
