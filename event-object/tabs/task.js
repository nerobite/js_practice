document.addEventListener('DOMContentLoaded', () => {
    // Находим все блоки с вкладками на странице
    const tabsContainers = document.querySelectorAll('.tabs');
    
    tabsContainers.forEach(tabsContainer => {
        // Находим все вкладки и контент внутри текущего контейнера
        const tabs = tabsContainer.querySelectorAll('.tab');
        const contents = tabsContainer.querySelectorAll('.tab__content');
        
        // Добавляем обработчик клика на каждую вкладку
        tabs.forEach((tab, index) => {
            tab.addEventListener('click', () => {
                // Удаляем активный класс у всех вкладок
                tabs.forEach(t => t.classList.remove('tab_active'));
                
                // Удаляем активный класс у всего контента
                contents.forEach(c => c.classList.remove('tab__content_active'));
                
                // Добавляем активный класс нажатой вкладке
                tab.classList.add('tab_active');
                
                // Показываем соответствующий контент
                contents[index].classList.add('tab__content_active');
            });
        });
    });
});