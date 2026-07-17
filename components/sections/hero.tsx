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
import { IconChevronRight, IconHeart } from '@tabler/icons';
import Link from 'next/link';
import { useState } from 'react';
import { FlagVariant, PrideFlag } from '../pride-flag';

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

const ALL_VARIANTS = Object.values(FlagVariant);

export const Hero = () => {
  const { classes } = useStyles();
  const [variant, setVariant] = useState<FlagVariant>(FlagVariant.Rainbow);

  const handleNextFlag = () => {
    const currentIndex = ALL_VARIANTS.indexOf(variant);
    if (currentIndex + 1 >= ALL_VARIANTS.length) {
      setVariant(ALL_VARIANTS[0]);
    } else {
      setVariant(ALL_VARIANTS[currentIndex + 1]);
    }
  };

  return (
    <Container className={classes.wrapper}>
      <Group mb="xl" align="center" position="center" noWrap>
        <Tooltip label={`${variant} pride flag`}>
          <Box>
            <PrideFlag width={150} variant={variant} />
          </Box>
        </Tooltip>
        <ActionIcon
          aria-label="Next flag"
          title="Next flag"
          onClick={handleNextFlag}
          size="sm"
        >
          <IconChevronRight />
        </ActionIcon>
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
