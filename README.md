# eslint-config-viralize-react

Eslint rules to enforce Viralize standards and best practices during development of react project in Viralize

## Install

1. Install the correct versions of each package, which are listed by the command:

  ```sh
  npm info "eslint-config-viralize-react@latest" peerDependencies
  ```

  If using **npm 5+**, use this shortcut

  ```sh
  npx install-peerdeps --dev eslint-config-viralize-react
  ```

  If using **npm < 5**, Linux/OSX users can run

  ```sh
  (
    export PKG=eslint-config-viralize-react;
    npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
  )
  ```

  If using **npm < 5**, Windows users can either install all the peer dependencies manually, or use the [install-peerdeps](https://github.com/nathanhleung/install-peerdeps) cli tool.

  ```sh
  npm install -g install-peerdeps
  install-peerdeps --dev eslint-config-viralize-react
  ```

2. Add `"extends": "viralize-react"` to your .eslintrc.
