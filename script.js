document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const nameInput = document.getElementById('name');
    const nameInput = document.getElementById('surname');
    const emailInput = document.getElementById('email');
    
    // Create error message elements
    const nameError = document.createElement('div');
    nameError.className = 'invalid-feedback';
    nameInput.parentNode.appendChild(nameError);

     const surnameError = document.createElement('div');
    surnameError.className = 'invalid-feedback';
    surnameInput.parentNode.appendChild(surnameError);
    
    const emailError = document.createElement('div');
    emailError.className = 'invalid-feedback';
    emailInput.parentNode.appendChild(emailError);

    // Real-time validation
    nameInput.addEventListener('input', validateName);
    surnameInput.addEventListener('input', validateSurname);
    emailInput.addEventListener('input', validateEmail);

    // Form submission validation
    form.addEventListener('submit', function(event) {
        const isNameValid = validateName();
        const isSurnameValid = validateSurname();
        const isEmailValid = validateEmail();
        
        if (!isNameValid || !isEmailValid ) {
            event.preventDefault();
        }
    });

    function validateName() {
        const nameValue = nameInput.value.trim();
        // Allows letters, spaces, hyphens, and apostrophes
        const isValid = /^[A-Za-z\s'-]+$/.test(nameValue);
        
        if (!isValid) {
            nameInput.classList.add('is-invalid');
            nameError.textContent = 'Name should only contain letters, spaces, hyphens, or apostrophes';
            return false;
        } else {
            nameInput.classList.remove('is-invalid');
            nameError.textContent = '';
            return true;
        }
    }

    function validateSurname() {
        const surnameValue = surnameInput.value.trim();
        // Allows letters, spaces, hyphens, and apostrophes
        const isValid = /^[A-Za-z\s'-]+$/.test(surnameValue);
        
        if (!isValid) {
            surnameInput.classList.add('is-invalid');
            surnameError.textContent = 'Surname should only contain letters, spaces, hyphens, or apostrophes';
            return false;
        } else {
            surnameInput.classList.remove('is-invalid');
            surnameError.textContent = '';
            return true;
        }
    }

    function validateEmail() {
        const emailValue = emailInput.value.trim();
        // Standard email regex pattern
        const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);
        
        if (!isValid) {
            emailInput.classList.add('is-invalid');
            emailError.textContent = 'Please enter a valid email address (e.g., example@domain.com)';
            return false;
        } else {
            emailInput.classList.remove('is-invalid');
            emailError.textContent = '';
            return true;
        }
    }
});
function showMessage(event) {
            event.preventDefault(); // Prevent form from refreshing the page
            alert("Form submitted successfully! Thank You For Your Feedback");
        }
