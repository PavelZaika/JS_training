document.addEventListener('DOMContentLoaded', () => {
  const tabs = require('./modules/tabs');
  const modal = require('./modules/modal');
  const timer = require('./modules/timer');
  const cards = require('./modules/cards');
  const slider = require('./modules/slider');
  const calc = require('./modules/calc');
  const forms = require('./modules/forms');

  tabs();
  modal();
  timer();
  cards();
  slider();
  calc();
  forms();
});

//запуск сервера   $json-server db/db.json
