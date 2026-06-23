import { Command } from 'commander'
import npmVersion from 'libnpmversion'
import semver from 'semver'
import { versionChangeFromChangelog, versionUnreleasedChanges } from '#src/changelog.ts'
import { readFile, writeFile } from '#utils/fs.ts'
import pkg from '../../package.json' assert { type: 'json' }

export const releaseCommand = new Command('release')
  .description('Prepares a new release')
  .option('--prerelease [identifier]', 'Mark the release as a prerelease', '')
  .action(releaseAction)

interface Options {
  prerelease: string
}

async function releaseAction({ prerelease }: Options) {
  const changelog = readFile('CHANGELOG.md')
  let release = versionChangeFromChangelog(changelog)

  if (release === null) {
    console.error('No changes detected since last release, skipping version bump')
    return
  }

  const next = prerelease
    ? semver.inc(pkg.version, `pre${release}`, prerelease, '1')
    : semver.inc(pkg.version, release)

  if (next === null) {
    throw new Error(
      `Failed to determine next version from current version ${pkg.version} and release type ${release}`,
    )
  }

  await npmVersion(next, {
    allowSameVersion: false,
    tagVersionPrefix: 'v', // tag as 'v1.2.3' when versioning to 1.2.3
    commitHooks: true, // default true, run git commit hooks, default true
    gitTagVersion: true, // default true, tag the version
    force: false, // push forward recklessly if any problems happen
    ignoreScripts: true,
    message: 'v%s', // message
  })

  writeFile('CHANGELOG.md', await versionUnreleasedChanges(changelog, next))
}
