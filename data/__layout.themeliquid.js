module.exports = {
file: './src/liquid/layout/theme.liquid',
content: `<!doctype html>
<html lang="{{ shop.locale }}">
<head>
  <title>{{ page_title }}</title>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <meta name="description" content="{{ page_description | escape }}">
  <link rel="canonical" href="{{ canonical_url }}">
  <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no">

  {% render 'style-bundle', layout: 'theme' %}
  {% render 'script-bundle', layout: 'theme' %}
  
  {{ content_for_header }}

</head>
<body>

  <main role="main" id="main">
    {{ content_for_layout }}
  </main>

</body>
</html>`}