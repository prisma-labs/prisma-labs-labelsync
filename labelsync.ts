import { community, effort, impact, needs, note, scope, type } from './lib/builders'
import { Label, Repo } from './lib/labelsync-wrapper'

//prettier-ignore
const commonLabels = [
  type('feat',            '#3BDB8D', 'Add a new capability or enhance an existing one'),
  type('bug',             '#D73A4A', 'Something is not working the way it should'),
  type('chore',           '#EEEEEE', 'Something that does not warrant a release, zero runtime impact'),
  type('perf',            '#FFCF2D', 'Improve the efficiency of something'),
  type('docs',            '#FFCF2D', 'Relates to knowledge transfer matter (refs, guides, tuts, examples, ...)'),
  type('tests',           '#FFCF2D', 'Internal tests'),
  type('question',        '#FFCF2D', ''),
  type('refactor',        '#fcaeec', 'Address tech debt, internal incidental complexity'),
  type('improve',         '#fcaeec', 'Something existing is made better, does not affect the interface (example: better error message)'),
  note('user-resolved',              ''),
  note('invalid',                    'Initial assumptions turned out wrong'),
  note('wontfix',                    'Resolving the issue was explicitly ruled out'),
  note('duplicate',                  'This issue existed already'),      
  note('breaking-change',            'This issue existed already'), // todo consider color exception
  impact('high'), // todo consider color highlight 
  impact('medium'),
  impact('low'),
  effort('hard'),
  effort('modest'),
  effort('easy'),  // todo consider color highlight 
  needs('upstream',                  'An upstream component needs to be updated first'),
  needs('discussion',                'Open-ended conversation about something (ideation, design, analysis, ...)'),
  needs('clarification',             'Unable to answer question/feature without more info'),
  needs('investigation',             'Possibly an issue, needs more analysis/research'),      
  needs('use-cases',                 'More motivating examples needed to understand/appreciate idea/tradeoffs'),
  community('help-wanted',           'Not our focus, but accepting PRs'),
  community('good-first-issue',      'Good for newcomers'),
  scope('deps'),
  scope('cicd'),
] as Label[]

//prettier-ignore
export default [
  {
    name: 'team',
    destroyUnknownLabels: false,
    labels: [
      ...commonLabels,
      type('process',        '#FFCF2D', ''),
      type('process',        '#FFCF2D', ''),
      type('epic',           '#FFCF2D', ''),
      type('new-product',    '#FFCF2D', ''),
      type('research',       '#FFCF2D', ''),
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
    name: 'nexus-prisma',
    destroyUnknownLabels: false,
    labels: [
      ...commonLabels,
      type('meta',            '#FFCF2D', ''),
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
] as Repo[]
