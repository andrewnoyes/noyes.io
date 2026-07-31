import { ActionIcon, ColorScheme } from '@mantine/core';
import { IconLamp, IconLampOff } from '@tabler/icons-react';

export interface ColorSchemeToggleProps {
  colorScheme: ColorScheme;
  onToggle: () => void;
}

export const ColorSchemeToggle = (props: ColorSchemeToggleProps) => {
  const { colorScheme, onToggle } = props;

  const title = colorScheme === 'dark' ? 'Lamp on' : 'Lamp off';

  return (
    <ActionIcon
      onClick={onToggle}
      title={title}
      aria-label={title}
      size="lg"
      color={colorScheme === 'dark' ? undefined : 'dark'}
      variant="transparent"
    >
      {colorScheme === 'dark' ? <IconLamp /> : <IconLampOff />}
    </ActionIcon>
  );
};
