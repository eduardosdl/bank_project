import { resolve } from 'node:path';
import { Config } from 'jest';
import { pathsToModuleNameMapper } from 'ts-jest';

const root = resolve(__dirname);

const config: Config = {
  rootDir: root,
  displayName: 'root-test',
  moduleFileExtensions: ['js', 'json', 'ts'],
  testMatch: ['<rootDir>/src/**/*.spec.ts'],
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  collectCoverageFrom: ['**/*.(t|j)s'],
  coverageDirectory: '../coverage',
  testEnvironment: 'node',
  moduleNameMapper: pathsToModuleNameMapper(
    {
      '@src/*': ['./src/*'],
      '@test/*': ['./test/*'],
    },
    {
      prefix: '<rootDir>/',
    }
  ),
};

export default config;
