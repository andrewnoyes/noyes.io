import { Badge, BadgeProps, Group, MantineNumberSize } from '@mantine/core';

export interface BadgeListProps {
  items: string[];
  badgeProps?: BadgeProps;
  spacing?: MantineNumberSize;
}

export const BadgeList = ({ items, spacing, badgeProps }: BadgeListProps) => {
  return (
    <Group spacing={spacing ?? 'xs'}>
      {items.map((item) => (
        <Badge
          key={item}
          radius="xs"
          size="sm"
          sx={{ fontFamily: 'monospace', textTransform: 'lowercase' }}
          {...badgeProps}
        >
          {item}
        </Badge>
      ))}
    </Group>
  );
};
