function cards() {
// Использование классов для карточек

class MenuCard {
  constructor(src, alt, title, descr, price, parentSelector, ...classes) {
    this.src = src;
    this.alt = alt;
    this.title = title;
    this.descr = descr;
    this.price = price;
    this.transfer = 77;
    this.clasess = classes;
    this.parent = document.querySelector(parentSelector);
    this.changeToRUB();
  }

  changeToRUB() {
    this.price = this.price * this.transfer;
  }
  render() {
    const element = document.createElement('div');
    if (this.clasess.length === 0) {
      this.classes = 'menu__item';
      element.classList.add(this.classes);
    } else {
      this.clasess.forEach(className => {
        element.classList.add(className);
      });
    }

    element.innerHTML = `
    
      <img src=${this.src} alt=${this.alt}>
     <h3 class="menu__item-subtitle">${this.title}</h3>
     <div class="menu__item-descr">${this.descr}</div>
     <div class="menu__item-divider"></div>
     <div class="menu__item-price">
        <div class="menu__item-cost">Цена:</div>
        <div class="menu__item-total"><span>${this.price}</span> руб/день</div>
     </div>
    
    `;
    this.parent.append(element);
  }
}

const getResource = async url => {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, status: ${res.status}`);
  }

  return await res.json();
};

getResource('http://localhost:3000/menu').then(data => {
  data.forEach(({ img, altimg, title, descr, price }) => {
    new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
  });
});
}

module.exports = cards;