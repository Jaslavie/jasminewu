export const ROUTES = {
  home: "/",
  projects: "/projects",
  curations: "/curations",
  library: "/library",
  writing: "/writing",
  writingOld: "/writing-old",
} as const;

export const NAV_ITEMS = [
  { href: ROUTES.home, label: "Home" },
  { href: ROUTES.projects, label: "Projects" },
  { href: ROUTES.writing, label: "Writing" },
  { href: ROUTES.library, label: "Library" },
  { href: ROUTES.curations, label: "Curations" },
] as const;

export function isNavActive(pathname: string, href: string): boolean {
  if (href === ROUTES.home) return pathname === ROUTES.home;
  if (href === ROUTES.projects) {
    return pathname.startsWith(`${ROUTES.projects}/`) || pathname === ROUTES.projects;
  }
  if (href === ROUTES.writing) {
    return pathname.startsWith(`${ROUTES.writing}/`) || pathname === ROUTES.writing;
  }
  if (href === ROUTES.library) {
    return pathname.startsWith(`${ROUTES.library}/`) || pathname === ROUTES.library;
  }
  return pathname === href;
}

/** Pages that ship their own nav/footer and should hide global chrome. */
export function usesIntegratedChrome(pathname: string): boolean {
  if (pathname === ROUTES.home) return true;
  if (pathname === ROUTES.projects || pathname === ROUTES.curations || pathname === ROUTES.library) return true;
  if (pathname.startsWith(`${ROUTES.library}/`)) return true;
  if (pathname.startsWith(`${ROUTES.writing}/`) || pathname === ROUTES.writing) {
    return true;
  }
  if (
    pathname === ROUTES.writingOld ||
    pathname.startsWith(`${ROUTES.writingOld}/`)
  ) {
    return true;
  }
  if (pathname.startsWith(`${ROUTES.projects}/`)) return true;
  return false;
}

export function shouldHideMobileNav(pathname: string): boolean {
  if (pathname.startsWith(`${ROUTES.writing}/`)) return true;
  if (pathname.startsWith(`${ROUTES.writingOld}/`)) return true;
  if (pathname.startsWith(`${ROUTES.projects}/`)) return true;
  return false;
}

export function shouldShowExternalLinkIcons(pathname: string): boolean {
  return pathname !== ROUTES.home && pathname !== ROUTES.curations && pathname !== ROUTES.library;
}
