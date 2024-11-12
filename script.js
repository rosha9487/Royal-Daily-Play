// Переключение языка
document.getElementById('lang-toggle').addEventListener('change', function () {
    const title = document.getElementById('title');
    const slogan = document.getElementById('slogan');
    const description = document.getElementById('description');
    const contactsText = document.getElementById('contacts-text');

    if (this.checked) {
        // Если переключатель на английском
        title.textContent = 'Royal Daily Play (RDP) Clan';
        slogan.textContent = 'Welcome to our Pocket Ants clan!';
        description.textContent = 'The Royal Daily Play (RDP) clan is a community of players united with the common goal: to conquer the world of Pocket Ants! We welcome new players and help them get started.';
        contactsText.textContent = 'For more information, contact the clan leader in-game or join our Discord server.';
    } else {
        // Если переключатель на русском
        title.textContent = 'Клан Royal Daily Play (RDP)';
        slogan.textContent = 'Добро пожаловать в наш клан Pocket Ants!';
        description.textContent = 'Клан Royal Daily Play (RDP) — сообщество игроков, объединённых общей целью: завоевать мир Pocket Ants! Мы рады принять новичков и помочь им освоиться.';
        contactsText.textContent = 'Для дополнительной информации свяжитесь с лидером клана в игре или присоединяйтесь к нашему серверу Discord.';
    }
});
