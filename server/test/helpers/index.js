import chai from 'chai'
import appModulePath from 'app-module-path'
import path from 'path'

// Basically makes us able to "import stuff from 'some/source/folder'"
appModulePath.addPath(path.join(__dirname, '/../../src'))
chai.config.includeStack = true
chai.should()
global.expect = chai.expect
global.AssertionError = chai.AssertionError
global.Assertion = chai.Assertion
global.assert = chai.assert
