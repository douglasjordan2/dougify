module.exports = {
file: './src/liquid/sections/example-section.liquid',
content: `<!-- sections/example-section.liquid -->
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
