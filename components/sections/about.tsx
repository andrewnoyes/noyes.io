import {
  Container,
  Grid,
  Group,
  Image,
  List,
  Space,
  Text,
  useMantineTheme,
} from '@mantine/core';
import { IconChevronRight } from '@tabler/icons-react';
import { SectionHeader } from './section-header';

export const About = () => {
  const theme = useMantineTheme();
  const iconColor =
    theme.colorScheme === 'dark'
      ? theme.colors.violet[4]
      : theme.colors.violet[9];

  return (
    <section id="about">
      <Container size="md" sx={{ paddingTop: '10%', paddingBottom: '10%' }}>
        <SectionHeader title="About me" />
        <Grid gutter="lg">
          <Grid.Col sm={4} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Image
              src="/matapacos.webp"
              alt="Andrew Noyes"
              height={200}
              width={200}
              radius="sm"
            />
          </Grid.Col>
          <Grid.Col sm={8}>
            <Text>
              {`Hello! I'm Andrew and this is my site. Right now, it is primarily used as a portfolio site,
                but I plan to build out functionality for my notes, code snippets, and whatever else comes to mind.`}
            </Text>
            <Space h="md" />
            <Text>
              {`For my professional experience, I'm adept at (and enjoy!) building out features from database schema all the way to user interaction.
              My main areas of focus are real-time applications (WebSockets <3), responsive and accessible front-ends, and performant back-end APIs
              and services.`}
            </Text>
            <Space h="md" />
            <Text>{`Some technologies I've been working with recently (in no particular order):`}</Text>
            <Space h="md" />
            <Group spacing="xl">
              <List
                size="sm"
                spacing="sm"
                sx={{ fontFamily: 'monospace' }}
                icon={<IconChevronRight size={14} color={iconColor} />}
              >
                <List.Item>Node.js</List.Item>
                <List.Item>ASP.NET Core</List.Item>
                <List.Item>C#</List.Item>
              </List>
              <List
                size="sm"
                spacing="sm"
                sx={{ fontFamily: 'monospace' }}
                icon={<IconChevronRight size={14} color={iconColor} />}
              >
                <List.Item>TypeScript</List.Item>
                <List.Item>React</List.Item>
                <List.Item>Vue</List.Item>
              </List>
              <List
                size="sm"
                spacing="sm"
                sx={{ fontFamily: 'monospace' }}
                icon={<IconChevronRight size={14} color={iconColor} />}
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
          alt="shitty photo of my desk setup."
          imageProps={{ loading: 'lazy' }}
          mt={100}
          caption="My home desk setup. Currently using a Framework 13 with PopOS! (Domino is the kitty)"
        />
      </Container>
    </section>
  );
};
