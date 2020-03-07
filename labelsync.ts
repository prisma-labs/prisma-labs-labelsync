import { commonLabels, note, repos, scope, theme, type } from './lib/core'

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
  {
    name: 'nexus-prisma',
    destroyUnknownLabels: false,
    labels: [
      ...commonLabels,
      type('epic',            theme.social,  ''),
      type('meta',            theme.neutral, ''),
      note('prisma1',                    'specific to the version of nexus-prisma based on Prisma 1'),
      scope('architecture'),
      scope('auth',                      'Relates to Prisma crud/model auth'),
      scope('config'),
      scope('crud'),
      scope('distributed-data'),
      scope('mapping'),
      scope('projecting',                 'Exposing Prisma Models in the GQL API'),
      scope('resolving',                  'Relates to implementing resolvers'),
      scope('runtime-validation'),
      scope('schema'),
      scope('synchronized-projectors'),
      scope('typegen',                    'Relates to typegen/codegen systems'),
      scope('workflow'),
    ]
  },
])
