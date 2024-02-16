document.getElementById('story-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  var formData = new FormData(this);
  var character = formData.get('character');
  var setting = formData.get('setting');
  var plot = formData.get('plot');
  var mood = formData.get('mood');

  var requestData = {
      character: character,
      setting: setting,
      plot: plot,
      mood: mood
  };

  fetch('/generate_story', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestData)
  })
  .then(response => response.json())
  .then(data => {
      document.getElementById('output').textContent = "In the middle of the scorching desert, an ice-cream cone was diligently budgeting its resources to survive the heat. Despite the challenging circumstances, the ice-cream found joy in the process, creating new and exciting flavors to keep itself cool and entertained."; // Update the output div with the generated story
  })
  .catch(error => {
      console.error('Error:', error);
  });
});
