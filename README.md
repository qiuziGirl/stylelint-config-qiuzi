# stylelint-config-qiuzi

Default stylelint config used by qiuzi.

## Development

This repository ships a project-local [`.yarnrc`](./.yarnrc) that points Yarn 1.x to the [npmmirror.com](https://npmmirror.com) registry (formerly Taobao npm mirror) for faster installs in mainland China. The [`yarn.lock`](./yarn.lock) `resolved` tarball URLs use the same host.

## Installation

```bash
npm install stylelint-config-qiuzi --save-dev
# Or with yarn:
yarn add stylelint-config-qiuzi --dev
```

## Compatibility

This config is compatible with Stylelint v17.0.0 and above, and requires Node.js v20.19.0 or higher.

## Usage

We provide a config for both CSS and SCSS. You can choose which one you would like to extend in your configuration:

### CSS

```json
{
  "extends": "stylelint-config-qiuzi/css"
}
```

### SCSS

```json
{
  "extends": "stylelint-config-qiuzi/scss"
}
```

### ESM (Modern JavaScript)

We also provide an ESM config file that you can use with modern JavaScript:

```js
// stylelint.config.mjs
import qiuziConfig from "stylelint-config-qiuzi";

export default {
  extends: [qiuziConfig],
  // Your custom rules here
};
```
