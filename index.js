module.exports = {
  extends: [
    'plugin:react/recommended',
    'viralize-es6'
  ].map(require.resolve),
  rules: {
    "jsx-a11y/label-has-for": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "react/jsx-filename-extension": "off"
  }
};
