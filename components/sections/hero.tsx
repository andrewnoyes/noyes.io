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
import { PrideFlag } from '../pride-flag';

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: '10%',
    paddingBottom: '25%',
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
    <Container className={classes.wrapper}>
      <Group mb="xl" position="center">
        <PrideFlag width={150} />
      </Group>
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
          <Group spacing="xs">
            <IconHeart size={32} aria-hidden />
            <Text size="xs">
              made by a human <br />
              <strong>not by ai</strong>
            </Text>
          </Group>
        </Group>
      </Container>
    </Container>
  );
};
