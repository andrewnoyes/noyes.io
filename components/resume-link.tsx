import Link from 'next/link';

export const ResumeLink = ({ children }: { children: any }) => {
  return (
    <Link
      href="/resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: 'none' }}
    >
      {children}
    </Link>
  );
};
