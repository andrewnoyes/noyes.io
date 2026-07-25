import {
  Button,
  Container,
  createStyles,
  Group,
  Image,
  Space,
  Text,
  Title,
} from '@mantine/core';
import Link from 'next/link';
import { ExternalLink } from '../external-link';
import { PrideFlagPicker } from '../pride-flag-picker';

const BADGE_WIDTH = 150;

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
  badge: {
    border: '1px solid',
    borderColor: theme.colors.violet,
    paddingLeft: theme.spacing.xs,
    paddingRight: theme.spacing.xs,
    borderRadius: theme.radius.sm,
    height: 50,
    width: BADGE_WIDTH,
  },
  internalLink: {
    color: 'inherit',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
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
              sx={{ width: BADGE_WIDTH }}
              gradient={{ from: 'grape', to: 'violet' }}
              size="lg"
            >
              Email me!
            </Button>
          </Link>
          <ExternalLink href="https://app.copdb.org" sx={{ color: 'inherit' }}>
            <Group spacing="xs" noWrap className={classes.badge}>
              <Image
                src="/pig-glasses.png"
                height={32}
                width={32}
                alt="cop pig with sunglasses."
              />
              <Text size="xs" sx={{ lineHeight: 1.3 }}>
                report cops at <br />
                <strong>copdb.org</strong>
              </Text>
            </Group>
          </ExternalLink>
          <Link href="/notes/_tech-critique" className={classes.internalLink}>
            <Group spacing="xs" noWrap className={classes.badge}>
              <Image
                src="/thinksies.png"
                height={32}
                width={32}
                alt="thinksies"
              />
              <Text size="xs" sx={{ lineHeight: 1.3 }}>
                made by human <br />
                <strong>not by ai</strong>
              </Text>
            </Group>
          </Link>
        </Group>
      </Container>
    </Container>
  );
};
