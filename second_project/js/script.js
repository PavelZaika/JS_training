'use strict';

document.addEventListener('DOMContentLoaded', e => {
  const movieDB = {
    movies: ['Логан', 'Лига справедливости', 'Ла-ла лэнд', 'Одержимость', 'Скотт Пилигрим против...', 'Аквадискотека'],
  };

  const adv = document.querySelectorAll('.promo__adv img');
  const genre = document.querySelector('.promo__genre');
  const chngBack = document.querySelector('.promo__bg');
  const listOfFilms = document.querySelector('.promo__interactive-list');
  const addForm = document.querySelector('form.add');
  const addInput = addForm.querySelector('.adding__input');
  const checkbox = addForm.querySelector('[type="checkbox"]');

  const sortArr = arr => {
    arr.sort();
  };

  addForm.addEventListener('submit', event => {
    event.preventDefault();

    let newFilm = addInput.value;
    const favorite = checkbox.checked;

    if (newFilm) {
      if (newFilm.length > 21) {
        newFilm = `${newFilm.substring(0, 22)}...`;
      }

      if (favorite) {
        console.log('Добавляем любимый фильм');
      }

      movieDB.movies.push(newFilm);
      sortArr(movieDB.movies);

      chngFlms(movieDB.movies, listOfFilms);
    }

    event.target.reset();
  });

  const remAdv = () => {
    setTimeout(() => {
      adv.forEach(item => {
        item.remove();
      });
    }, 2000);
  };

  const chngGenre = () => {
    setTimeout(() => {
      genre.textContent = 'Драма';
    }, 2000);
  };

  const chngBgr = () => {
    setTimeout(() => {
      chngBack.style.backgroundImage = 'url("img/bg.jpg")';
    }, 2000);
  };

  const chngFlms = (films, parent) => {
    parent.innerHTML = '';
    sortArr(films);

    films.forEach((el, index) => {
      listOfFilms.innerHTML += `
      <li class="promo__interactive-item">${index + 1} ${el}
          <div class="delete"></div>
      </li>
  `;
    });
    document.querySelectorAll('.delete').forEach((btn, i) => {
      btn.addEventListener('click', () => {
        btn.parentElement.remove();
        movieDB.movies.splice(i, 1);

        chngFlms(films, parent);
      });
    });
  };

  remAdv(adv);
  chngBgr();
  chngGenre();
  chngFlms(movieDB.movies, listOfFilms);
});
