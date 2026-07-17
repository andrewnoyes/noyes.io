import { Badge, BadgeProps, Group } from '@mantine/core';

export interface BadgeListProps {
  items: string[];
  badgeProps?: BadgeProps;
}

export const BadgeList = ({ items, badgeProps }: BadgeListProps) => {
  return (
    <Group spacing="xs">
      {items.map((item) => (
        <Badge key={item} {...badgeProps}>
          {item}
        </Badge>
      ))}
    </Group>
  );
};
