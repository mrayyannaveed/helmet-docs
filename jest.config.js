// jest.config.js
module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\.(js|jsx|ts|tsx)$': 'babel-jest', // Use babel-jest for JS, JSX, TS, TSX
    '^.+\.css$': '<rootDir>/jest/cssTransform.js', // Handle CSS imports
    '^(?!.*\.(js|jsx|ts|tsx|css|json)$)': '<rootDir>/jest/fileTransform.js', // Handle other file types (images, etc.)
  },
  transformIgnorePatterns: [
    'node_modules/(?!(docusaurus|@docusaurus)/)', // Don't ignore Docusaurus modules
  ],
  moduleNameMapper: {
    '^@site/(.*)$': '<rootDir>/$1', // Map @site alias
    '^@generated/(.*)$': '<rootDir>/.docusaurus/$1', // Map @generated alias
    '^@docusaurus/(.*)$': '<rootDir>/node_modules/@docusaurus/$1', // Ensure Docusaurus modules are correctly mapped
  },
  setupFilesAfterEnv: [
    '<rootDir>/jest/setupTests.js', // For @testing-library/jest-dom extensions
  ],
  testMatch: [
    '<rootDir>/src/**/*.test.{js,jsx,ts,tsx}',
    '<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}',
  ],
};
