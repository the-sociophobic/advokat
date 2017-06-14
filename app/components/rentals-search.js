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

  areaCommericalMin: undefined,
  areaCommericalMax: undefined,
  areaCommericalMinValue: undefined,
  areaCommericalMaxValue: undefined,

  priceCommericalMin: undefined,
  priceCommericalMax: undefined,
  priceCommericalMinValue: undefined,
  priceCommericalMaxValue: undefined,

  areaCountryMin: undefined,
  areaCountryMax: undefined,
  areaCountryMinValue: undefined,
  areaCountryMaxValue: undefined,

  priceCountryMin: undefined,
  priceCountryMax: undefined,
  priceCountryMinValue: undefined,
  priceCountryMaxValue: undefined,

  lotMin: undefined,
  lotMax: undefined,
  lotMinValue: undefined,
  lotMaxValue: undefined,
    
  District: [' Адмиралтейский',' Василеостровский',' Выборгский',' Калининский',' Кировский',' Колпинский',' Красногвардейский',' Красносельский',' Кронштадтский',' Курортный',' Московский',' Невский',' Петроградский',' Петродворцовый',' Приморский',' Пушкинский',' Фрунзенский',' Центральный'],

  livingType: [' Квартира', ' Комната', ' Студия'],
  newType: [' Квартира', ' Студия'],
  commericalType: [' Офис', ' Торговые', ' Различного назначения', ' Здания', ' Склады, Гаражи'],
  countryType: [' Дом', ' Таунхаус', ' Участок'],
  
  buyCheck:        undefined,
  rentCheck:       undefined,
  livingCheck:     undefined,
  newCheck:        undefined,
  commericalCheck: undefined,
  countryCheck:    undefined,

  init() {
    this._super(...arguments);
    this.set('roomsMin', 1);
    this.set('roomsMax', /*Math.max.apply(Math, this.get('rentals').map(function(rental){ return rental.rooms; })) + 1*/ 10);
    this.set('roomsMinValue', this.get('roomsMin'));
    this.set('roomsMaxValue', this.get('roomsMax') - 1);

    this.set('areaMin', 0);
    this.set('areaMax',  /*Math.max.apply(Math, this.get('rentals').map(function(rental){ return rental.area;  })) + 10*/ 100);
    this.set('areaMinValue', this.get('areaMin'));
    this.set('areaMaxValue', this.get('areaMax') - 10);

    this.set('priceMin', 1);
    this.set('priceMax', /*Math.max.apply(Math, this.get('rentals').map(function(rental){ return rental.price; })) + 100000*/ 30000000);
    this.set('priceMinValue', this.get('priceMin'));
    this.set('priceMaxValue', this.get('priceMax') - 100000);

    this.set('areaCommericalMin', 0);
    this.set('areaCommericalMax',  /*Math.max.apply(Math, this.get('rentals').map(function(rental){ return rental.area;  })) + 10*/ 100);
    this.set('areaCommericalMinValue', this.get('areaCommericalMin'));
    this.set('areaCommericalMaxValue', this.get('areaCommericalMax') - 10);

    this.set('priceCommericalMin', 1);
    this.set('priceCommericalMax', /*Math.max.apply(Math, this.get('rentals').map(function(rental){ return rental.price; })) + 100000*/ 30000000);
    this.set('priceCommericalMinValue', this.get('priceCommericalMin'));
    this.set('priceCommericalMaxValue', this.get('priceCommericalMax') - 100000);

    this.set('areaCountryMin', 0);
    this.set('areaCountryMax',  /*Math.max.apply(Math, this.get('rentals').map(function(rental){ return rental.area;  })) + 10*/ 100);
    this.set('areaCountryMinValue', this.get('areaCountryMin'));
    this.set('areaCountryMaxValue', this.get('areaCountryMax') - 10);

    this.set('priceCountryMin', 1);
    this.set('priceCountryMax', /*Math.max.apply(Math, this.get('rentals').map(function(rental){ return rental.price; })) + 100000*/ 30000000);
    this.set('priceCountryMinValue', this.get('priceCountryMin'));
    this.set('priceCountryMaxValue', this.get('priceCountryMax') - 100000);

    this.set('lotMin', 0);
    this.set('lotMax',  /*Math.max.apply(Math, this.get('rentals').map(function(rental){ return rental.area;  })) + 10*/ 100);
    this.set('lotMinValue', this.get('lotMin'));
    this.set('lotMaxValue', this.get('lotMax') - 10);
  },
  
  didReceiveAttrs() {
    this.set('buyCheck',        this.get('type')     === 'sell'       ? true : false);
    this.set('rentCheck',       this.get('type')     === 'rent'       ? true : false);
    this.set('livingCheck',     this.get('category') === 'living'     ? true : false);
    this.set('newCheck',        this.get('category') === 'new'        ? true : false);
    this.set('commericalCheck', this.get('category') === 'commerical' ? true : false);
    this.set('countryCheck',    this.get('category') === 'country'    ? true : false);

    
    if (this.get('category') === 'commerical') {
      this.get('filter')(this.get('type'),
                         this.get('category'),
                         this.get('roomsMinValue'),
                         this.get('roomsMaxValue'),
                         this.get('areaCommericalMinValue'),
                         this.get('areaCommericalMaxValue'),
                         this.get('priceCommericalMinValue'),
                         this.get('priceCommericalMaxValue')).then((filterResults) => this.set('results', filterResults)); }
    else if (this.get('category') === 'country') {
      this.get('filter')(this.get('type'),
                         this.get('category'),
                         this.get('lotMinValue'),
                         this.get('lotMaxValue'),
                         this.get('areaCountryMinValue'),
                         this.get('areaCountryMaxValue'),
                         this.get('priceCountryMinValue'),
                         this.get('priceCountryMaxValue')).then((filterResults) => this.set('results', filterResults)); }
    else {
      this.get('filter')(this.get('type'),
                         this.get('category'),
                         this.get('roomsMinValue'),
                         this.get('roomsMaxValue'),
                         this.get('areaMinValue'),
                         this.get('areaMaxValue'),
                         this.get('priceMinValue'),
                         this.get('priceMaxValue')).then((filterResults) => this.set('results', filterResults)); }
  },
  
  actions: {
    buy() {
      this.set('type', 'sell');
    },
    rent() {
      this.set('type', 'rent');
      if (this.get('category') === 'new') {
        this.set('category', 'living'); }
    },
    living() {
      this.set('category', 'living');
    },
    new() {
      this.set('category', 'new');
    },
    commerical() {
      this.set('category', 'commerical');
    },
    country() {
      this.set('category', 'country');
    },
    
    commit() {
      if (this.get('category') === 'commerical') {
        this.get('filter')(this.get('type'),
                           this.get('category'),
                           this.get('roomsMinValue'),
                           this.get('roomsMaxValue'),
                           this.get('areaCommericalMinValue'),
                           this.get('areaCommericalMaxValue'),
                           this.get('priceCommericalMinValue'),
                           this.get('priceCommericalMaxValue')).then((filterResults) => this.set('results', filterResults)); }
      else if (this.get('category') === 'country') {
        this.get('filter')(this.get('type'),
                           this.get('category'),
                           this.get('lotMinValue'),
                           this.get('lotMaxValue'),
                           this.get('areaCountryMinValue'),
                           this.get('areaCountryMaxValue'),
                           this.get('priceCountryMinValue'),
                           this.get('priceCountryMaxValue')).then((filterResults) => this.set('results', filterResults)); }
      else {
        this.get('filter')(this.get('type'),
                           this.get('category'),
                           this.get('roomsMinValue'),
                           this.get('roomsMaxValue'),
                           this.get('areaMinValue'),
                           this.get('areaMaxValue'),
                           this.get('priceMinValue'),
                           this.get('priceMaxValue')).then((filterResults) => this.set('results', filterResults)); }
    },
  }
});
