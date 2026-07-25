import { ExternalLink } from '../external-link';
import { BadgeTag } from './badge-tag';

export const CopDbBadgeTag = () => {
  return (
    <ExternalLink href="https://app.copdb.org" sx={{ color: 'inherit' }}>
      <BadgeTag
        src="/pig-glasses.png"
        alt="cop pig with sunglasses."
        content={
          <>
            report cops at <br />
            <strong>copdb.org</strong>
          </>
        }
      />
    </ExternalLink>
  );
};
