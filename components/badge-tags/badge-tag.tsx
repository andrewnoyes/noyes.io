import { createStyles, Group, Image, Text } from '@mantine/core';
import { ReactNode } from 'react';

const useStyles = createStyles((theme) => ({
  badge: {
    border: '1px solid',
    borderColor: theme.colors.violet,
    paddingLeft: theme.spacing.xs,
    paddingRight: theme.spacing.xs,
    borderRadius: theme.radius.sm,
    height: 50,
    width: 150,
  },
}));

export interface BadgeTagProps {
  src: string;
  alt: string;
  content: ReactNode;
}

export const BadgeTag = (props: BadgeTagProps) => {
  const { src, alt, content } = props;
  const { classes } = useStyles();

  return (
    <Group spacing="xs" noWrap className={classes.badge}>
      <Image src={src} alt={alt} height={32} width={32} />
      <Text size="xs" sx={{ lineHeight: 1.3 }}>
        {content}
      </Text>
    </Group>
  );
};
