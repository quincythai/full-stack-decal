const discordLink = document.getElementById("discordLink");
const originalDiscord = discordLink.innerHTML; // Store the original text

discordLink.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent the default link behavior

  // Check the current content and toggle it
  if (discordLink.innerHTML === originalDiscord) {
    discordLink.innerHTML = "Discord: quincythai";
  } else {
    discordLink.innerHTML = originalDiscord;
  }
});

const contactLink = document.getElementById("contactLink");
const originalContact = contactLink.innerHTML;

contactLink.addEventListener("click", (event) => {
  if (contactLink.innerHTML === originalContact) {
    contactLink.innerHTML = "Contact: quincythai@berkeley.edu";
  } else {
    contactLink.innerHTML = originalContact;
  }
});

const formDiv = document.getElementById("formDiv");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const submissionList = document.getElementById("submissionList");

// Function to fetch and display submissions
function displaySubmissions() {
  fetch('/submissions')
    .then(response => response.json())
    .then(submissions => {
      // Clear the existing list
      submissionList.innerHTML = '';

      // Loop through the submissions and add them to the list
      submissions.forEach(submission => {
        const listItem = document.createElement('li');
        listItem.textContent = submission;
        submissionList.appendChild(listItem);
      });
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

// Add an event listener to update the submissions list after a form submission
formDiv.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = nameInput.value;
  const email = emailInput.value;

  // Create a JSON object with the form data
  const formData = { name, email };

  fetch('/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })
  .then(response => {
    if (response.ok) {
      console.log('Data sent successfully');
      // Reset the form fields
      nameInput.value = "";
      emailInput.value = "";

      // Update the list of submissions
      displaySubmissions();
    } else {
      console.error('Failed to send data');
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });
});

// Call the function to display submissions on page load
window.addEventListener('load', displaySubmissions);
