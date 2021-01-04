'use strict';

const numberofFilms = prompt('Сколько фильмов вы уже посмотрели?', 0);

const personalMovieDB = {
  count: numberofFilms,
  movies: {},
  actors: {},
  geners: [],
  privat: false,
  aboutLastFilms() {
    const lastMovie = prompt('Один из последних просмотренных фильмов?', '');
    const ratingofLastMovie = +prompt('На сколько Вы его оцените?', 0);

    if (lastMovie != '') {
      personalMovieDB.movies[lastMovie] = `${ratingofLastMovie}`;
    } else {
      alert('Obj is empty');
    }
  },
};

personalMovieDB.aboutLastFilms();
personalMovieDB.aboutLastFilms();

console.log(personalMovieDB);
console.log(personalMovieDB.movies);
