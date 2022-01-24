module.exports = `# config.yml
development:
  password: \${PASSWORD}
  theme_id: "\${DEV}"
  store: \${STORE}
  directory: dist/
  ignore:
    config/settings_data.json

production:
  password: \${PASSWORD}
  theme_id: "\${PROD}"
  store: \${STORE}
  directory: dist/
  ignore:
    config/settings_data.json
`