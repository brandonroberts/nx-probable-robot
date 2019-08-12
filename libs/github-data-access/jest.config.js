module.exports = {
  name: 'github-data-access',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/github-data-access',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
