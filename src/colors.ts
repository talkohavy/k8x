const color = (num) => `\x1b[${num}m%s\x1b[0m`;
const wrapIn = (num, str) => `\x1b[${num}m${str}\x1b[0m`;

export const COLORS = {
  black: color(30),
  blink: color(5),
  blue: color(34),
  bright: color(1),
  cyan: color(36),
  green: color(32),
  magneta: color(35),
  red: color(31),
  white: color(37),
  yellow: color(33),
  underscore: (str) => wrapIn(4, str),
};
