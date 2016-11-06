// Libraries
import Path from 'path'

// Filter image types
export default (req, file, cb) => {
  switch (Path.extname(file.originalname)) {
    case '.jpg':
    case '.jpeg':
    case '.png':
    case '.tiff':
    case '.gif':
      cb(null, true)
      break

    default:
      cb(null, false)
  }
}
