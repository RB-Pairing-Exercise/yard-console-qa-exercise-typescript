/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
  testEnvironment: "node",
  transform: {
    "^.+.tsx?$": ["ts-jest",{}],
  },
  verbose: true,
  collectCoverage: true,
  modulePathIgnorePatterns: ['<rootDir>/build/']
};