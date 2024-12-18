export const siteConfig = {
  name: 'Andrew Noyes',
  description:
    'Andrew Noyes is a software engineer specializing in full-stack application development.',
  image: '/dog-bandana.jpeg',
  mainLinks: [
    { name: '#about', href: '/#about' },
    { name: '#experience', href: '/#experience' },
    { name: '#projects', href: '/#projects' },
    { name: '/notes', href: '/notes', scrollToTop: true },
  ],
};

export const getPageTitle = (pages: string[]) => {
  return [...pages, siteConfig.name].join(' | ');
};
