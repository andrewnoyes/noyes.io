export const siteConfig = {
  name: 'androo',
  description: `I love the chaos of a human mind trying to explain itself to another human mind, and I'm also a software engineer 😛.`,
  image: '/matapacos.webp',
  mainLinks: [
    { name: '#about', href: '/#about' },
    { name: '#xp', href: '/#experience' },
    { name: '#projects', href: '/#projects' },
    { name: '/notes', href: '/notes', scrollToTop: true },
    { name: '/now', href: '/now', scrollToTop: true },
  ],
};

export const getPageTitle = (pages: string[]) => {
  return [...pages, siteConfig.name]
    .filter(Boolean)
    .map((title) => title.toLowerCase())
    .join(' • ');
};
