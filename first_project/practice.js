'use strict';

let numberofFilms = prompt('Сколько фильмов вы уже посмотрели?', 0);

const personalMovieDB = {
  count: numberofFilms,
  movies: {},
  actors: {},
  geners: [],
  privat: false,
};

let lastMovie = prompt('Один из последних просмотренных фильмов?', 0);
let ratingofLastMovie = prompt('На сколько Вы его оцените?', 0);

if (lastMovie !== 0) {
  personalMovieDB.movies[lastMovie] = `${ratingofLastMovie}`;
} else {
  alert('Obj is empty');
}

console.log(personalMovieDB.movies);
console.log(personalMovieDB.count);
