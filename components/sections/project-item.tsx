import { Carousel } from '@mantine/carousel';
import {
  Card,
  createStyles,
  Grid,
  Image,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { IconArrowUpRight } from '@tabler/icons-react';
import Link from 'next/link';
import { ProjectDescription } from '../../utils';
import { BadgeList } from '../badge-list';

const useStyles = createStyles((theme) => ({
  carouselCard: {
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
      <Grid.Col sm={7}>
        <Card withBorder radius="sm" p={0} className={classes.carouselCard}>
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
      <Grid.Col sm={5}>
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
          <Stack spacing="xs" mt="md">
            <BadgeList items={techStack.frontend} />
            <BadgeList items={techStack.backend} />
          </Stack>
        </Card>
      </Grid.Col>
    </Grid>
  );
};
