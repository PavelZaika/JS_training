'use strict';

let numberofFilms;

const start = () => {
  numberofFilms = +prompt('Сколько фильмов вы уже посмотрели?', 0);

  while (numberofFilms == '' || numberofFilms == null || isNaN(numberofFilms)) {
    numberofFilms = +prompt('Сколько фильмов вы уже посмотрели?', 0);
  }
};

start();

const personalMovieDB = {
  count: numberofFilms,
  movies: {},
  actors: {},
  geners: [],
  privat: false,
};

const aboutLastFilms = () => {
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
      !isNaN(ratingofLastMovie)
    ) {
      personalMovieDB.movies[lastMovie] = `${ratingofLastMovie}`;
    } else {
      alert('Не верный ввод!');
      i--;
    }
  }
};

const checkCount = () => {
  if (personalMovieDB.count < 10) {
    alert('Просмотрено мало фильмов!');
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert('Вы классический зритель!');
  } else if (personalMovieDB.count >= 30) {
    alert('Вы Киноман!');
  } else {
    alert('Произошла ошибка!!!');
  }
};

const showMyDB = (privateStatus, obj) => {
  if (!privateStatus) {
    console.log('Your test object!');
    console.log(obj);
  } else {
    console.log('Object is private');
  }
};

const writeYourGenres = () => {
  for (let i = 1; i <= 3; i++) {
    const favoriteGenres = prompt(`Ваш любимый жанр под номером ${i}`, '');

    if (
      favoriteGenres != null &&
      favoriteGenres != '' &&
      favoriteGenres.length < 10 &&
      isNaN(favoriteGenres)
    ) {
      personalMovieDB.geners.push(favoriteGenres);
    } else {
      alert('Не верный ввод!');
      i--;
    }
  }
};

checkCount();
aboutLastFilms();
showMyDB(personalMovieDB.privat, personalMovieDB);
writeYourGenres();

console.log(personalMovieDB.movies);
console.log(personalMovieDB.geners);
