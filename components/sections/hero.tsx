import {
  ActionIcon,
  Box,
  Button,
  Container,
  createStyles,
  Group,
  Space,
  Text,
  Title,
  Tooltip,
} from '@mantine/core';
import {
  IconChevronLeft,
  IconChevronRight,
  IconHeart,
} from '@tabler/icons-react';
import Link from 'next/link';
import { useState } from 'react';
import { FlagVariant, PrideFlag } from '../pride-flag';

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

const ALL_VARIANTS = Object.values(FlagVariant);

export const Hero = () => {
  const { classes } = useStyles();
  const [variant, setVariant] = useState<FlagVariant>(FlagVariant.Rainbow);

  const currentIndex = ALL_VARIANTS.indexOf(variant);
  const lastIndex = ALL_VARIANTS.length - 1;

  const nextVariant =
    currentIndex === lastIndex
      ? ALL_VARIANTS[0]
      : ALL_VARIANTS[currentIndex + 1];

  const previousVariant =
    currentIndex === 0
      ? ALL_VARIANTS[lastIndex]
      : ALL_VARIANTS[currentIndex - 1];

  const previousLabel = `${previousVariant} pride flag`;
  const nextLabel = `${nextVariant} pride flag`;

  const handleNextFlag = () => {
    setVariant(nextVariant);
  };

  const handlePreviousFlag = () => {
    setVariant(previousVariant);
  };

  return (
    <Container className={classes.wrapper}>
      <Group align="center" position="center" spacing="xl" noWrap>
        <ActionIcon
          aria-label={previousLabel}
          title={previousLabel}
          onClick={handlePreviousFlag}
          size="sm"
        >
          <IconChevronLeft />
        </ActionIcon>
        <Tooltip label={`${variant} pride flag`}>
          <Box>
            <PrideFlag width={150} variant={variant} />
          </Box>
        </Tooltip>
        <ActionIcon
          aria-label={nextLabel}
          title={nextLabel}
          onClick={handleNextFlag}
          size="sm"
        >
          <IconChevronRight />
        </ActionIcon>
      </Group>
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
