module.exports = {
  name: 'gh-viewer',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/gh-viewer',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
