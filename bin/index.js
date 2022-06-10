#!/usr/bin/env node
const BuildFolders = require('../lib/BuildFolders')
const BuildFiles = require('../lib/BuildFiles')
const WriteFiles = require('../lib/WriteFiles')
const Prompt = require('../lib/Prompt')

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
  webpackConfig, postCSSConfig, gitIgnore, packageJSON
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

const _modules = [ 
  new BuildFolders(directories),
  new BuildFiles(layout, customers, templates, initialIndexJS),
  new WriteFiles(filesToWrite),
  new Prompt()
]
    
_modules.forEach(Module => {
  Module.init()
})
