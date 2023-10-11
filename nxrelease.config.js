module.exports = {
  changelog: true,
  git: true,
  npm: true,
  github: true,
  repositoryUrl: 'https://github.com/brunos3d/universe',
  outputPath: 'dist/packages/${PROJECT_NAME}',
  tagFormat: '${PROJECT_NAME}-v${VERSION}',
  commitMessage:
    'chore(release): Release ${PROJECT_NAME} v${nextRelease.version} [skip ci]',
  branches: [
    {
      name: 'main',
      channel: 'latest',
    },
    {
      name: 'next',
      channel: 'next',
      prerelease: 'rc',
    },
    {
      name: 'develop',
      channel: 'alpha',
      prerelease: 'alpha',
    },
  ],
  parserOpts: {
    mergePattern: /^Merged in (.*) \(pull request #(\d+)\)$/,
    mergeCorrespondence: ['branch', 'id'],
  },
  releaseRules: [
    { breaking: true, release: 'major' },
    { type: 'docs', release: 'patch' },
    { type: 'refactor', release: 'patch' },
    { type: 'style', release: 'patch' },
    { type: 'perf', release: 'patch' },
    { type: 'build', release: 'patch' },
  ],
  preset: 'conventionalcommits',
  presetConfig: {
    types: [
      { type: 'feat', section: 'Features' },
      { type: 'fix', section: 'Bug Fixes' },
      { type: 'chore', hidden: true },
      { type: 'docs', section: 'Documentation' },
      { type: 'style', hidden: true },
      { type: 'refactor', section: 'Refactors' },
      { type: 'build', section: 'Build config' },
      { type: 'perf', hidden: true },
      { type: 'test', hidden: true },
    ],
  },
};
