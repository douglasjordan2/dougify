module.exports = {
file: './theme-check.yml',
content: `# Theme Check Config
root: .

extends: :nothing

require: []

include_categories: []

exclude_categories: []

ignore:
  - node_modules/*

ConvertIncludeToRender:
  enabled: true
  ignore: []

LiquidTag:
  enabled: true
  ignore: []
  min_consecutive_statements: 5

MissingTemplate:
  enabled: true
  ignore: []
  ignore_missing: []

NestedSnippet:
  enabled: true
  ignore: []
  max_nesting_level: 3

RequiredLayoutThemeObject:
  enabled: true
  ignore: []

SpaceInsideBraces:
  enabled: true
  ignore: []

SyntaxError:
  enabled: true
  ignore: []

TemplateLength:
  enabled: true
  ignore: []
  max_length: 600
  # Exclude content of {% schema %} in line count
  exclude_schema: true
  # Exclude content of {% stylesheet %} in line count
  exclude_stylesheet: true
  # Exclude content of {% javascript %} in line count
  exclude_javascript: true

UnknownFilter:
  enabled: true
  ignore: []

UnusedAssign:
  enabled: true
  ignore: []

UnusedSnippet:
  enabled: true
  ignore: []

MatchingSchemaTranslations:
  enabled: true
  ignore: []

MatchingTranslations:
  enabled: true
  ignore: []

DefaultLocale:
  enabled: true
  ignore: []

TranslationKeyExists:
  enabled: true
  ignore: []

ValidHTMLTranslation:
  enabled: true
  ignore: []

ValidJson:
  enabled: true
  ignore: []

ValidSchema:
  enabled: true
  ignore: []

MissingRequiredTemplateFiles:
  enabled: true
  ignore: []

UndefinedObject:
  enabled: true
  ignore: []
  exclude_snippets: true
  config_type: :default

RequiredDirectories:
  enabled: true
  ignore: []

DeprecatedFilter:
  enabled: true
  ignore: []

DeprecateLazysizes:
  enabled: true
  ignore: []

DeprecateBgsizes:
  enabled: true
  ignore: []

MissingEnableComment:
  enabled: true
  ignore: []

ParserBlockingJavaScript:
  enabled: true
  ignore: []

ParserBlockingScriptTag:
  enabled: true
  ignore: []

AssetSizeJavaScript:
  enabled: false
  threshold_in_bytes: 10_000
  ignore: []

AssetSizeCSS:
  enabled: false
  threshold_in_bytes: 100_000
  ignore: []

AssetSizeCSSStylesheetTag:
  enabled: false
  threshold_in_bytes: 100_000
  ignore: []

ImgWidthAndHeight:
  enabled: true
  ignore: []

RemoteAsset:
  enabled: true
  ignore: []

AssetUrlFilters:
  enabled: true
  ignore: []

ContentForHeaderModification:
  enabled: true
  ignore: []

ImgLazyLoading:
  enabled: true
  ignore: []

HtmlParsingError:
  enabled: true
  ignore: []

AssetSizeAppBlockJavaScript:
  enabled: false
  ignore: []
  threshold_in_bytes: 10_000

AssetSizeAppBlockCSS:
  enabled: false
  ignore: []
  threshold_in_bytes: 100_000

AppBlockValidTags:
  enabled: false
  ignore: []

PaginationSize:
  enabled: true
  ignore: []
  min_size: 1
  max_size: 50

DeprecatedGlobalAppBlockType:
  enabled: true

SchemaJsonFormat:
  enabled: false
  start_level: 0
  indent: '  '
`}
