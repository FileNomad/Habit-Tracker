export type NavItem = {
  name: string;
  path: string;
};

export const NAV_ITEMS: NavItem[] = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
  { name: 'My Account', path: '/account' },
  { name: 'Settings', path: '/settings' },
];
