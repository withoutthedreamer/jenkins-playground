module.exports = {
  projects: ['<rootDir>/apps/playground'],
  reporters: [
    'default',
    [
      'jest-junit',
      { outputDirectory: 'reports', outputName: 'angular.tests.xml' },
    ],
  ],
};
