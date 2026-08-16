import { ActionIcon, Box, Group, Tooltip } from '@mantine/core';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import { useState } from 'react';
import { FlagVariant, PrideFlag } from './pride-flag';

const ALL_VARIANTS = Object.values(FlagVariant);

export const PrideFlagPicker = ({ width }: { width?: number }) => {
  const [variant, setVariant] = useState<FlagVariant>(FlagVariant.Rainbow);

  const currentIndex = ALL_VARIANTS.indexOf(variant);
  const lastIndex = ALL_VARIANTS.length - 1;

  const nextVariant =
    currentIndex === lastIndex
      ? ALL_VARIANTS[0]
      : ALL_VARIANTS[currentIndex + 1];

  const previousVariant =
    currentIndex === 0
      ? ALL_VARIANTS[lastIndex]
      : ALL_VARIANTS[currentIndex - 1];

  const previousLabel = `${previousVariant} pride flag`;
  const nextLabel = `${nextVariant} pride flag`;

  const handleNextFlag = () => {
    setVariant(nextVariant);
  };

  const handlePreviousFlag = () => {
    setVariant(previousVariant);
  };

  return (
    <Group align="center" position="center" spacing="xl" noWrap>
      <ActionIcon
        aria-label={previousLabel}
        title={previousLabel}
        onClick={handlePreviousFlag}
        size="sm"
      >
        <IconChevronLeft />
      </ActionIcon>
      <Tooltip label={`${variant} pride flag`}>
        <Box>
          <PrideFlag width={width ?? 150} variant={variant} />
        </Box>
      </Tooltip>
      <ActionIcon
        aria-label={nextLabel}
        title={nextLabel}
        onClick={handleNextFlag}
        size="sm"
      >
        <IconChevronRight />
      </ActionIcon>
    </Group>
  );
};
