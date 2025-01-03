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
    const closeLicenseButton = document.getElementById('close-license');
    const activateModal = document.getElementById('activate-modal');
    const closeActivateModal = document.getElementById('close-activate-modal');


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

    closeLicenseButton.addEventListener('click', () => {
        licensePage.style.display = 'none';
        dashboardSection.style.display = 'block';
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
        activateModal.classList.remove('active');
    });
    closeActivateModal.addEventListener('click', () => {
        activateModal.classList.remove('active');
        overlay.classList.remove('active');
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
document.addEventListener('DOMContentLoaded', () => {
    const registerUser = () => {
        const username = document.getElementById('new-username').value;
        const password = document.getElementById('new-password').value;

        if (username && password) {
            const userDisplay = document.getElementById('users-display');
            const userElement = document.createElement('div');
            userElement.textContent = `User: ${username}`;
            userElement.className = 'clickable-user';

            // Добавление обработчика клика
            userElement.addEventListener('click', () => {
                alert(`Details for user: ${username}`);
            });

            userDisplay.appendChild(userElement);

            // Отправка данных пользователя на сервер
            sendUserToServer(username, password);

            alert('User registered successfully!');
            document.getElementById('new-username').value = '';
            document.getElementById('new-password').value = '';
        } else {
            alert('Please fill in all fields');
        }
    };

    const sendUserToServer = (username, password) => {
        fetch('http://127.0.0.1:8000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        })
            .then(response => {
                if (response.ok) {
                    console.log('User saved to server');
                } else {
                    console.error('Failed to save user on server');
                }
            })
            .catch(error => console.error('Error:', error));
    };

    // Привязка функции регистрации к кнопке
    const registerButton = document.querySelector('#register-modal-button');
    if (registerButton) {
        registerButton.addEventListener('click', registerUser);
    }
});
const userList = document.getElementById('user-list');
console.log(userList.innerHTML); // Список пользователей
function generateLicense() {
    const username = document.getElementById('license-username').value;

    if (username) {
        const licenseContent = `License for user: ${username}`;
        const blob = new Blob([licenseContent], { type: 'application/octet-stream' });
        const url = URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        a.download = `${username}-license.exe`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

        alert('License generated and downloaded!');
    } else {
        alert('Please enter a username');
    }
}

function activateLicense() {
    const username = document.getElementById('activate-username').value;

    if (username) {
        const licenseContent = `Activated license for user: ${username}`;
        const blob = new Blob([licenseContent], { type: 'application/octet-stream' });
        const url = URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        a.download = `${username}-activated-license.exe`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

        alert('License activated and downloaded!');
        document.getElementById('activate-username').value = '';
    } else {
        alert('Please enter a username');
    }
}