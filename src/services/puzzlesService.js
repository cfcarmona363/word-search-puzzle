import resources from '../constants/resources.json'

export const getPuzzle = id => {
  return resources.resources[id || 0]
}
