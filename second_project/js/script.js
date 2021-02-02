/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
  movies: [
    'Логан',
    'Лига справедливости',
    'Ла-ла лэнд',
    'Одержимость',
    'Скотт Пилигрим против...',
    'Аквадискотека',
  ],
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
  const adv = document.querySelector('.promo__adv');
  adv.remove();
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
  const listOfFilms = document.querySelectorAll('.promo__interactive-item');
  movieDB.movies.sort();
  listOfFilms.forEach((element, key) => {
    element.textContent = `${key + 1}.${movieDB.movies[key]}`;
  });
};
