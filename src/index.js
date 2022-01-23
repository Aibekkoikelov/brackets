module.exports = function check(str, bracketsConfig) {
  const conf = {};

  for (const item of bracketsConfig) {
    conf[item[0]] = item[1];
  }

  stack = [];

  for (const sym of str) {
    if (sym in conf) {
      const lastStackEl = stack[stack.length - 1];
      if (conf[sym] === sym && sym === lastStackEl) {
        stack.pop();
      } else {
        stack.push(sym);
      }
    } else {
      const lastStackEl = stack[stack.length - 1];
      const close = conf[lastStackEl];

      if (close === sym) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.length === 0;
};


