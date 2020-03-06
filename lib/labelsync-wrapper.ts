import { configuration, label, make, repository } from 'label-sync'

export interface Repo {
  destroyUnknownLabels: boolean
  labels: Label[]
  name: string
}
export interface Label {
  name: string
  color: string
  description?: string
}

function toLabelSyncLabels(data: Label[]) {
  return data.reduce((labels, { name, color, description }) => {
    labels[name] = label({ color, description: description ?? '' })
    return labels
  }, {})
}

function toLabelSyncRepos(inputs: Repo[]) {
  return inputs.reduce((repos, { destroyUnknownLabels, name, labels }) => {
    repos[name] = repository({
      strict: destroyUnknownLabels,
      labels: toLabelSyncLabels(labels),
    })
    return repos
  }, {})
}

export function generate(repos: Repo[]) {
  make({
    configs: [
      configuration({
        repositories: toLabelSyncRepos(repos),
      }),
    ],
  })
}
