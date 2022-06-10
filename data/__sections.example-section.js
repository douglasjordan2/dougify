module.exports = {
file: './src/liquid/sections/example-section.liquid',
content: `{% comment %} EXAMPLE SECTION FILE {% endcomment %}
<section>
  {{ section.settings.title }}
</section>

{% schema %}
  { 
    "name": "Example Section",
    "presets": [
      {
        "name": "Example Section"
      }
    ],
    "settings": [ 
      { 
        "type": "text",
        "id": "title",
        "label": "Title"
      }
    ]
  }
{% endschema %}`}
