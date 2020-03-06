import { Label } from './labelsync-wrapper'

const theme = {
  neutral: '#EEEEEE',
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
