// matches on one or more, so the `.replace` only inserts a single '-'
const nonWordOrWhitespaceRegex = /(\W|\s)+/g;

export const slugify = (value: string) =>
  value
    .toLowerCase()
    // replacing with a space and .trim prior to the delimiter so that any
    // leading/trailing special characters are stripped off
    .replace(nonWordOrWhitespaceRegex, ' ')
    .trim()
    .replaceAll(' ', '-');
