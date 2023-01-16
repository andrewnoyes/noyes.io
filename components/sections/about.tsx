import {
  Card,
  Container,
  Grid,
  Group,
  Image,
  List,
  Space,
  Text,
  useMantineTheme,
} from '@mantine/core';
import { IconChevronRight } from '@tabler/icons';
import { SectionHeader } from './section-header';

export const About = () => {
  const theme = useMantineTheme();

  return (
    <section id="about">
      <Container size="md" sx={{ paddingTop: 100, paddingBottom: 100 }}>
        <SectionHeader title="About Me" />
        <Grid gutter="lg">
          <Grid.Col sm={4} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Card p={0} radius="sm" sx={{ height: 200, width: 200 }}>
              <Image
                src="/androo-min.jpg"
                alt="Andrew Noyes"
                height={200}
                width={200}
              />
            </Card>
          </Grid.Col>
          <Grid.Col sm={8}>
            <Text>
              Hi! My name is Andrew, and I am a full-stack developer based out
              of Salt Lake City, Utah. I love building out features from the
              database schema all the way to what's presented to the user. My
              main areas of focus are real-time systems (WebSockets!),
              responsive and accessible front-ends, and performant back-end APIs
              and services.
            </Text>
            <Space h="md" />
            <Text>Some technologies I've been working with recently:</Text>
            <Space h="md" />
            <Group spacing="xl">
              <List
                size="sm"
                spacing="sm"
                sx={{ fontFamily: 'monospace' }}
                icon={
                  <IconChevronRight size={14} color={theme.colors.blue[7]} />
                }
              >
                <List.Item>Node.js</List.Item>
                <List.Item>.NET Core</List.Item>
                <List.Item>PostgreSQL</List.Item>
              </List>
              <List
                size="sm"
                spacing="sm"
                sx={{ fontFamily: 'monospace' }}
                icon={
                  <IconChevronRight size={14} color={theme.colors.blue[7]} />
                }
              >
                <List.Item>TypeScript</List.Item>
                <List.Item>React</List.Item>
                <List.Item>Vue</List.Item>
              </List>
            </Group>
          </Grid.Col>
        </Grid>
      </Container>
    </section>
  );
};
