// Libraries
import Vision from '@google-cloud/vision'
import { promisifyAll } from 'bluebird'

// Our modules
import { vision } from '../../config'

// Create client
const Client = promisifyAll(Vision({
  projectId: 'acuity-project',
  keyFilename: vision.key
}))

export const getLabels = async (image) => {
  const labels = await Client.detectLabelsAsync(image)

  if (labels < 1) return false

  return labels
}
