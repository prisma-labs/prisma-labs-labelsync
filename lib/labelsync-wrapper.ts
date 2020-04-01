import { labelsync } from 'label-sync'
import { Label as LabeLabelSyncLabel, Repository } from 'label-sync/dist/generator'
import { LabelSyncConfig } from 'label-sync/dist/make'

export interface Repo {
  destroyUnknownLabels: boolean
  labels: Label[]
  name: string
}

export interface Label {
  name: string
  color: string
  description?: string
  alias?: string[]
  siblings?: string[]
}

function toLabelSyncConfig(inputs: Repo[]): LabelSyncConfig {
  return {
    repos: inputs.reduce((repos, { destroyUnknownLabels, name, labels }) => {
      repos[name] = new Repository({
        config: {
          removeUnconfiguredLabels: destroyUnknownLabels,
        },
        labels: labels.map(({ name, color, description, alias, siblings }) => {
          return new LabeLabelSyncLabel({
            color: color,
            name: name,
            description: description ?? '',
            alias: alias,
            siblings: siblings,
          })
        }),
      })
      return repos
    }, {} as LabelSyncConfig['repos']),
  }
}

export function generate(repos: Repo[]) {
  return labelsync(toLabelSyncConfig(repos))
}
