module.exports = {
  name: 'user-search',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/user-search',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
