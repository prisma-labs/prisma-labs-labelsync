import { commonLabels, repos, scope, theme, type } from './lib/core'

//prettier-ignore
export default repos([
  {
    name: 'team',
    destroyUnknownLabels: false,
    labels: [
      ...commonLabels,
      type('process',        theme.social, ''),
      type('epic',           theme.social, ''),
      type('new-product',    theme.shiny,  ''),
      type('research',       theme.refine, ''),
      scope('integration'),
      scope('nextjs'),
      scope('nexus'),
      scope('tooling'),
      scope('workflow'),
    ]
  },
  {
    name: 'dripip',
    destroyUnknownLabels: false,
    labels: [
      ...commonLabels,
      scope('doctor'),
      scope('preview'),
    ]
  },
  {
    name: 'tydoc',
    destroyUnknownLabels: false,
    labels: [
      ...commonLabels,
      scope('extractor'),
      scope('md'),
    ]
  },
])
