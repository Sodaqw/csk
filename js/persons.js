document.addEventListener('DOMContentLoaded', function() {
    const sportBtn = document.getElementById('sport-btn');
    const sportDropdown = document.getElementById('sport-dropdown');

    // Список видов спорта
    const sports = [
        "Футбол", "Хоккей", "Бокс", "Плавание", "Баскетбол", "Гимнастика", "Лёгкая атлетика", "Теннис"
    ];

    // Генерация списка
    sports.forEach(sport => {
        const sportItem = document.createElement('li');
        sportItem.textContent = sport;
        sportDropdown.appendChild(sportItem);
    });

    // Открытие/закрытие списка
    sportBtn.addEventListener('click', function(e) {
        e.stopPropagation();

        const isOpen = sportDropdown.style.display === 'block';
        sportDropdown.style.display = isOpen ? 'none' : 'block';

        sportBtn.classList.toggle('active', !isOpen);
    });

    // Выбор вида спорта
    sportDropdown.addEventListener('click', function(e) {
        if (e.target.tagName === 'LI') {
            sportBtn.querySelector('p').textContent = e.target.textContent;
            sportDropdown.style.display = 'none';
            sportBtn.classList.remove('active');
        }
    });

    // Закрытие при клике вне меню
    document.addEventListener('click', function(e) {
        if (!sportBtn.contains(e.target)) {
            sportDropdown.style.display = 'none';
            sportBtn.classList.remove('active');
        }
    });
});