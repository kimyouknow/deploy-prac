module.exports = {
  transform: {
    '\\.[jt]sx?$': 'ts-jest',
  },
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'json'],
  roots: ['<rootDir>'],
  moduleNameMapper: {
    '~src/(.*)': '<rootDir>/src/$1',
    '~test/(.*)': '<rootDir>/test/$1',
  },
};
