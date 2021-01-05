'use strict';

let numberofFilms = +prompt('Сколько фильмов вы уже посмотрели?', 0);

const personalMovieDB = {
  count: numberofFilms,
  movies: {},
  actors: {},
  geners: [],
  privat: false,
  aboutLastFilms() {
    for (let i = 0; i < 2; i++) {
      const lastMovie = prompt('Один из последних просмотренных фильмов?', '');

      if (lastMovie == '' || lastMovie.length > 50) {
        alert('Название фильма не должно быть пустым или больше 50 символов!');
        personalMovieDB.aboutLastFilms();
      } else {
        const ratingofLastMovie = prompt('На сколько Вы его оцените?', 0);
        personalMovieDB.movies[lastMovie] = `${ratingofLastMovie}`;
      }
    }
  },
  checkCount() {
    if (personalMovieDB.count < 10) {
      alert('Просмотрено мало фильмов!');
    } else if (personalMovieDB.count < 30) {
      alert('Вы классический зритель!');
    } else if (personalMovieDB.count >= 30) {
      alert('Вы Киноман!');
    } else {
      alert('Произошла ошибка!!!');
    }
  },
};

personalMovieDB.checkCount();
personalMovieDB.aboutLastFilms();

console.log(personalMovieDB);
console.log(personalMovieDB.movies);
