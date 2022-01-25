#!/usr/bin/env node
const BuildFolders = require('../lib/BuildFolders')
const BuildFiles = require('../lib/BuildFiles')
const BuildConfigFiles = require('../lib/BuildConfigFiles')
const BuildJSFiles = require('../lib/BuildJSFiles')
const BuildLiquidFiles = require('../lib/BuildLiquidFiles')
const BuildHelpers = require('../lib/BuildHelpers')
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
    scriptBundle,
    styleBundle,
    initialIndexJS
} = require('../data')

const _modules = [ 
    new BuildFolders(directories),
    new BuildFiles(layout, customers, templates, initialIndexJS),
    new BuildConfigFiles(webpackConfig, postCSSConfig, gitIgnore, packageJSON),
    new BuildJSFiles(componentConstructorJS, mutationObserverJS, idleTimerJS),
    new BuildLiquidFiles(themeLiquid, scriptBundle, styleBundle),
    new BuildHelpers(),
    new Prompt()
]
    
_modules.forEach(Module => {
    Module.init()
})