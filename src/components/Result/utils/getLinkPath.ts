export const getLinkPath = (link: string): string => {
  return link.split(/[^/]\/[^/]/).join(' › ');
};
