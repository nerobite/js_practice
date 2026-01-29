const book = document.getElementById('book');
const fontSizes = document.querySelectorAll('.font-size');

fontSizes.forEach((size) => {
  size.addEventListener('click', (event) => {
    event.preventDefault();

    // убираем активный класс у всех кнопок
    fontSizes.forEach(item =>
      item.classList.remove('font-size_active')
    );

    // делаем текущую кнопку активной
    size.classList.add('font-size_active');

    // сбрасываем классы размера шрифта у книги
    book.classList.remove('book_fs-small', 'book_fs-big');

    // определяем размер
    const fontSize = size.dataset.size;

    if (fontSize === 'small') {
      book.classList.add('book_fs-small');
    }

    if (fontSize === 'big') {
      book.classList.add('book_fs-big');
    }
  });
});
