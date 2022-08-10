import * as core from '@actions/core'
import {exec} from '@actions/exec'
import {context} from '@actions/github'

export function addCommitAndPush(file: string): void {
  core.info(`Committing the fixed ${file} file`)
  exec(`git config --local user.name "${context.actor}"`)
  exec(
    `git config --local user.email "github-action-${context.actor}@users.noreply.github.com"`
  )
  exec(`git add ${file}`)
  exec(`git commit -m "ci: fix atlantis.yaml configuration"`)
  exec('git push')
}
