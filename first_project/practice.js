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
      const ratingofLastMovie = +prompt(
        'На сколько Вы его оцените от 0 до 10?',
        0
      );

      if (
        lastMovie != null &&
        lastMovie != '' &&
        lastMovie.length < 50 &&
        ratingofLastMovie != null &&
        ratingofLastMovie <= 10 &&
        typeof ratingofLastMovie == 'number'
      ) {
        personalMovieDB.movies[lastMovie] = `${ratingofLastMovie}`;
      } else {
        alert('Не верный ввод!');
        i--;
      }
    }
  },
  checkCount() {
    if (personalMovieDB.count < 10) {
      alert('Просмотрено мало фильмов!');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
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
