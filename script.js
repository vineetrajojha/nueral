// Get the form element
const itrForm = document.getElementById('itrForm');

// Add an event listener to the form submission
itrForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting

  // Get the selected values
  const q1Value = document.querySelector('input[name="q1"]:checked').value;

  // Perform actions based on the selected values
  console.log('Q1 value:', q1Value);

  // Add more logic for other form fields as needed
});