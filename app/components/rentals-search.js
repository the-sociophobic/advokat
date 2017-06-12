import Ember from 'ember';

export default Ember.Component.extend({
  roomsMin: undefined,
  roomsMax: undefined,
  roomsMinValue: undefined,
  roomsMaxValue: undefined,

  areaMin: undefined,
  areaMax: undefined,
  areaMinValue: undefined,
  areaMaxValue: undefined,

  priceMin: undefined,
  priceMax: undefined,
  priceMinValue: undefined,
  priceMaxValue: undefined,
    
  District: [' Адмиралтейский',' Василеостровский',' Выборгский',' Калининский',' Кировский',' Колпинский',' Красногвардейский',' Красносельский',' Кронштадтский',' Курортный',' Московский',' Невский',' Петроградский',' Петродворцовый',' Приморский',' Пушкинский',' Фрунзенский',' Центральный'],

  livingType: [' Квартира', ' Комната', ' Студия'],
  newType: [' Квартира'],
  commericalType: [' Офис', ' Торговые', ' Различного назначения', ' Здания', ' Склады, Гаражи'],
  countryType: [' Дом', ' Таунхаус', ' Участок'],
  
  buyCheck:        true,
  rentCheck:       false,
  livingCheck:     true,
  newCheck:        false,
  commericalCheck: false,
  countryCheck:    false,
  
  init() {
    this._super(...arguments);
    this.set('roomsMin', 1);
    this.set('roomsMax', /*Math.max.apply(Math, this.get('rentals').map(function(rental){ return rental.rooms; })) + 1*/ 10);
    this.set('areaMin', 0);
    this.set('areaMax',  /*Math.max.apply(Math, this.get('rentals').map(function(rental){ return rental.area;  })) + 10*/ 100);
    this.set('priceMin', 1);
    this.set('priceMax', /*Math.max.apply(Math, this.get('rentals').map(function(rental){ return rental.price; })) + 100000*/ 30000000);

    this.set('roomsMinValue', this.get('roomsMin'));
    this.set('roomsMaxValue', this.get('roomsMax') - 1);
    this.set('areaMinValue', this.get('areaMin'));
    this.set('areaMaxValue', this.get('areaMax') - 10);
    this.set('priceMinValue', this.get('priceMin'));
    this.set('priceMaxValue', this.get('priceMax') - 100000);
  },
  
  actions: {
    buy() {
      this.set('buyCheck',  true);
      this.set('rentCheck', false);
    },
    rent() {
      this.set('buyCheck',  false);
      this.set('rentCheck', true);
    },
    living() {
      this.set('livingCheck',     true);
      this.set('newCheck',        false);
      this.set('commericalCheck', false);
      this.set('countryCheck',    false);
    },
    new() {
      this.set('livingCheck',     false);
      this.set('newCheck',        true);
      this.set('commericalCheck', false);
      this.set('countryCheck',    false);
    },
    commerical() {
      this.set('livingCheck',     false);
      this.set('newCheck',        false);
      this.set('commericalCheck', true);
      this.set('countryCheck',    false);
    },
    country() {
      this.set('livingCheck',     false);
      this.set('newCheck',        false);
      this.set('commericalCheck', false);
      this.set('countryCheck',    true);
    }    
  },
  
  didInsertElement() {
    this._super(...arguments);
    var images = document.querySelectorAll('.image-container img');
    
    for(var i = 0, len = images.length; i < len; i++) {
      images[i].addEventListener('load', function() {
        this.className += (this.width / this.height > 240 / 188) ? ' landscape' : ' portrait'; });
    }
  }    
});
