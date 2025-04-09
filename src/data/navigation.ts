export type NavItem = {
  name: string;
  path: string;
};

export const NAV_ITEMS: NavItem[] = [
  { name: "Home", path: "/" },
  { name: "My Account", path: "/account" },
  { name: "About", path: "/about" },
  { name: "Settings", path: "/settings" },
];
