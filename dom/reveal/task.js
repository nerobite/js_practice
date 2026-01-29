const reveals = document.querySelectorAll('.reveal');

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  reveals.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < windowHeight) {
      element.classList.add('reveal_active');
    }
  });
}

// реагируем на прокрутку
window.addEventListener('scroll', revealOnScroll);

// сразу проверяем элементы при загрузке страницы
revealOnScroll();
