export default {
  projects: ['<rootDir>/packages/*'],
  coverageDirectory: '<rootDir>/coverage',
  clearMocks: true,
  coverageProvider: 'v8',
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 80,
      functions: 80,
      lines: 80,
    },
  },
  setupFilesAfterEnv: [
    './packages/shared/domain/tests/validations.ts',
    './packages/shared/domain/tests/jest.ts',
  ],
  testRegex: '.*\\..*spec\\.ts$',
  transform: {
    '^.+\\.ts?$': ['@swc/jest'],
  },
  testTimeout: 30000,
};
