/**
 * Scroll to a section on the current page, or navigate to another route with a hash.
 */
export function goToSection(navigate, location, { pathname, sectionId }) {
  const onTargetPage =
    location.pathname === pathname ||
    (pathname === '/' && location.pathname === '/teen');

  if (onTargetPage) {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    return;
  }

  navigate({ pathname, hash: `#${sectionId}` });
}
