#!/usr/bin/env node
const BuildFolders = require('../lib/BuildFolders')
const BuildFiles = require('../lib/BuildFiles')
const WriteFiles = require('../lib/WriteFiles')
const InstallPackages = require('../lib/InstallPackages')

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
  tailwindConfig,
  enDefault
} = require('../data')

const configFiles = [
  webpackConfig, postCSSConfig, gitIgnore, packageJSON, tailwindConfig
]

const jsFiles = [
  componentConstructorJS, mutationObserverJS, idleTimerJS
]

const liquidFiles = [
  themeLiquid, exampleSection, scriptBundle, styleBundle, settings_data, settings_schema, enDefault
]

const scssHelpers = [
  helpersSCSS
]

const filesToWrite = [
  ...configFiles, ...jsFiles, ...liquidFiles, ...scssHelpers
]

const prompt = require('prompt-sync')({sigint:true})

let store = prompt('Shop handle or URL: ')
if(store.includes('.myshopify')) {
  store = store.split('.myshopify')[0]
}

const _modules = [ 
  new InstallPackages(store),
  new BuildFolders(directories),
  new BuildFiles(layout, templates, customers, initialIndexJS),
  new WriteFiles(filesToWrite, store)
]
    
_modules.forEach(Module => {
  Module.init()
})
