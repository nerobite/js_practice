const rotators = document.querySelectorAll('.rotator');

rotators.forEach((rotator) => {
  const cases = rotator.querySelectorAll('.rotator__case');
  let index = 0;

  function rotate() {
    // убираем активный класс
    cases[index].classList.remove('rotator__case_active');

    // считаем следующий индекс
    index = (index + 1) % cases.length;

    const current = cases[index];

    // добавляем активный класс
    current.classList.add('rotator__case_active');

    // применяем цвет
    if (current.dataset.color) {
      current.style.color = current.dataset.color;
    }

    // берем скорость или 1000 по умолчанию
    const speed = Number(current.dataset.speed) || 1000;

    setTimeout(rotate, speed);
  }

  // стартуем с первого активного элемента
  const startSpeed = Number(cases[index].dataset.speed) || 1000;
  setTimeout(rotate, startSpeed);
});
