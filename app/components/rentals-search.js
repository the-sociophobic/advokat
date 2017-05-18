import Ember from 'ember';

export default Ember.Component.extend({
  roomsMin: 2,
  roomsMax: 15,
  areaMin: 50,
  areaMax: 400,
  priceMin: 10000000,
  priceMax: 50000000,
  
  livingType: [' Квартира', ' Комната', ' Студия'],
  buildingType: [' Квартира'],
  commericalType: [' Офис', ' Торговые', ' Различного назначения', ' Здания', ' Склады, Гаражи'],
  countryType: [' Дом', ' Таунхаус', ' Участок'],
  District: [' Адмиралтейский',' Василеостровский',' Выборгский',' Калининский',' Кировский',' Колпинский',' Красногвардейский',' Красносельский',' Кронштадтский',' Курортный',' Московский',' Невский',' Петроградский',' Петродворцовый',' Приморский',' Пушкинский',' Фрунзенский',' Центральный'],
  
  isHidden: false,
  fullWidth: false,
  
  Wide() {
    if ($(window).scrollTop() > 128) {
      this.set('isWide', true);}
    else {
      this.set('isWide', false);}
  },
  
  actions: {
    Hide() {
      this.set('isHidden', true);
    },
    unHide() {
      this.set('isHidden', false);
    }
  },
  didInsertElement() {
    this._super(...arguments);
    var images = document.querySelectorAll('.image-container img');
    
    for(var i = 0, len = images.length; i < len; i++) {
      images[i].addEventListener('load', function() {
        this.className += (this.width / this.height > 240 / 188) ? ' landscape' : ' portrait';
      });
    }
  }    
});
