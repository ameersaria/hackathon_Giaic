// Targeting html Elements
var hideUnhideSkillsButton = document.getElementById('hideUnhideSkills');
var skillsSection = document.getElementById('skillsSection');
var showFormButton = document.getElementById('showFormButton');
var editResumeButton = document.getElementById('editResumeButton');
var formContainer = document.getElementById('formContainer');
var submitFormButton = document.getElementById('submitForm');
var resumeDisplay = document.getElementById('resumeDisplay');
var resumeResult = document.getElementById('resumeResult');
// Function to toggle the visibility of the Skills section
var toggleSkills = function () {
    if (skillsSection.style.display === 'none' || skillsSection.style.display === '') {
        skillsSection.style.display = 'block';
        hideUnhideSkillsButton.innerText = 'Hide Skills';
    }
    else {
        skillsSection.style.display = 'none';
        hideUnhideSkillsButton.innerText = 'Show Skills';
    }
};
// Function to show the form
var showForm = function () {
    formContainer.style.display = 'block';
    resumeDisplay.style.display = 'none'; // Hide the resume display when form is shown
};
// Function to edit the resume
var editResume = function () {
    // Populate form fields with existing resume data
    var nameField = document.getElementById('inputName');
    var emailField = document.getElementById('inputEmail');
    var phoneField = document.getElementById('inputPhone');
    var educationField = document.getElementById('inputEducation');
    var experienceField = document.getElementById('inputExperience');
    var skillsField = document.getElementById('inputSkills');
    // Purana resume data
    nameField.value = document.getElementById('userName').innerText;
    emailField.value = document.getElementById('userEmail').innerText.split(': ')[1];
    phoneField.value = document.getElementById('userPhone').innerText.split(': ')[1];
    educationField.value = document.getElementById('resumeEducation').innerText;
    experienceField.value = document.getElementById('resumeEducation').innerText;
    skillsField.value = document.getElementById('skillsSection').innerText;
    // Show form
    formContainer.style.display = 'block';
    resumeDisplay.style.display = 'none';
};
// Function to see generate resume
var generateResume = function () {
    var name = document.getElementById('inputName').value;
    var email = document.getElementById('inputEmail').value;
    var phone = document.getElementById('inputPhone').value;
    var education = document.getElementById('inputEducation').value;
    var experience = document.getElementById('inputExperience').value;
    var skills = document.getElementById('inputSkills').value;
    // Alert message
    if (!name || !email || !phone || !education || !experience || !skills) {
        alert('Please fill out all fields.');
        return;
    }
    // show the generated resume
    resumeResult.innerHTML = "\n        <h2>".concat(name, "</h2>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Phone:</strong> ").concat(phone, "</p>\n        <h3>Education</h3>\n        <p>").concat(education, "</p>\n        <h3>Experience</h3>\n        <p>").concat(experience, "</p>\n        <h3>Skills</h3>\n        <p>").concat(skills, "</p>\n    ");
    resumeDisplay.style.display = 'block';
    formContainer.style.display = 'none';
};
// Adding event listeners
hideUnhideSkillsButton.addEventListener('click', toggleSkills);
showFormButton.addEventListener('click', showForm);
editResumeButton.addEventListener('click', editResume);
submitFormButton.addEventListener('click', generateResume);
