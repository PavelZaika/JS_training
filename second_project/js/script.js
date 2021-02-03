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
  const inputForm = document.querySelector('.adding__input');
  const buttonItems = document.querySelectorAll('.delete');
  const elCheck = document.querySelector('.yes');

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

  const chngFlms = () => {
    //Первый вариант
    //   const listOfFilms = document.querySelectorAll('.promo__interactive-item');
    //   movieDB.movies.sort();
    //   listOfFilms.forEach((element, key) => {
    //     element.textContent = `${key + 1}.${movieDB.movies[key]}`;
    //   });

    //Второй вариант. Тут отталкиваимся от массива фильмов, а не от листа на странице и это вернее

    listOfFilms.innerHTML = '';
    movieDB.movies.sort().forEach((el, index) => {
      listOfFilms.innerHTML += `
      <li class="promo__interactive-item">${index + 1} ${el}
          <div class="delete"></div>
      </li>
  `;
    });
  };

  const addFilmbyForm = () => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      if (inputForm.value != '') {
        if (inputForm.value.length < 21) {
          movieDB.movies.push(inputForm.value);
          chngFlms();
          inputForm.value = '';
        } else {
          const subStrInput = inputForm.value.substr(0, 21) + '...';
          movieDB.movies.push(subStrInput);
          chngFlms();
          inputForm.value = '';
        }
      } else {
        alert('Add movie');
      }
    });
  };

  const delFromList = () => {
    buttonItems.forEach((buttonItem, index) => {
      buttonItem.addEventListener(`click`, e => {
        e.preventDefault();
        buttonItem.parentElement.remove();
        movieDB.movies.splice(index, 1);

        chngFlms();
      });
    });
  };

  const checkedfav = () => {
    elCheck.previousElementSibling.addEventListener('input', e => {
      if (e.target.checked) {
        console.log('Добавляем любимый фильм');
      }
    });
  };

  e.preventDefault();
  remAdv();
  chngGenre();
  chngBgr();
  chngFlms();
  addFilmbyForm();
  delFromList();
  checkedfav();
});
