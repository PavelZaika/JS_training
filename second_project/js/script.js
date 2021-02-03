/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов 


1. Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" -
   новый фильм добавляется в список. Страница не должна перезагружаться.
   Новый фильм должен добавляться в movieDB.movies.
   Для получения доступа к значению input - обращаемся к нему как input.value;
   P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2. Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3. При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4. Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение:
   "Добавляем любимый фильм"

5. Фильмы должны быть отсортированы по алфавиту \*/





'use strict';

const movieDB = {
  movies: ['Логан', 'Лига справедливости', 'Ла-ла лэнд', 'Одержимость', 'Скотт Пилигрим против...', 'Аквадискотека'],
};

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    remAdv();
    chngGenre();
    chngBgr();
    chngFlms();
  }, 2000);
});

const remAdv = () => {
  //Первый вариант
  //   const adv = document.querySelector('.promo__adv');
  //   adv.remove();

  // Второй вариант. Визуально получается лучше в результате
  const adv = document.querySelectorAll('.promo__adv img');
  adv.forEach(item => {
    item.remove();
  });
};

const chngGenre = () => {
  const genre = document.querySelector('.promo__genre');
  genre.textContent = 'Драма';
};

const chngBgr = () => {
  const chngBgr = document.querySelector('.promo__bg');
  chngBgr.style.backgroundImage = 'url("img/bg.jpg")';
};

const chngFlms = () => {
  //Первый вариант
  //   const listOfFilms = document.querySelectorAll('.promo__interactive-item');
  //   movieDB.movies.sort();
  //   listOfFilms.forEach((element, key) => {
  //     element.textContent = `${key + 1}.${movieDB.movies[key]}`;
  //   });

  //Второй вариант. Тут отталкиваимся от массива фильмов, а не от листа на странице и это вернее
  const listOfFilms = document.querySelector('.promo__interactive-list');
  listOfFilms.innerHTML = '';
  movieDB.movies.sort().forEach((el, index) => {
    const newEl = document.createElement('li');
    newEl.className = 'promo__interactive-item';
    newEl.textContent = `${index + 1}.${el}`;
    listOfFilms.append(newEl);
  });
};
