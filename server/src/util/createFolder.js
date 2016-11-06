// Libraries
import FS from 'fs'

// Syncronously creates directory, if not already present
export const createFolder = (dir) => {
  if (!FS.existsSync(dir)) {
    FS.mkdirSync(dir)
  }
}
