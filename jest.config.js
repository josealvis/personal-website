module.exports = {
  globals: {},
  testEnvironment: 'jsdom',
    transform: {
      "^.+\\.vue$": "vue-jest",
      "^.+\\js$": "babel-jest"
    },
    moduleFileExtensions: ['vue', 'js', 'json', 'jsx', 'ts', 'tsx', 'node'],
    moduleNameMapper: {
      ".+\\.(css|styl|less|sass|scss|png|jpg|svg|ttf|woff|woff2|gif)$": "jest-transform-stub"
    }
  }

 