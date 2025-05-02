document.addEventListener('DOMContentLoaded', function() {
    const yearBtn = document.getElementById('year-btn');
    const monthBtn = document.getElementById('month-btn');
    const yearDropdown = document.getElementById('year-dropdown');
    const monthDropdown = document.getElementById('month-dropdown');

    // Генерация годов (от текущего до 2000)
    const currentYear = new Date().getFullYear();
    for (let i = currentYear; i >= 2000; i--) {
        const yearItem = document.createElement('li');
        yearItem.textContent = i;
        yearDropdown.appendChild(yearItem);
    }

    // Генерация месяцев
    const months = [
        "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
        "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
    ];
    months.forEach(month => {
        const monthItem = document.createElement('li');
        monthItem.textContent = month;
        monthDropdown.appendChild(monthItem);
    });

    // Обработчики клика по кнопке "Год"
    yearBtn.addEventListener('click', function(e) {
        e.stopPropagation();

        const isOpen = yearDropdown.style.display === 'block';
        yearDropdown.style.display = isOpen ? 'none' : 'block';
        monthDropdown.style.display = 'none';

        yearBtn.classList.toggle('active', !isOpen);
        monthBtn.classList.remove('active');
    });

    // Обработчики клика по кнопке "Месяц"
    monthBtn.addEventListener('click', function(e) {
        e.stopPropagation();

        const isOpen = monthDropdown.style.display === 'block';
        monthDropdown.style.display = isOpen ? 'none' : 'block';
        yearDropdown.style.display = 'none';

        monthBtn.classList.toggle('active', !isOpen);
        yearBtn.classList.remove('active');
    });

    // Выбор года
    yearDropdown.addEventListener('click', function(e) {
        if (e.target.tagName === 'LI') {
            yearBtn.querySelector('p').textContent = e.target.textContent;
            yearDropdown.style.display = 'none';
            yearBtn.classList.remove('active');
        }
    });

    // Выбор месяца
    monthDropdown.addEventListener('click', function(e) {
        if (e.target.tagName === 'LI') {
            monthBtn.querySelector('p').textContent = e.target.textContent;
            monthDropdown.style.display = 'none';
            monthBtn.classList.remove('active');
        }
    });

    // Клик вне кнопок — закрывает оба меню
    document.addEventListener('click', function(e) {
        if (!yearBtn.contains(e.target)) {
            yearDropdown.style.display = 'none';
            yearBtn.classList.remove('active');
        }
        if (!monthBtn.contains(e.target)) {
            monthDropdown.style.display = 'none';
            monthBtn.classList.remove('active');
        }
    });
});