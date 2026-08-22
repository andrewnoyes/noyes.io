import {
  Avatar,
  Divider,
  Grid,
  Group,
  Paper,
  PaperProps,
  Tabs,
  Title,
} from '@mantine/core';
import { ReactNode } from 'react';

const Panel = ({ children, ...rest }: { children: ReactNode } & PaperProps) => {
  return (
    <Paper
      withBorder
      sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      {...rest}
    >
      {children}
    </Paper>
  );
};

export const FroomDemoLayout = () => {
  return (
    <Paper m="sm" withBorder>
      <Group position="center" py="xs">
        <Avatar src="/dog-bandana.webp" alt="matapacos" size="md" />
        <Title order={2}>my froom</Title>
      </Group>
      <Divider />
      <Grid grow p="md">
        <Grid.Col span={4}>
          <Panel h={105}>feed</Panel>
        </Grid.Col>
        <Grid.Col span={8}>
          <Panel h={105}>calendar</Panel>
        </Grid.Col>
        <Grid.Col span={6}>
          <Panel h={82}>wagers</Panel>
        </Grid.Col>
        <Grid.Col span={6}>
          <Panel p={0}>
            <Tabs defaultValue="movies" sx={{ width: '100%' }}>
              <Tabs.List>
                <Tabs.Tab value="movies">Movies</Tabs.Tab>
                <Tabs.Tab value="books">Books</Tabs.Tab>
              </Tabs.List>
              <Tabs.Panel value="movies" p="xs">
                Movies tab
              </Tabs.Panel>
              <Tabs.Panel value="books" p="xs">
                Books tab
              </Tabs.Panel>
            </Tabs>
          </Panel>
        </Grid.Col>
      </Grid>
    </Paper>
  );
};
