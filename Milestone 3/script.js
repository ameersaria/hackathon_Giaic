// Target the id's
var hideUnhideSkillsButton = document.getElementById('hideUnhideSkills');
var skillsSection = document.getElementById('skillsSection');
var showFormButton = document.getElementById('showFormButton');
var formContainer = document.getElementById('formContainer');
var submitFormButton = document.getElementById('submitForm');
var resumeDisplay = document.getElementById('resumeDisplay');
var resumeResult = document.getElementById('resumeResult');
// Show and hide skills
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
// Function to show the resume form
var showForm = function () {
    formContainer.style.display = 'block';
};
// Function to generate resume
var generateResume = function () {
    var name = document.getElementById('inputName').value;
    var email = document.getElementById('inputEmail').value;
    var phone = document.getElementById('inputPhone').value;
    var education = document.getElementById('inputEducation').value;
    var experience = document.getElementById('inputExperience').value;
    var skills = document.getElementById('inputSkills').value;
    // Alert message if any field is empty
    if (!name || !email || !phone || !education || !experience || !skills) {
        alert('Please fill out all fields.');
        return;
    }
    // Convert the skills into an array and create individual `li` elements styled as block
    var skillsArray = skills.split(',').map(function (skill) { return skill.trim(); });
    var skillsListItems = skillsArray.map(function (skill) { return "\n        <div style=\"background: #f0f8ff; margin-bottom: 10px; padding: 10px; border-radius: 6px; display: block;\">\n            ".concat(skill, "\n        </div>"); }).join('');
    // Now Showing the generated resume without using `ul`
    resumeResult.innerHTML = "\n        <div id=\"resumeHeader\">\n            <div id=\"resumeCard\">\n                <h2 id=\"userName\">".concat(name, "</h2>\n                <p>\n                    <strong id=\"userEmail\">Email: </strong> ").concat(email, "\n                    <strong id=\"userPhone\">. Phone: </strong> ").concat(phone, "\n                </p>\n            </div>\n            <div id=\"resumeEducation\">\n                <h3>Education</h3>\n                <p>").concat(education, "</p>\n                <h3>Experience</h3>\n                <p>").concat(experience, "</p>\n                <h3>Skills</h3>\n                ").concat(skillsListItems, " <!-- Display skills as individual divs -->\n            </div>\n        </div>\n    ");
    resumeDisplay.style.display = 'block';
};
//  Adding event listeners for the buttons
hideUnhideSkillsButton.addEventListener('click', toggleSkills);
showFormButton.addEventListener('click', showForm);
submitFormButton.addEventListener('click', generateResume);
