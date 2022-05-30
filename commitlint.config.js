const commit_cc = require("@commitlint/config-conventional");
module.exports = {
  ...commit_cc,
  rules: {
    "type-enum": [2, "always", ["sell", ...commit_cc.rules["type-enum"][2]]],
  },
};
