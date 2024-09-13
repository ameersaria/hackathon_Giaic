// Target the id's
const hideUnhideSkillsButton = document.getElementById('hideUnhideSkills') as HTMLButtonElement;
const skillsSection = document.getElementById('skillsSection') as HTMLDivElement;
const showFormButton = document.getElementById('showFormButton') as HTMLButtonElement;
const formContainer = document.getElementById('formContainer') as HTMLDivElement;
const submitFormButton = document.getElementById('submitForm') as HTMLButtonElement;
const resumeDisplay = document.getElementById('resumeDisplay') as HTMLDivElement;
const resumeResult = document.getElementById('resumeResult') as HTMLDivElement;

// Show and hide skills
const toggleSkills = () => {
    if (skillsSection.style.display === 'none' || skillsSection.style.display === '') {
        skillsSection.style.display = 'block';
        hideUnhideSkillsButton.innerText = 'Hide Skills';
    } else {
        skillsSection.style.display = 'none';
        hideUnhideSkillsButton.innerText = 'Show Skills';
    }
};

// Function to show the resume form
const showForm = () => {
    formContainer.style.display = 'block';
};

// Function to generate resume
const generateResume = () => {
    const name = (document.getElementById('inputName') as HTMLInputElement).value;
    const email = (document.getElementById('inputEmail') as HTMLInputElement).value;
    const phone = (document.getElementById('inputPhone') as HTMLInputElement).value;
    const education = (document.getElementById('inputEducation') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('inputExperience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('inputSkills') as HTMLTextAreaElement).value;

    // Alert message if any field is empty
    if (!name || !email || !phone || !education || !experience || !skills) {
        alert('Please fill out all fields.');
        return;
    }

    // Convert the skills into an array and create individual `li` elements styled as block
    const skillsArray = skills.split(',').map(skill => skill.trim());
    const skillsListItems = skillsArray.map(skill => `
        <div style="background: #f0f8ff; margin-bottom: 10px; padding: 10px; border-radius: 6px; display: block;">
            ${skill}
        </div>`).join('');

    // Now Showing the generated resume without using `ul`
    resumeResult.innerHTML = `
        <div id="resumeHeader">
            <div id="resumeCard">
                <h2 id="userName">${name}</h2>
                <p>
                    <strong id="userEmail">Email: </strong> ${email}
                    <strong id="userPhone">. Phone: </strong> ${phone}
                </p>
            </div>
            <div id="resumeEducation">
                <h3>Education</h3>
                <p>${education}</p>
                <h3>Experience</h3>
                <p>${experience}</p>
                <h3>Skills</h3>
                ${skillsListItems} <!-- Display skills as individual divs -->
            </div>
        </div>
    `;
    resumeDisplay.style.display = 'block';
};

//  Adding event listeners for the buttons
hideUnhideSkillsButton.addEventListener('click', toggleSkills);
showFormButton.addEventListener('click', showForm);
submitFormButton.addEventListener('click', generateResume);