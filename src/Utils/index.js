// utility functions

export const slugify = (str) => {
  str = str.trim();
  // makes tring lower cased
  str = str.toLowerCase();
  str = str.split(" ");
  str = str.join("-");
  return str;
};
