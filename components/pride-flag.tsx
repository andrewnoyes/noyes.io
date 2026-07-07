import { createStyles, keyframes } from '@mantine/core';

enum FlagVariant {
  Trans = 'trans',
  Rainbow = 'rainbow',
  RainbowOriginal = 'rainbow-original',
  Pan = 'pan',
}

// TODO: more flags!!!
const COLORS: Record<FlagVariant, string[]> = {
  rainbow: [
    'hsl(0deg 0% 18%)',
    'hsl(30deg 60% 30%)',
    'hsl(0deg 90% 55%)',
    'hsl(30deg 95% 65%)',
    'hsl(55deg 90% 65%)',
    'hsl(100deg 65% 45%)',
    'hsl(220deg 80% 55%)',
    'hsl(265deg 80% 50%)',
  ],
  'rainbow-original': [
    'hsl(0deg 90% 55%)',
    'hsl(30deg 95% 65%)',
    'hsl(55deg 90% 65%)',
    'hsl(100deg 65% 45%)',
    'hsl(220deg 80% 55%)',
    'hsl(265deg 80% 50%)',
  ],
  trans: [
    'hsl(200deg 85% 70%)',
    'hsl(350deg 85% 85%)',
    'hsl(0deg 0% 100%)',
    'hsl(350deg 85% 85%)',
    'hsl(200deg 85% 70%)',
  ],
  pan: ['hsl(331deg 100% 55%)', 'hsl(50deg 100% 50%)', 'hsl(200deg 100% 55%)'],
};

const oscillate = keyframes({
  from: { transform: 'translateY(8px)' },
  to: { transform: ' translateY(-8px)' },
});

const generateGradientString = (colors: string[]) => {
  const numOfColors = colors.length;
  const segmentHeight = 100 / numOfColors;

  const gradientStops = colors.map((color, index) => {
    const from = index * segmentHeight;
    const to = (index + 1) * segmentHeight;

    return `${color} ${from}% ${to}%`;
  });

  return `linear-gradient(to bottom, ${gradientStops.join(', ')})`;
};

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
    <div className={classes.flag} style={{ width: friendlyWidth }}>
      {Array.from({ length: columns }).map((_, index) => (
        <div
          key={index}
          className={classes.column}
          style={{
            background: generateGradientString(colors),
            animationDelay: firstColumnDelay + index * delay + 'ms',
          }}
        />
      ))}
    </div>
  );
};
