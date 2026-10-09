import { Group, GroupProps } from '@mantine/core';
import { ExternalLink } from './external-link';

export const ButtonWallGroup = (props: GroupProps) => {
  return (
    <Group spacing="xs" {...props}>
      <ExternalLink href="https://noyes.io">
        <img src="/buttons/androo-button.png" alt="androos 88x31 button" />
      </ExternalLink>
      <ExternalLink href="https://april.nekoweb.org/">
        <img src="/buttons/amwlight.png" alt="Aprils 88x31 button" />
      </ExternalLink>
      <ExternalLink href="https://nostalgic.neocities.org">
        <img src="/buttons/key_nostalgic.gif" alt="nostalgics button" />
      </ExternalLink>
      <ExternalLink href="https://sdomi.pl/">
        <img
          src="https://sdomi.pl/img/button.bmp"
          alt="An 88x31 button. Witch hat on the left, text 'sdomi' on the right. The background is procedurally generated every 30 or so seconds."
        />
      </ExternalLink>
      <ExternalLink href="https://88x31.datakra.sh">
        <img
          src="https://88x31.datakra.sh/datakrash_88x31buttongenerator.gif"
          alt="88x31 Button Generator by Datakrash"
        />
      </ExternalLink>
      <ExternalLink href="https://harmless.monster">
        <img
          src="https://harmless.monster/images/button.png"
          alt="a lovely harmless monster"
        />
      </ExternalLink>
      <ExternalLink href="https://adryd.com/">
        <img src="https://adryd.com/static/buttons/adryd.png" alt="adryd" />
      </ExternalLink>
      <ExternalLink href="https://app.copdb.org">
        <img
          src="/buttons/copdb-button.png"
          alt="CopDB - community powered police database"
        />
      </ExternalLink>
      <img src="/buttons/linux-button.png" alt="i linux uwu" />
      <img src="/buttons/be-crime-do-gay.png" alt="be crime do gay" />
      <img src="/buttons/firefoxnow.gif" alt="firefox now!" />
      <ExternalLink href="https://oat.zone">
        <img src="/buttons/oatzone.gif" alt="oat.zone" />
      </ExternalLink>
      <ExternalLink href="https://maia.crimew.gay/">
        <img src="/buttons/maia.crimew.gay.png" alt="maia crimew" />
      </ExternalLink>
    </Group>
  );
};
