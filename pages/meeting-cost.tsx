import {
  Button,
  Code,
  Container,
  Divider,
  Group,
  List,
  NumberInput,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import Head from 'next/head';
import { useState } from 'react';
import { useCountupTimer } from '../hooks';
import { getPageTitle } from '../utils';

const formatSeconds = (secs: number) => {
  const pad = (n: number) => (n < 10 ? `0${n}` : n);

  const h = Math.floor(secs / 3600);
  const m = Math.floor(secs / 60) - h * 60;
  const s = Math.floor(secs - h * 3600 - m * 60);

  return `${pad(h)}:${pad(m)}:${pad(s)}`;
};

const moneyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const WORK_HOURS_IN_YEAR = 2000; // 8 hrs / day * 50 weeks per year (-2 weeks PTO)
const WORK_SECS_IN_YEAR = WORK_HOURS_IN_YEAR * 60 * 60;

const MeetingCost = () => {
  const [numParticipants, setNumParticipants] = useState(1);
  const [averageSalary, setAverageSalary] = useState(0);

  const { started, toggleStarted, seconds, resetAll } = useCountupTimer();

  const salaryTotal = numParticipants * averageSalary;
  const costPerSec = salaryTotal / WORK_SECS_IN_YEAR;
  const currentCost = costPerSec * seconds;

  const formattedCost = moneyFormatter.format(currentCost);
  const formattedTime = formatSeconds(seconds);

  const pageTitle = getPageTitle([
    `${formattedCost} - ${formattedTime}`,
    '🤑 Meeting cost',
  ]);

  const canStart = numParticipants > 0 && averageSalary > 0;

  const renderDetails = () => {
    if (!canStart) {
      return null;
    }

    const formattedSalaryTotal = moneyFormatter.format(salaryTotal);
    const formattedCostPerSec = moneyFormatter.format(costPerSec);

    return (
      <List mt="lg">
        <List.Item>
          Salary total:{' '}
          <Code>
            {formattedSalaryTotal} = {numParticipants}{' '}
            {numParticipants === 1 ? 'person' : 'people'} *{' '}
            {moneyFormatter.format(averageSalary)} average
          </Code>
        </List.Item>
        <List.Item>
          Cost per second:{' '}
          <Code>
            {formattedCostPerSec} = ${formattedSalaryTotal} total /{' '}
            {WORK_SECS_IN_YEAR} work secs per year
          </Code>
        </List.Item>
        <List.Item>
          A 15 minute meeting would cost:{' '}
          <Code>{moneyFormatter.format(costPerSec * 15 * 60)}</Code>
        </List.Item>
        <List.Item>
          A 30 minute meeting would cost:{' '}
          <Code>{moneyFormatter.format(costPerSec * 30 * 60)}</Code>
        </List.Item>
      </List>
    );
  };

  return (
    <Container p="md" size="sm">
      <Head>
        <title>{pageTitle}</title>
        <meta property="og:title" content={pageTitle} />
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
      <Stack mt="lg" align="center">
        <Title>
          {formattedCost} - {formattedTime}
        </Title>
        <Group>
          <Button
            disabled={!canStart}
            size="lg"
            onClick={toggleStarted}
            color={started ? 'yellow' : 'green'}
          >
            {started ? 'Pause' : 'Start'}
          </Button>
          <Button size="lg" color="red" onClick={resetAll}>
            Reset
          </Button>
        </Group>
      </Stack>
      <Group mt="lg" position="center">
        <NumberInput
          label="Number of people"
          disabled={started}
          size="md"
          min={1}
          value={numParticipants}
          onChange={(val) => {
            if (val) {
              setNumParticipants(val);
            }
          }}
        />
        <NumberInput
          label="Average yearly salary"
          disabled={started}
          size="md"
          min={1}
          value={averageSalary}
          onChange={(val) => {
            if (val) {
              setAverageSalary(val);
            }
          }}
          parser={(value) => value?.replace(/\$\s?|(,*)/g, '')}
          formatter={(value) =>
            value !== undefined && !Number.isNaN(parseFloat(value))
              ? `$ ${value}`.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
              : '$ '
          }
        />
      </Group>
      <Container size="xs">
        <Text mt="sm" align="center" size="sm">
          Assumes 2000 hours worked a year:{' '}
          <Code>40 hrs * (52 weeks - 2 weeks for PTO)</Code>
        </Text>
        {renderDetails()}
      </Container>
    </Container>
  );
};
export default MeetingCost;
