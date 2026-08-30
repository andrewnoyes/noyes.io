import { createStyles, Group, Image, ImageProps, Text } from '@mantine/core';
import { ReactNode } from 'react';

export const useBadgeTagStyles = createStyles((theme) => ({
  badge: {
    border: '1px solid',
    borderColor: theme.colors.violet,
    paddingLeft: theme.spacing.xs,
    paddingRight: theme.spacing.xs,
    borderRadius: theme.radius.sm,
    height: 50,
    width: 150,
    transition: 'border ease 200ms',
    '&:hover': {
      borderColor: theme.colors.yellow,
    },
  },
}));

export interface BadgeTagProps {
  src: string;
  alt: string;
  content: ReactNode;
  imageProps?: ImageProps;
}

export const BadgeTag = (props: BadgeTagProps) => {
  const { src, alt, content, imageProps } = props;
  const { classes } = useBadgeTagStyles();

  return (
    <Group spacing="xs" noWrap className={classes.badge}>
      <Image src={src} alt={alt} height={32} width={32} {...imageProps} />
      <Text size="xs" sx={{ lineHeight: 1.3 }}>
        {content}
      </Text>
    </Group>
  );
};
