// Libraries
import Path from 'path'

export default (req, file, cb) => {
  if (!req.user) {
    cb(null, false) // Reject if not logged in
    return
  }

  // Filter image types
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
