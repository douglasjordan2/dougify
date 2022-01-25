module.exports = {
file: './src/liquid/snippets/style-bundle.liquid',
content:`{%- comment -%}DO NOT DELETE{%- endcomment -%}

{% capture layout_bundle_styles %}bundle.{{- layout -}}.css{% endcapture %}
{{ layout_bundle_styles | asset_url | stylesheet_tag }}

{% if template %}
  {% capture style_bundle %}bundle.{{ template.name }}{% if template.suffix %}.{{ template.suffix }}{% endif %}.css{% endcapture %}
  {{ style_bundle | asset_url | stylesheet_tag }}
{% else %}
  {% unless checkout %}
    {{ 'bundle.apps.css' | asset_url | stylesheet_tag }}
  {% endunless %}
{% endif %}`}