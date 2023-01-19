import { Box, Divider, Space, Title } from '@mantine/core';
import { Fragment } from 'react';

export const SectionHeader = ({ title }: { title: string }) => {
  return (
    <Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Title order={2} mr="md">
          {title}
        </Title>
        <Divider
          sx={{ display: 'flex', flexGrow: 1, maxWidth: 300 }}
          variant="dotted"
        />
      </Box>
      <Space h="xl" />
    </Fragment>
  );
};
