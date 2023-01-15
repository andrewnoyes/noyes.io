export const siteConfig = {
  name: 'Andrew Noyes',
  mainLinks: [
    { name: 'About', href: '/#about' },
    { name: 'Experience', href: '/#experience' },
    { name: 'Projects', href: '/#projects' },
  ],
};

export const getPageTitle = (pages: string[]) => {
  return [...pages, siteConfig.name].join(' | ');
};
