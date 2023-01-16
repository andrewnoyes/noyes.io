import { Carousel } from '@mantine/carousel';
import { Card, createStyles, Grid, Image, Text, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    display: 'flex',
    alignItems: 'flex-start',
  },

  section: {
    borderBottom: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    paddingBottom: theme.spacing.md,
  },

  like: {
    color: theme.colors.red[6],
  },

  label: {
    textTransform: 'uppercase',
    fontSize: theme.fontSizes.xs,
    fontWeight: 700,
  },
}));

export interface ProjectDescription {
  title: string;
  description: string;
  images: { url: string; caption?: string }[];
  techStack: { frontend: string[]; backend: string[] };
}

export interface ProjectItemProps {
  projectDescription: ProjectDescription;
  index: number;
}

export const ProjectItem = (props: ProjectItemProps) => {
  const { projectDescription, index } = props;
  const { title, description, images, techStack } = projectDescription;
  const isMobile = useMediaQuery('(max-width: 768px)');
  const { classes } = useStyles();

  const slides = images.map((image) => (
    <Carousel.Slide key={image.url}>
      <Image src={image.url} alt={image.caption} />
    </Carousel.Slide>
  ));

  const isEven = index % 2 === 0;

  const col1 = (
    <Grid.Col sm={7}>
      <Card withBorder radius="sm" p={0} className={classes.card}>
        <Carousel
          loop
          withIndicators
          mx="auto"
          slideGap="xl"
          nextControlLabel="Next image"
          previousControlLabel="Previous image"
        >
          {slides}
        </Carousel>
      </Card>
    </Grid.Col>
  );

  const col2 = (
    <Grid.Col
      sm={5}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: isEven && !isMobile ? 'flex-end' : 'flex-start',
      }}
    >
      <Title order={3}>{title}</Title>
      <Card mt="md" radius="sm" sx={{ width: '100%' }} shadow="xl">
        <Text align={isEven && !isMobile ? 'end' : 'left'}>{description}</Text>
      </Card>
      <Text mt="lg" color="dimmed" size="xs" sx={{ fontFamily: 'monospace' }}>
        {techStack.frontend.join(', ')} <br />
        {techStack.backend.join(', ')}
      </Text>
    </Grid.Col>
  );

  if (isMobile || !isEven) {
    return (
      <Grid gutter="xl">
        {col2}
        {col1}
      </Grid>
    );
  }

  return (
    <Grid gutter="xl">
      {col1}
      {col2}
    </Grid>
  );
};
