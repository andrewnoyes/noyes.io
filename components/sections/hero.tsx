import {
  Button,
  Container,
  createStyles,
  Space,
  Text,
  Title,
  useMantineTheme,
} from '@mantine/core';
import Link from 'next/link';
import { Dots } from '../dots';

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    paddingTop: 200,
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
        ? theme.colors.dark[5]
        : theme.colors.gray[3],
    '@media (max-width: 520px)': {
      display: 'none',
    },
  },

  title: {
    fontWeight: 800,
    fontSize: 'clamp(40px, 8vw, 80px)',
    letterSpacing: -1,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

  description: {
    fontSize: 24,
    '@media (max-width: 520px)': {
      fontSize: 18,
    },
  },
}));

export const Hero = () => {
  const { classes } = useStyles();
  const theme = useMantineTheme();

  return (
    <Container className={classes.wrapper} size={1400}>
      <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
      <Dots className={classes.dots} style={{ right: 0, top: 60 }} />
      <div className={classes.inner}>
        <Container
          p={0}
          size={600}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          <Text
            color={
              theme.colorScheme === 'dark'
                ? theme.colors.blue[5]
                : theme.colors.blue[9]
            }
            sx={{ fontFamily: 'monospace', marginLeft: 8, marginBottom: 6 }}
          >
            Hey! My name is
          </Text>
          <Title className={classes.title}>Andrew Noyes.</Title>
          <Text color="dimmed" className={classes.description}>
            I'm a software engineer specializing in full-stack application
            development.
          </Text>
          <Space h="xl" mt="m" />
          <Link href="mailto:andrew@noyes.io">
            <Button variant="gradient" size="lg">
              Get in touch
            </Button>
          </Link>
        </Container>
      </div>
    </Container>
  );
};
