import {
  ActionIcon,
  Button,
  Container,
  Group,
  NumberInput,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { IconX } from '@tabler/icons';
import Head from 'next/head';
import { useEffect, useRef, useState } from 'react';
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

const WORK_HOURS_IN_YEAR = 2000; // 8 hrs / day, 50 weeks per year (-2 weeks PTO)
const WORK_SECS_IN_YEAR = WORK_HOURS_IN_YEAR * 60 * 60;

const ParticipantForm = ({ onAdd }: { onAdd: (salary: number) => void }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleAddSalary = () => {
    const salary = inputRef?.current?.value;
    if (!salary) {
      return;
    }

    const asInt = parseInt(salary.replace(/\D/g, ''));
    if (isNaN(asInt)) {
      return;
    }

    // mantine v5 NumberInput is bugged when used as a controlled component,
    // value won't reset! and modifying using its ref would not update the value
    // unless i wrapped in a short setTimeout?! NOTE: tested latest version of
    // mantine (v7) and the NumberInput works as expected, so remove this if i
    // ever move site to an updated mantine version!
    setTimeout(() => {
      if (inputRef?.current?.value) {
        inputRef.current.value = '';
      }
    }, 10);

    onAdd(asInt);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleAddSalary();
      }}
    >
      <Group align="flex-end">
        <NumberInput
          ref={inputRef}
          required
          hideControls
          noClampOnBlur
          style={{ flexGrow: 1 }}
          label="Salary"
          description={`Enter each participant's salary`}
          placeholder="Dollars per year"
          parser={(value) => value?.replace(/\$\s?|(,*)/g, '')}
          formatter={(value) =>
            value !== undefined && !Number.isNaN(parseFloat(value))
              ? `$ ${value}`.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
              : '$ '
          }
        />
        <Button variant="filled" type="submit">
          Add
        </Button>
      </Group>
    </form>
  );
};

const MeetingCost = () => {
  const [salaries, setSalaries] = useState<number[]>([]);
  const [ticks, setTicks] = useState(0);
  const [started, setStarted] = useState(false);

  const salaryTotal = salaries.reduce((acc, sal) => acc + sal, 0);
  const costPerSec = salaryTotal / WORK_SECS_IN_YEAR;
  const currentCost = costPerSec * ticks;
  const formattedCost = moneyFormatter.format(currentCost);

  const canStart = salaries.length > 0;

  useEffect(() => {
    const intervalId = started
      ? setInterval(() => {
          setTicks(ticks + 1);
        }, 1000)
      : null;

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [started, ticks]);

  const handleAddSalary = (salary: number) => {
    if (salary > 0) {
      setSalaries([...salaries, salary]);
    }
  };

  const handleRemoveSalary = (index: number) => {
    const updated = [...salaries];
    updated.splice(index, 1);
    setSalaries(updated);
  };

  const handleResetAll = () => {
    setStarted(false);
    setSalaries([]);
    setTicks(0);
  };

  const pageTitle = getPageTitle([formattedCost, 'Meeting cost']);

  return (
    <Container p="md" size="sm">
      <Head>
        <title>{pageTitle}</title>
        <meta property="og:title" content={pageTitle} />
      </Head>
      <Stack align="center">
        <Title>Meeting cost timer</Title>
      </Stack>
      <Stack mt="lg" align="center">
        <Group>
          <Title>{formatSeconds(ticks)}</Title>
          <Title>{formattedCost}</Title>
        </Group>
        <Group>
          <Button
            disabled={!canStart}
            size="lg"
            onClick={() => setStarted(!started)}
            color={started ? 'yellow' : 'green'}
          >
            {started ? 'Pause' : 'Start'}
          </Button>
          <Button size="lg" color="red" onClick={handleResetAll}>
            Reset
          </Button>
        </Group>
      </Stack>

      <Stack mt="lg">
        <ParticipantForm onAdd={handleAddSalary} />
      </Stack>
      <Stack spacing="xs" mt="sm">
        {salaries.map((sal, index) => (
          <Group key={[sal, index].join('-')}>
            <ActionIcon
              title="remove salary"
              size="xs"
              variant="subtle"
              color="red"
              // disabled={started}
              onClick={() => {
                handleRemoveSalary(index);
              }}
            >
              <IconX />
            </ActionIcon>
            <Text>{moneyFormatter.format(sal)}</Text>
          </Group>
        ))}
      </Stack>
    </Container>
  );
};
export default MeetingCost;
