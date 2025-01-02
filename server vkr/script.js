document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.getElementById('loginButton');
    const authSection = document.getElementById('auth-section');
    const dashboardSection = document.getElementById('dashboard-section');
    const licensePage = document.getElementById('license-page');
    const licenseButton = document.getElementById('licenseButton');
    const registerButton = document.getElementById('registerButton');
    const modal = document.getElementById('user-modal');
    const overlay = document.getElementById('modal-overlay');
    const closeModalButton = document.getElementById('close-modal');
    const closeLicensePageButton = document.getElementById('close-license-page');

    dashboardSection.style.display = 'none';
    licensePage.style.display = 'none';

    loginButton.addEventListener('click', () => {
        const login = document.getElementById('login').value;
        const password = document.getElementById('password').value;

        if (login === 'admin' && password === 'admin') {
            authSection.style.display = 'none';
            dashboardSection.style.display = 'block';
        } else {
            alert('Invalid login or password');
        }
    });

    licenseButton.addEventListener('click', () => {
        dashboardSection.style.display = 'none';
        licensePage.style.display = 'block';
    });

    registerButton.addEventListener('click', () => {
        modal.classList.add('active');
        overlay.classList.add('active');
    });

    closeModalButton.addEventListener('click', () => {
        modal.classList.remove('active');
        overlay.classList.remove('active');
    });

    overlay.addEventListener('click', () => {
        modal.classList.remove('active');
        overlay.classList.remove('active');
    });

    closeLicensePageButton.addEventListener('click', () => {
        licensePage.style.display = 'none';
        dashboardSection.style.display = 'block';
    });
});

function registerUser() {
    const username = document.getElementById('new-username').value;
    const password = document.getElementById('new-password').value;

    if (username && password) {
        const userDisplay = document.getElementById('users-display');
        const userElement = document.createElement('div');
        userElement.textContent = `User: ${username}`;
        userDisplay.appendChild(userElement);
        alert('User registered successfully!');
        document.getElementById('new-username').value = '';
        document.getElementById('new-password').value = '';
    } else {
        alert('Please fill in all fields');
    }
}