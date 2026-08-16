import { Paper, Stack, Text } from '@mantine/core';
import { CopDbBadgeTag, ExternalLink } from '../components';
import { BadgeTag } from '../components/badge-tags/badge-tag';
import { PrideFlagPicker } from '../components/pride-flag-picker';

const MeBadgeTag = () => (
  <ExternalLink href="https://noyes.io" sx={{ color: 'inherit' }}>
    <BadgeTag
      src="/matapacos.webp"
      imageProps={{
        radius: 'sm',
      }}
      alt="androo"
      content={
        <>
          androoo <br />
          <strong>noyes.io</strong>
        </>
      }
    />
  </ExternalLink>
);

const LAST_UPDATED = new Date('08/16/2026');

export default function Webgarden() {
  return (
    <Stack
      sx={(theme) => ({
        height: 250,
        width: 250,
        background: theme.fn.linearGradient(
          85,
          theme.colors.grape[5],
          theme.colors.violet[5],
        ),
      })}
      p={1}
      align="center"
      justify="center"
      className="plant"
    >
      <Paper
        withBorder
        p="sm"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        <Text
          sx={{
            bottom: 14,
            left: 6,
            position: 'absolute',
            textOrientation: 'mixed',
            writingMode: 'vertical-rl',
          }}
          size={11}
          c="dimmed"
        >
          v13.12.0 • {LAST_UPDATED.toLocaleDateString()}
        </Text>
        <PrideFlagPicker width={100} />
        <Stack spacing="xs" mt="lg">
          <MeBadgeTag />
          <CopDbBadgeTag />
        </Stack>
      </Paper>
    </Stack>
  );
}
