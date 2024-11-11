// Переключение языка
document.getElementById('lang-toggle').addEventListener('change', function () {
    const title = document.getElementById('title');
    const description = document.getElementById('description');

    if (this.checked) {
        // Если переключатель на английском
        title.textContent = 'Welcome to my site!';
        description.textContent = 'There will be a lot of cool stuff about games here.';
    } else {
        // Если переключатель на русском
        title.textContent = 'Добро пожаловать на мой сайт!';
        description.textContent = 'Здесь будет много интересного про игры.';
    }
});
