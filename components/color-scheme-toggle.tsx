import { ActionIcon, ColorScheme } from '@mantine/core';
import { IconMoon, IconSun } from '@tabler/icons';

export interface ColorSchemeToggleProps {
  colorScheme: ColorScheme;
  onToggle: () => void;
}

export const ColorSchemeToggle = (props: ColorSchemeToggleProps) => {
  const { colorScheme, onToggle } = props;

  return (
    <ActionIcon
      onClick={onToggle}
      title={colorScheme === 'dark' ? 'Light theme' : 'Dark theme'}
    >
      {colorScheme === 'dark' ? <IconSun /> : <IconMoon />}
    </ActionIcon>
  );
};
