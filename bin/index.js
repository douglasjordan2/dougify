#!/usr/bin/env node
const Prompt = require('../lib/Prompt')
const BuildFolders = require('../lib/BuildFolders')
const BuildFiles = require('../lib/BuildFiles')
const WriteFiles = require('../lib/WriteFiles')
const BuildPackageJSON = require('../lib/BuildPackageJSON')

const {
  directories,
  layout,
  customers,
  templates,
  webpackConfig,
  postCSSConfig,
  gitIgnore,
  packageJSON,
  componentConstructorJS,
  mutationObserverJS,
  idleTimerJS,
  themeLiquid,
  exampleSection,
  scriptBundle,
  styleBundle,
  settings_data,
  settings_schema,
  initialIndexJS,
  helpersSCSS,
} = require('../data')

const configFiles = [
  webpackConfig, postCSSConfig, gitIgnore
]

const jsFiles = [
  componentConstructorJS, mutationObserverJS, idleTimerJS
]

const liquidFiles = [
  themeLiquid, exampleSection, scriptBundle, styleBundle, settings_data, settings_schema
]

const scssHelpers = [
  helpersSCSS
]

const filesToWrite = [
  ...configFiles, ...jsFiles, ...liquidFiles, ...scssHelpers
]

const prompt = new Prompt()
console.log(prompt)
const store = prompt.init()

console.log('store', store)

const _modules = [ 
  new BuildFolders(directories),
  new BuildFiles(layout, customers, templates, initialIndexJS),
  new WriteFiles(filesToWrite),
  new BuildPackageJSON(packageJSON, store)
]
    
_modules.forEach(Module => {
  Module.init()
})
