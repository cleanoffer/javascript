'use strict'

var test = require('ava')

var ROOT_PKG = require('../package.json')

var LINT_PKGS = [
  'tan-node6',
  'tan-react'
].map(function(linter) {
  return require('../linters/eslint-config-' + linter + '/package.json')
})

test('compare versions', function (t) {
  var version = ROOT_PKG.version

  LINT_PKGS.forEach(function (pkg) {
    t.is(pkg.version, version, pkg.name + '#version matches root version')
  })
})
