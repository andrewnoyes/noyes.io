import { Container, Divider, Stack, Title } from '@mantine/core';
import Head from 'next/head';
import { MeetingCostTimer } from '../components';
import { getPageTitle } from '../utils';

const MeetingCost = () => {
  const pageTitle = getPageTitle(['🤑 meeting cost']);

  return (
    <Container p="md" size="sm">
      <Head>
        <title>{pageTitle}</title>
        <meta property="og:title" content={pageTitle} key="title" />
      </Head>
      <Stack align="center">
        <Title>
          <span role="img" aria-label="money face">
            🤑
          </span>{' '}
          Meeting cost timer
        </Title>
      </Stack>
      <Divider />
      <MeetingCostTimer />
    </Container>
  );
};
export default MeetingCost;
