import {
  Box,
  Group,
  Skeleton,
  Stack,
  Text,
  Tooltip,
  UnstyledButton,
} from '@mantine/core';
import { useState } from 'react';
import { useFetchCurrentTemp } from '../../hooks';
import { useBadgeTagStyles } from './badge-tag';

export const SlcTempBadgeTag = () => {
  const { currentTemp, fetching } = useFetchCurrentTemp();
  const { classes } = useBadgeTagStyles();
  const [celsius, setCelsius] = useState(false);

  if (fetching) {
    return (
      <Stack className={classes.badge} justify="center">
        <Skeleton height={35} />
      </Stack>
    );
  }

  const temp = Math.round(
    celsius ? currentTemp.currentCelsius : currentTemp.currentFahrenheit,
  );
  const tempFormatted = `${temp}${celsius ? '℃' : '℉'}`;
  const rainChance = `${currentTemp.precipitationChance}%`;

  return (
    <Tooltip
      label={
        <Stack spacing={0}>
          <Text fw={700}>Salt Lake City, Utah</Text>
          <Text>Temperature: {tempFormatted}</Text>
          <Text>Rain chance: {rainChance}</Text>
          <Text size="xs" c="dimmed">
            (click to toggle units)
          </Text>
        </Stack>
      }
    >
      <UnstyledButton
        onClick={() => {
          setCelsius(!celsius);
        }}
      >
        <Stack className={classes.badge} spacing={0} justify="center">
          <Group align="center" position="center" spacing="sm" noWrap>
            <Text size="sm">
              <Box component="span" role="img" mr={4}>
                🌡️
              </Box>
              {tempFormatted}
            </Text>
            <Text size="sm">
              <Box component="span" role="img" mr={4}>
                💧
              </Box>
              {rainChance}
            </Text>
          </Group>
          <Text size="xs" c="dimmed" align="center">
            SLC, Utah • {new Date(currentTemp.time).toLocaleDateString()}
          </Text>
        </Stack>
      </UnstyledButton>
    </Tooltip>
  );
};
