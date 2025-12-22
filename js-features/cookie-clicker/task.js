// Получаем элементы
const cookie = document.getElementById('cookie');
const counter = document.getElementById('clicker__counter');
const clickerStatus = document.querySelector('.clicker__status');

// Создаем элемент для скорости клика и вставляем его после счетчика
let speedElement = document.createElement('div');
speedElement.className = 'clicker__speed';
speedElement.innerHTML = 'Скорость клика: <span id="clicker__speed-value">0</span>';

// Вставляем элемент скорости сразу после элемента со счетчиком
counter.parentNode.insertAdjacentElement('afterend', speedElement);

const speedValue = document.getElementById('clicker__speed-value');

// Переменные для отслеживания времени
let lastClickTime = Date.now();
let clickCount = 0;

// Функция для расчета скорости
function calculateSpeed() {
    const now = Date.now();
    const timeDiff = (now - lastClickTime) / 1000; // в секундах
    
    if (timeDiff > 0) {
        // Обновляем скорость
        speedValue.textContent = (1 / timeDiff).toFixed(2);
    }
    
    lastClickTime = now;
}

// Обработчик клика по печеньке
cookie.onclick = function() {
    // Увеличиваем счетчик
    clickCount++;
    counter.textContent = clickCount;
    
    // Рассчитываем скорость
    calculateSpeed();
    
    // Изменяем размер печеньки
    if (clickCount % 2 === 1) {
        // Увеличиваем при нечетных кликах
        cookie.width = 220;
        cookie.height = 220;
        cookie.style.transition = 'transform 0.1s';
        cookie.style.transform = 'scale(1.1)';
    } else {
        // Уменьшаем при четных кликах
        cookie.width = 180;
        cookie.height = 180;
        cookie.style.transition = 'transform 0.1s';
        cookie.style.transform = 'scale(0.9)';
    }
    
    // Возвращаем к нормальному размеру через небольшое время
    setTimeout(() => {
        cookie.width = 200;
        cookie.height = 200;
        cookie.style.transform = 'scale(1)';
    }, 100);
};