/* Задания на урок:

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

document.addEventListener('DOMContentLoaded', e => {
  const movieDB = {
    movies: ['Логан', 'Лига справедливости', 'Ла-ла лэнд', 'Одержимость', 'Скотт Пилигрим против...', 'Аквадискотека'],
  };

  const adv = document.querySelectorAll('.promo__adv img');
  const genre = document.querySelector('.promo__genre');
  const chngBack = document.querySelector('.promo__bg');
  const listOfFilms = document.querySelector('.promo__interactive-list');
  const btn = document.querySelector('button');
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
    //Первый вариант
    //   const adv = document.querySelector('.promo__adv');
    //   adv.remove();

    // Второй вариант. Визуально получается лучше в результате

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
  chngFlms(movieDB.movies, listOfFilms);
});
