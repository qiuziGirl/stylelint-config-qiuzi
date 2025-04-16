# stylelint-config-qiuzi

Default stylelint config used by qiuzi.

## Installation

```bash
npm install stylelint-config-qiuzi --save-dev
# Or with yarn:
yarn add stylelint-config-qiuzi --dev
```

## Compatibility

This config is compatible with Stylelint v16.2.1 and above.

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
