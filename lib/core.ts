import { Label, Repo } from './labelsync-wrapper'

const theme = {
  neutral: '#EEEEEE',
}

export function repos(data: Repo[]) {
  for (const repo of data) {
    repo.labels.push(...commonLabels)
  }
  return data
}

/**
 * Based off conventional commit notion of type. The kind of issue.
 * These labels may get their own colour to help visually differentiate
 * between them faster. The commit that closes this issue should generally
 * be of the same type as this label.
 */
export function type(name: string, color: string, description: string): Label {
  return {
    name: `type/${name}`,
    color: color,
    description: description,
  }
}

/**
 * Labels that help us track issue short-circuites or other minimal
 * categorical details.
 */
export function note(name: string, description?: string): Label {
  return {
    name: `note/${name}`,
    color: theme.neutral,
    description: description,
  }
}

/**
 * Labels that help us track how impactful issues will be. Combined
 * with complexity label, helps inform prioritization.
 */
export function impact(name: string): Label {
  return {
    name: `impact/${name}`,
    color: theme.neutral,
  }
}

/**
 * Effort that help us track how impactful issues will be. Combined
 * with complexity label, helps inform prioritization.
 */
export function effort(name: string): Label {
  return {
    name: `effort/${name}`,
    color: theme.neutral,
  }
}

/**
 * Labels that help us mark issues as being on hold for some reason.
 */
export const needs = (name: string, description?: string): Label => ({
  name: `needs/${name}`,
  color: '#FFE601',
  description: description,
})

/**
 * Based off conventional commit notion of scope. What area of
 * the project does the issue touch. The commit that closes this issue
 * should generally be of the same scope as this label.
 */
export function scope(name: string, description?: string): Label {
  return {
    name: `scope/${name}`,
    color: '#8cdeff',
    description: description,
  }
}

/**
 * Labels that help us coordinate with the community.
 */
export function community(name: string, description?: string): Label {
  return {
    name: `community/${name}`,
    color: '#7057ff',
    description: description,
  }
}

//prettier-ignore
export const commonLabels = [
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
