document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const charCounter = document.getElementById('charCounter');
    const submittedData = document.getElementById('submittedData');
    const displayName = document.getElementById('displayName');
    const displayEmail = document.getElementById('displayEmail');
    const displayMessage = document.getElementById('displayMessage');

    // Update character counter as the user types
    messageInput.addEventListener('input', () => {
        charCounter.textContent = `${messageInput.value.length}/200 characters`;
    });

    // Handle form submission
    // Callback function is executed after clicking SUBMIT
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Validate inputs & shows error if any prompt is empty
        if (!nameInput.value.trim() || !emailInput.value.trim() || !messageInput.value.trim()) {
            alert('Please fill in all fields before submitting.');
            return;
        }

        // Display submitted data after form submission
        displayName.textContent = nameInput.value;
        displayEmail.textContent = emailInput.value;
        displayMessage.textContent = messageInput.value;
        submittedData.classList.remove('d-none');

        // Clear form fields once the data is submitted
        nameInput.value = '';
        emailInput.value = '';
        messageInput.value = '';
        charCounter.textContent = '0/200 characters';
    });
});
