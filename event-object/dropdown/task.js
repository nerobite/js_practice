document.addEventListener('DOMContentLoaded', () => {
    // Находим все элементы dropdown на странице
    const dropdowns = document.querySelectorAll('.dropdown');
    
    // Для каждого dropdown создаем обработчики событий
    dropdowns.forEach(dropdown => {
        const valueElement = dropdown.querySelector('.dropdown__value');
        const listElement = dropdown.querySelector('.dropdown__list');
        const items = dropdown.querySelectorAll('.dropdown__item');
        
        // Обработчик клика на кнопку (элемент с выбранным значением)
        valueElement.addEventListener('click', (event) => {
            // Переключаем активное состояние списка
            listElement.classList.toggle('dropdown__list_active');
            
            // Закрываем другие открытые dropdown на странице
            closeOtherDropdowns(dropdown);
        });
        
        // Обработчики кликов на элементы списка
        items.forEach(item => {
            item.addEventListener('click', (event) => {
                // Предотвращаем переход по ссылке
                event.preventDefault();
                
                // Находим ссылку внутри элемента
                const link = item.querySelector('.dropdown__link');
                
                // Обновляем текст выбранного значения
                valueElement.textContent = link.textContent.trim();
                
                // Закрываем список
                listElement.classList.remove('dropdown__list_active');
            });
        });
    });
    
    // Функция для закрытия других открытых dropdown
    function closeOtherDropdowns(currentDropdown) {
        dropdowns.forEach(otherDropdown => {
            if (otherDropdown !== currentDropdown) {
                const otherList = otherDropdown.querySelector('.dropdown__list');
                otherList.classList.remove('dropdown__list_active');
            }
        });
    }
    
    // Закрытие dropdown при клике вне его области
    document.addEventListener('click', (event) => {
        // Проверяем, был ли клик вне dropdown
        if (!event.target.closest('.dropdown')) {
            // Закрываем все dropdown
            dropdowns.forEach(dropdown => {
                const listElement = dropdown.querySelector('.dropdown__list');
                listElement.classList.remove('dropdown__list_active');
            });
        }
    });
});