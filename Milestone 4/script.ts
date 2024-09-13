// Targeting html Elements
const hideUnhideSkillsButton = document.getElementById('hideUnhideSkills') as HTMLButtonElement;
const skillsSection = document.getElementById('skillsSection') as HTMLDivElement;
const showFormButton = document.getElementById('showFormButton') as HTMLButtonElement;
const editResumeButton = document.getElementById('editResumeButton') as HTMLButtonElement;
const formContainer = document.getElementById('formContainer') as HTMLDivElement;
const submitFormButton = document.getElementById('submitForm') as HTMLButtonElement;
const resumeDisplay = document.getElementById('resumeDisplay') as HTMLDivElement;
const resumeResult = document.getElementById('resumeResult') as HTMLDivElement;

// Function to toggle the visibility of the Skills section
const toggleSkills = () => {
    if (skillsSection.style.display === 'none' || skillsSection.style.display === '') {
        skillsSection.style.display = 'block';
        hideUnhideSkillsButton.innerText = 'Hide Skills';
    } else {
        skillsSection.style.display = 'none';
        hideUnhideSkillsButton.innerText = 'Show Skills';
    }
};

// Function to show the form
const showForm = () => {
    formContainer.style.display = 'block';
    resumeDisplay.style.display = 'none'; // Hide the resume display when form is shown
};

// Function to edit the resume
const editResume = () => {
    // Populate form fields with existing resume data
    const nameField = document.getElementById('inputName') as HTMLInputElement;
    const emailField = document.getElementById('inputEmail') as HTMLInputElement;
    const phoneField = document.getElementById('inputPhone') as HTMLInputElement;
    const educationField = document.getElementById('inputEducation') as HTMLTextAreaElement;
    const experienceField = document.getElementById('inputExperience') as HTMLTextAreaElement;
    const skillsField = document.getElementById('inputSkills') as HTMLTextAreaElement;

    // Purana resume data
    nameField.value = (document.getElementById('userName') as HTMLHeadingElement).innerText;
    emailField.value = (document.getElementById('userEmail') as HTMLParagraphElement).innerText.split(': ')[1];
    phoneField.value = (document.getElementById('userPhone') as HTMLParagraphElement).innerText.split(': ')[1];
    educationField.value = document.getElementById('resumeEducation')!.innerText;
    experienceField.value = document.getElementById('resumeEducation')!.innerText;
    skillsField.value = document.getElementById('skillsSection')!.innerText;
    
    // Show form
    formContainer.style.display = 'block';
    resumeDisplay.style.display = 'none';
};

// Function to see generate resume
const generateResume = () => {
    const name = (document.getElementById('inputName') as HTMLInputElement).value;
    const email = (document.getElementById('inputEmail') as HTMLInputElement).value;
    const phone = (document.getElementById('inputPhone') as HTMLInputElement).value;
    const education = (document.getElementById('inputEducation') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('inputExperience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('inputSkills') as HTMLTextAreaElement).value;

    // Alert message
    if (!name || !email || !phone || !education || !experience || !skills) {
        alert('Please fill out all fields.');
        return;
    }

    // show the generated resume
    resumeResult.innerHTML = `
        <h2>${name}</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <h3>Education</h3>
        <p>${education}</p>
        <h3>Experience</h3>
        <p>${experience}</p>
        <h3>Skills</h3>
        <p>${skills}</p>
    `;
    resumeDisplay.style.display = 'block';
    formContainer.style.display = 'none';
};

// Adding event listeners
hideUnhideSkillsButton.addEventListener('click', toggleSkills);
showFormButton.addEventListener('click', showForm);
editResumeButton.addEventListener('click', editResume);
submitFormButton.addEventListener('click', generateResume);