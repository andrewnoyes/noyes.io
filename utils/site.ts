export const siteConfig = {
  name: 'Andrew Noyes',
  description:
    'Andrew Noyes is a software engineer specializing in full-stack application development.',
  image: '/retrobot.jpeg',
  mainLinks: [
    { name: 'About', href: '/#about' },
    { name: 'Experience', href: '/#experience' },
    { name: 'Projects', href: '/#projects' },
  ],
};

export const getPageTitle = (pages: string[]) => {
  return [...pages, siteConfig.name].join(' | ');
};
