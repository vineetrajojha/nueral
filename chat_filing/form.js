// Get the upload button
const uploadButton = document.querySelector('.upload-button');

// Get the continue button
const continueButton = document.querySelector('.continue-button');

// Add click event listener to the upload button
uploadButton.addEventListener('click', function() {
  // Create an input element for file selection
  const fileInput = document.createElement('input');
  fileInput.type = 'file';
  fileInput.accept = '.pdf'; // Specify the accepted file type (e.g., PDF)

  // Add an event listener for when the file is selected
  fileInput.addEventListener('change', function() {
    const file = fileInput.files[0];
    if (file) {
      // Handle the selected file (e.g., upload it to the server)
      console.log('Selected file:', file.name);
      // ... Add your file upload logic here
    } else {
      console.log('No file selected');
    }
  });

  // Trigger the file selection dialog
  fileInput.click();
});

// Add click event listener to the continue button
continueButton.addEventListener('click', function() {
  // Redirect to details.html
  window.location.href = 'details.html';
});