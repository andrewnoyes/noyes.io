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
                src="/dog-bandana.webp"
                alt="Andrew Noyes"
                height={200}
                width={200}
                imageProps={{ loading: 'lazy' }}
              />
            </Card>
          </Grid.Col>
          <Grid.Col sm={8}>
            <Text>
              {`Hello! I'm Andrew and this is my site. Right now, it is primarily used as a portfolio site, 
              but I plan to build out functionality for writing and publishing my notes, code snippets, and whatever else comes to mind.
              For my professional experience, I'm adept at (and enjoy!) building out features from database schema all the way to user interaction.
              My main areas of focus are real-time applications (WebSockets <3), responsive and accessible front-ends, and performant back-end APIs
              and services.`}
            </Text>
            <Space h="md" />
            <Text>{`Some technologies I've been working with recently (in no particluar order):`}</Text>
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
                <List.Item>ASP.NET Core</List.Item>
                <List.Item>C#</List.Item>
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
              <List
                size="sm"
                spacing="sm"
                sx={{ fontFamily: 'monospace' }}
                icon={
                  <IconChevronRight size={14} color={theme.colors.blue[7]} />
                }
              >
                <List.Item>Docker</List.Item>
                <List.Item>PostgreSQL</List.Item>
                <List.Item>Redis</List.Item>
              </List>
            </Group>
          </Grid.Col>
        </Grid>
        <Image
          src="/desk-setup.webp"
          alt="Desk setup"
          imageProps={{ loading: 'lazy' }}
          mt={100}
          caption="My desk setup in our home office. I use a ThinkPad X1 running PopOS!"
        />
      </Container>
    </section>
  );
};
