function enterApp() {
    document.getElementById('login-page').classList.add('hidden');
    document.getElementById('app-page').classList.remove('hidden');
}

document.addEventListener('DOMContentLoaded', () => {
    const settingsButton = document.getElementById('settings-icon');
    const backupMenu = document.getElementById('backup-menu');

    // Убедитесь, что меню скрыто при загрузке
    backupMenu.style.display = 'none';

    // Обработчик клика на шестерёнку
    settingsButton.addEventListener('click', (event) => {
        event.stopPropagation();
        const isVisible = backupMenu.style.display === 'block';
        backupMenu.style.display = isVisible ? 'none' : 'block';
    });

    // Закрытие меню при клике вне области
    document.addEventListener('click', (event) => {
        if (!backupMenu.contains(event.target) && event.target !== settingsButton) {
            backupMenu.style.display = 'none';
        }
    });
});

function triggerFileInput() {
    const fileInput = document.getElementById('file-input');
    fileInput.click();
}

function handleFileUpload(event) {
    const files = event.target.files;
    const dropzone = document.getElementById('file-dropzone');
    dropzone.value = Array.from(files).map(file => file.name).join('\n');
}

const dropzone = document.getElementById('file-dropzone');

dropzone.addEventListener('dragover', (event) => {
    event.preventDefault();
    dropzone.style.borderColor = '#007BFF';
});

dropzone.addEventListener('dragleave', () => {
    dropzone.style.borderColor = '#ccc';
});

dropzone.addEventListener('drop', (event) => {
    event.preventDefault();
    dropzone.style.borderColor = '#ccc';

    const files = event.dataTransfer.files;
    const fileInput = document.getElementById('file-input');
    fileInput.files = files;

    dropzone.value = Array.from(files).map(file => file.name).join('\n');
});