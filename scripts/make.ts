import { generate } from '../lib/labelsync-wrapper'
import labels from './../labelsync'

generate(labels).catch((e) => {
  console.error(e)
  process.exit(1)
})
