// Get the form elements
const financialYearSelect = document.getElementById('financial-year');
const panNumberInput = document.getElementById('pan-number');
const dateOfBirthInput = document.getElementById('date-of-birth');

// Get the buttons
const getCaButton = document.getElementById('getCA');
const continueButton = document.getElementById('continue');

// Add event listener to the "GET CA ASSISTED" button
getCaButton.addEventListener('click', function() {
  // Handle the "GET CA ASSISTED" functionality
  console.log('GET CA ASSISTED clicked');
});

// Add event listener to the "CONTINUE" button
continueButton.addEventListener('click', function() {
  // Validate form inputs
  const financialYear = financialYearSelect.value;
  const panNumber = panNumberInput.value;
  const dateOfBirth = dateOfBirthInput.value;

  // Regular expression to match date in dd-mm-yy format
  const dateRegex = /^\d{2}-\d{2}-\d{2}$/;

  if (financialYear && panNumber && dateOfBirth && dateOfBirth.match(dateRegex)) {
    // Handle the "CONTINUE" functionality
    console.log('Financial Year:', financialYear);
    console.log('PAN Number:', panNumber);
    console.log('Date of Birth:', dateOfBirth);
    // Redirect or perform further actions
  } else {
    alert('Please fill in all the required fields in correct format.');
  }
});

// Populate Financial Year select options
const financialYears = ['2020-21', '2022-23', '2023-24'];
financialYears.forEach(year => {
  const option = document.createElement('option');
  option.value = year;
  option.textContent = year;
  financialYearSelect.appendChild(option);
});
