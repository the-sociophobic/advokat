import Ember from 'ember';

export default Ember.Component.extend({
  roomsMin: 2,
  roomsMax: 15,
  areaMin: 50,
  areaMax: 400,
  priceMin: 10000000,
  priceMax: 50000000,
  
  flatType: ['Квартира', 'Комната', 'Студия'],
  District: ['Адмиралтейский','Василеостровский','Выборгский','Калининский','Кировский','Колпинский','Красногвардейский','Красносельский','Кронштадтский','Курортный','Московский','Невский','Петроградский','Петродворцовый','Приморский','Пушкинский','Фрунзенский','Центральный'],
  
  isHidden: false,
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
        this.className += (this.width > this.height) ? ' landscape' : ' portrait';
      });
    }
  }    
});
