module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  transform: {
    '^.+\\.vue$': 'vue-jest'
  },
  modulePathIgnorePatterns: [
    "src/main.ts",
    "src/registerServiceWorker.ts"
  ],
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{ts,vue}", 
    "!**/node_modules/**"
  ]
}
