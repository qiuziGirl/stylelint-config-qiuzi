export default {
  extends: ['./css/index.js'],
  overrides: [
    {
      files: ['**/*.scss'],
      extends: ['./scss/index.js']
    }
  ]
};
