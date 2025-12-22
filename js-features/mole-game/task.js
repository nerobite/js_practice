// Получаем элементы счетчиков
const deadCounter = document.getElementById('dead');
const lostCounter = document.getElementById('lost');

// Функция для получения лунки по индексу
function getHole(index) {
    return document.getElementById(`hole${index}`);
}

// Функция сброса игры
function resetGame(message = '') {
    if (message) {
        alert(message);
    }
    deadCounter.textContent = '0';
    lostCounter.textContent = '0';
}

// Регистрируем обработчики событий для всех лунок
for (let i = 1; i <= 9; i++) {
    const hole = getHole(i);
    
    hole.onclick = function() {
        // Проверяем, есть ли в лунке крот
        if (hole.classList.contains('hole_has-mole')) {
            // Увеличиваем счет убитых кротов
            let dead = parseInt(deadCounter.textContent);
            deadCounter.textContent = dead + 1;
            
            // Проверяем победу
            if (parseInt(deadCounter.textContent) === 10) {
                resetGame('Поздравляем! Вы убили 10 кротов и победили!');
            }
        } else {
            // Увеличиваем счет промахов
            let lost = parseInt(lostCounter.textContent);
            lostCounter.textContent = lost + 1;
            
            // Проверяем поражение
            if (parseInt(lostCounter.textContent) === 5) {
                resetGame('К сожалению, вы проиграли! 5 промахов.');
            }
        }
    };
}