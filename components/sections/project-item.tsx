import { Carousel } from '@mantine/carousel';
import { Card, createStyles, Grid, Image, Text, Title } from '@mantine/core';
import { IconArrowUpRight } from '@tabler/icons';
import Link from 'next/link';
import { ProjectDescription } from '../../utils';

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    display: 'flex',
    alignItems: 'flex-start',
  },
  projectUrl: {
    textDecoration: 'none',
    color: 'inherit',
    display: 'flex',
    alignItems: 'center',
    gap: 6,
    ...theme.fn.hover({
      textDecoration: 'underline',
      alignItems: 'flex-start',
    }),
  },
}));

export const ProjectItem = ({
  projectDescription,
}: {
  projectDescription: ProjectDescription;
}) => {
  const { title, projectUrl, description, images, techStack } =
    projectDescription;
  const { classes } = useStyles();

  return (
    <Grid gutter="xl">
      <Grid.Col
        sm={5}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}
      >
        <Card radius="sm" sx={{ width: '100%' }} shadow="xl">
          <Title order={3}>
            {projectUrl ? (
              <Link
                href={projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.projectUrl}
              >
                {title}
                <IconArrowUpRight />
              </Link>
            ) : (
              title
            )}
          </Title>
          <Text align="left" mt="xs">
            {description}
          </Text>
          <Text
            mt="xs"
            color="dimmed"
            size="xs"
            sx={{ fontFamily: 'monospace' }}
          >
            {techStack.frontend.join(', ')} <br />
            {techStack.backend.join(', ')}
          </Text>
        </Card>
      </Grid.Col>
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
            {images.map((image) => (
              <Carousel.Slide key={image.url}>
                <Image src={image.url} alt={image.caption} />
              </Carousel.Slide>
            ))}
          </Carousel>
        </Card>
      </Grid.Col>
    </Grid>
  );
};
