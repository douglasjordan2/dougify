module.exports = `{%- comment -%}DO NOT DELETE{%- endcomment -%}

{% capture layout_bundle_js %}bundle.{{- layout -}}.js{% endcapture %}
<script src="{{ layout_bundle_js | asset_url }}" defer></script>

{% if template %}
  {% capture script_bundle %}bundle.{{ template.name }}{% if template.suffix %}.{{ template.suffix }}{% endif %}.js{% endcapture %}
  <script src="{{ script_bundle | asset_url }}" defer></script>
{% else %}
  {% unless checkout %}
    <script src="{{ 'bundle.apps.js' | asset_url }}" defer></script>
  {% endunless %}
{% endif %}`