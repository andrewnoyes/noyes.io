import { Box, createStyles, keyframes } from '@mantine/core';
import { generateGradientString } from '../utils';

export enum FlagVariant {
  Rainbow = 'Rainbow',
  Trans = 'Trans',
  Lesbian = 'Lesbian',
  Pan = 'Pan',
  Ace = 'Ace',
  Nonbinary = 'Nonbinary',
  Bi = 'Bi',
}

const COLORS: Record<FlagVariant, string[]> = {
  [FlagVariant.Trans]: [
    'hsl(200deg 85% 70%)',
    'hsl(350deg 85% 85%)',
    'hsl(0deg 0% 100%)',
    'hsl(350deg 85% 85%)',
    'hsl(200deg 85% 70%)',
  ],
  [FlagVariant.Lesbian]: [
    '#D52D00',
    '#EF7627',
    '#FF9A56',
    '#FFFFFF',
    '#D162A4',
    '#B55690',
    '#A30262',
  ],
  [FlagVariant.Rainbow]: [
    'hsl(0deg 0% 18%)',
    'hsl(30deg 60% 30%)',
    'hsl(0deg 90% 55%)',
    'hsl(30deg 95% 65%)',
    'hsl(55deg 90% 65%)',
    'hsl(100deg 65% 45%)',
    'hsl(220deg 80% 55%)',
    'hsl(265deg 80% 50%)',
  ],
  [FlagVariant.Pan]: [
    'hsl(331deg 100% 55%)',
    'hsl(50deg 100% 50%)',
    'hsl(200deg 100% 55%)',
  ],
  [FlagVariant.Ace]: ['#000000', '#A3A3A3', '#FFFFFF', '#800080'],
  [FlagVariant.Nonbinary]: ['#FCF434', '#FFFFFF', '#9C59D1', '#2C2C2C'],
  [FlagVariant.Bi]: ['#D60270', '#9B4F96', '#0038A8'],
};

const oscillate = keyframes({
  from: { transform: 'translateY(8px)' },
  to: { transform: ' translateY(-8px)' },
});

const useStyles = createStyles(() => ({
  flag: {
    display: 'flex',
    aspectRatio: '3 / 2',
  },
  column: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    animation: `${oscillate} 500ms alternate infinite ease-in-out both`,
    ['&:first-of-type']: {
      borderTopLeftRadius: 8,
      borderBottomLeftRadius: 8,
    },
    ['&:last-child']: {
      borderTopRightRadius: 8,
      borderBottomRightRadius: 8,
    },
  },
}));

export interface PrideFlagProps {
  columns?: number;
  delay?: number;
  variant?: FlagVariant;
  width?: number;
}

// pulled from: https://www.joshwcomeau.com/animation/pride-flags/
export const PrideFlag = (props: PrideFlagProps) => {
  const { classes } = useStyles();

  const columns = props.columns ?? 10;
  const delay = props.delay ?? 100;
  const variant = props.variant ?? FlagVariant.Rainbow;
  const width = props.width ?? 200;

  const colors = COLORS[variant];
  const friendlyWidth = Math.round(width / columns) * columns;
  const firstColumnDelay = columns * delay * -1;

  return (
    <Box className={classes.flag} sx={{ width: friendlyWidth }}>
      {Array.from({ length: columns }).map((_, index) => (
        <Box
          key={index}
          className={classes.column}
          sx={{
            background: generateGradientString(colors),
            animationDelay: `${firstColumnDelay + index * delay}ms`,
          }}
        />
      ))}
    </Box>
  );
};
