import { Paper, Stack } from '@mantine/core';
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
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <PrideFlagPicker width={100} />
        <Stack spacing="xs" mt="lg">
          <MeBadgeTag />
          <CopDbBadgeTag />
        </Stack>
      </Paper>
    </Stack>
  );
}
