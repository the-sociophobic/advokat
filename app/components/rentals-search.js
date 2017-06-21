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
  priceMinRent: undefined,
  priceMaxRent: undefined,
  priceMinValueRent: undefined,
  priceMaxValueRent: undefined,

  areaCommericalMin: undefined,
  areaCommericalMax: undefined,
  areaCommericalMinValue: undefined,
  areaCommericalMaxValue: undefined,

  priceCommericalMin: undefined,
  priceCommericalMax: undefined,
  priceCommericalMinValue: undefined,
  priceCommericalMaxValue: undefined,
  priceCommericalMinRent: undefined,
  priceCommericalMaxRent: undefined,
  priceCommericalMinValueRent: undefined,
  priceCommericalMaxValueRent: undefined,

  areaCountryMin: undefined,
  areaCountryMax: undefined,
  areaCountryMinValue: undefined,
  areaCountryMaxValue: undefined,

  priceCountryMin: undefined,
  priceCountryMax: undefined,
  priceCountryMinValue: undefined,
  priceCountryMaxValue: undefined,
  priceCountryMinRent: undefined,
  priceCountryMaxRent: undefined,
  priceCountryMinValueRent: undefined,
  priceCountryMaxValueRent: undefined,

  lotMin: undefined,
  lotMax: undefined,
  lotMinValue: undefined,
  lotMaxValue: undefined,
    
  districtCity: [' Адмиралтейский',' Василеостровский',' Выборгский',' Калининский',' Кировский',' Колпинский',' Красногвардейский',' Красносельский',' Кронштадтский',' Курортный',' Московский',' Невский',' Петроградский',' Петродворцовый',' Приморский',' Пушкинский',' Фрунзенский',' Центральный'],
  districtCityChecked: [],
  districtCountry: ['Бокситогорский', 'Волосовский', 'Волховский', 'Всеволожский', 'Выборгский', 'Гатчинский', 'Кингисеппский', 'Киришский', 'Кировский', 'Лодейнопольский', 'Ломоносовский', 'Лужский', 'Подпорожский', 'Приозерский', 'Сланцевский', 'Тихвинский', 'Тосненский'],
  districtCountryChecked: [],

  livingOptions: [' Квартира', ' Комната', ' Студия'],
  livingChecked: [],
  newOptions: [' Квартира', ' Студия'],
  newChecked: [],
  commericalOptions: [' Офис', ' Торговые', ' Различного назначения', ' Здания', ' Склады, Гаражи'],
  commericalChecked: [],
  countryOptions: [' Дом', ' Таунхаус', ' Участок'],
  countryChecked: [],
  
  buyCheck:        undefined,
  rentCheck:       undefined,
  livingCheck:     undefined,
  newCheck:        undefined,
  commericalCheck: undefined,
  countryCheck:    undefined,

  init() {
    this._super(...arguments);
    this.set('roomsMin', 1);
    this.set('roomsMax', /*Math.max.apply(Math, this.get('rentals').map(function(rental){ return rental.rooms; })) + 1*/ 9);
    this.set('roomsMinValue', this.get('roomsMin'));
    this.set('roomsMaxValue', this.get('roomsMax'));

    this.set('areaMin', 0);
    this.set('areaMax',  /*Math.max.apply(Math, this.get('rentals').map(function(rental){ return rental.area;  })) + 10*/ 99);
    this.set('areaMinValue', this.get('areaMin'));
    this.set('areaMaxValue', this.get('areaMax'));

    this.set('priceMin', 1);
    this.set('priceMax', /*Math.max.apply(Math, this.get('rentals').map(function(rental){ return rental.price; })) + 100000*/ 30000000);
    this.set('priceMinValue', this.get('priceMin'));
    this.set('priceMaxValue', this.get('priceMax'));
    this.set('priceMinRent', 1);
    this.set('priceMaxRent', /*Math.max.apply(Math, this.get('rentals').map(function(rental){ return rental.price; })) + 100000*/ 300000);
    this.set('priceMinValueRent', this.get('priceMinRent'));
    this.set('priceMaxValueRent', this.get('priceMaxRent'));

    this.set('areaCommericalMin', 0);
    this.set('areaCommericalMax',  /*Math.max.apply(Math, this.get('rentals').map(function(rental){ return rental.area;  })) + 10*/ 100);
    this.set('areaCommericalMinValue', this.get('areaCommericalMin'));
    this.set('areaCommericalMaxValue', this.get('areaCommericalMax'));

    this.set('priceCommericalMin', 1);
    this.set('priceCommericalMax', /*Math.max.apply(Math, this.get('rentals').map(function(rental){ return rental.price; })) + 100000*/ 30000000);
    this.set('priceCommericalMinValue', this.get('priceCommericalMin'));
    this.set('priceCommericalMaxValue', this.get('priceCommericalMax'));
    this.set('priceCommericalMinRent', 1);
    this.set('priceCommericalMaxRent', /*Math.max.apply(Math, this.get('rentals').map(function(rental){ return rental.price; })) + 100000*/ 300000);
    this.set('priceCommericalMinValueRent', this.get('priceCommericalMinRent'));
    this.set('priceCommericalMaxValueRent', this.get('priceCommericalMaxRent'));

    this.set('areaCountryMin', 0);
    this.set('areaCountryMax',  /*Math.max.apply(Math, this.get('rentals').map(function(rental){ return rental.area;  })) + 10*/ 99);
    this.set('areaCountryMinValue', this.get('areaCountryMin'));
    this.set('areaCountryMaxValue', this.get('areaCountryMax'));

    this.set('priceCountryMin', 1);
    this.set('priceCountryMax', /*Math.max.apply(Math, this.get('rentals').map(function(rental){ return rental.price; })) + 100000*/ 30000000);
    this.set('priceCountryMinValue', this.get('priceCountryMin'));
    this.set('priceCountryMaxValue', this.get('priceCountryMax'));
    this.set('priceCountryMinRent', 1);
    this.set('priceCountryMaxRent', /*Math.max.apply(Math, this.get('rentals').map(function(rental){ return rental.price; })) + 100000*/ 300000);
    this.set('priceCountryMinValueRent', this.get('priceCountryMinRent'));
    this.set('priceCountryMaxValueRent', this.get('priceCountryMaxRent'));

    this.set('lotMin', 0);
    this.set('lotMax',  /*Math.max.apply(Math, this.get('rentals').map(function(rental){ return rental.area;  })) + 10*/ 99);
    this.set('lotMinValue', this.get('lotMin'));
    this.set('lotMaxValue', this.get('lotMax'));
  },
  
  didReceiveAttrs() {
    this.set('buyCheck',        this.get('type')     === 'sell'       ? true : false);
    this.set('rentCheck',       this.get('type')     === 'rent'       ? true : false);
    this.set('livingCheck',     this.get('category') === 'living'     ? true : false);
    this.set('newCheck',        this.get('category') === 'new'        ? true : false);
    this.set('commericalCheck', this.get('category') === 'commerical' ? true : false);
    this.set('countryCheck',    this.get('category') === 'country'    ? true : false);
    
    if (this.get('type') === 'sell') {
      if (this.get('category') === 'commerical') {
        this.get('filter')(this.get('type'),
                           this.get('category'),

                           this.get('roomsMinValue'),
                           (this.get('roomsMaxValue') > this.get('roomsMax') * 0.998 ? this.get('roomsMax') * 10 : this.get('roomsMaxValue')),

                           this.get('areaCommericalMinValue'),
                           (this.get('areaCommericalMaxValue') > this.get('areaCommericalMax') * 0.998 ? this.get('areaCommericalMax') * 10 : this.get('areaCommericalMaxValue')),

                           this.get('priceCommericalMinValue'),
                           (this.get('priceCommericalMaxValue') > this.get('priceCommericalMax') * 0.998 ? this.get('priceCommericalMax') * 10 : this.get('priceCommericalMaxValue')),

                           this.get('commericalChecked'),
                           this.get('districtCityChecked')).then((filterResults) => this.set('results', filterResults)); }
      else if (this.get('category') === 'country') {
        this.get('filter')(this.get('type'),
                           this.get('category'),

                           0, 99,

                           this.get('areaCountryMinValue'),
                           (this.get('areaCountryMaxValue') > this.get('areaCountryMax') * 0.998 ? this.get('areaCountryMax') * 10 : this.get('areaCountryMaxValue')),

                           this.get('priceCountryMinValue'),
                           (this.get('priceCountryMaxValue') > this.get('priceCountryMax') * 0.998 ? this.get('priceCountryMax') * 10 : this.get('priceCountryMaxValue')),

                           this.get('countryChecked'),
                           this.get('districtCountryChecked')).then((filterResults) => this.set('results', filterResults)); }
      else {
        this.get('filter')(this.get('type'),
                           this.get('category'),

                           this.get('roomsMinValue'),
                           (this.get('roomsMaxValue') > this.get('roomsMax') * 0.998 ? this.get('roomsMax') * 10 : this.get('roomsMaxValue')),

                           this.get('areaMinValue'),
                           (this.get('areaMaxValue') > this.get('areaMax') * 0.998 ? this.get('areaMax') * 10 : this.get('areaMaxValue')),

                           this.get('priceMinValue'),
                           (this.get('priceMaxValue') > this.get('priceMax') * 0.998 ? this.get('priceMax') * 10 : this.get('priceMaxValue')),

                           this.get(this.get('category') == 'living' ? 'livingChecked' : 'commericalChecked'),
                           this.get('districtCityChecked')).then((filterResults) => this.set('results', filterResults)); }
    }
      else {
        if (this.get('category') === 'commerical') {
        this.get('filter')(this.get('type'),
                           this.get('category'),

                           this.get('roomsMinValue'),
                           (this.get('roomsMaxValue') > this.get('roomsMax') * 0.998 ? this.get('roomsMax') * 10 : this.get('roomsMaxValue')),

                           this.get('areaCommericalMinValue'),
                           (this.get('areaCommericalMaxValue') > this.get('areaCommericalMax') * 0.998 ? this.get('areaCommericalMax') * 10 : this.get('areaCommericalMaxValue')),

                           this.get('priceCommericalMinValueRent'),
                           (this.get('priceCommericalMaxValueRent') > this.get('priceCommericalMaxRent') * 0.998 ? this.get('priceCommericalMaxRent') * 10 : this.get('priceCommericalMaxValueRent')),

                           this.get('commericalChecked'),
                           this.get('districtCityChecked')).then((filterResults) => this.set('results', filterResults)); }
      else if (this.get('category') === 'country') {
        this.get('filter')(this.get('type'),
                           this.get('category'),

                           0, 99,

                           this.get('areaCountryMinValue'),
                           (this.get('areaCountryMaxValue') > this.get('areaCountryMax') * 0.998 ? this.get('areaCountryMax') * 10 : this.get('areaCountryMaxValue')),

                           this.get('priceCountryMinValueRent'),
                           (this.get('priceCountryMaxValueRent') > this.get('priceCountryMaxRent') * 0.998 ? this.get('priceCountryMaxRent') * 10 : this.get('priceCountryMaxValueRent')),

                           this.get('countryChecked'),
                           this.get('districtCountryChecked')).then((filterResults) => this.set('results', filterResults)); }
      else {
        this.get('filter')(this.get('type'),
                           this.get('category'),

                           this.get('roomsMinValue'),
                           (this.get('roomsMaxValue') > this.get('roomsMax') * 0.998 ? this.get('roomsMax') * 10 : this.get('roomsMaxValue')),

                           this.get('areaMinValue'),
                           (this.get('areaMaxValue') > this.get('areaMax') * 0.998 ? this.get('areaMax') * 10 : this.get('areaMaxValue')),

                           this.get('priceMinValueRent'),
                           (this.get('priceMaxValueRent') > this.get('priceMaxRent') * 0.998 ? this.get('priceMaxRent') * 10 : this.get('priceMaxValueRent')),

                           this.get(this.get('category') == 'living' ? 'livingChecked' : 'commericalChecked'),
                           this.get('districtCityChecked')).then((filterResults) => this.set('results', filterResults)); }
      }
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
    if (this.get('type') === 'sell') {
      if (this.get('category') === 'commerical') {
        this.get('filter')(this.get('type'),
                           this.get('category'),

                           this.get('roomsMinValue'),
                           (this.get('roomsMaxValue') > this.get('roomsMax') * 0.998 ? this.get('roomsMax') * 10 : this.get('roomsMaxValue')),

                           this.get('areaCommericalMinValue'),
                           (this.get('areaCommericalMaxValue') > this.get('areaCommericalMax') * 0.998 ? this.get('areaCommericalMax') * 10 : this.get('areaCommericalMaxValue')),

                           this.get('priceCommericalMinValue'),
                           (this.get('priceCommericalMaxValue') > this.get('priceCommericalMax') * 0.998 ? this.get('priceCommericalMax') * 10 : this.get('priceCommericalMaxValue')),

                           this.get('commericalChecked'),
                           this.get('districtCityChecked')).then((filterResults) => this.set('results', filterResults)); }
      else if (this.get('category') === 'country') {
        this.get('filter')(this.get('type'),
                           this.get('category'),

                           0, 99,

                           this.get('areaCountryMinValue'),
                           (this.get('areaCountryMaxValue') > this.get('areaCountryMax') * 0.998 ? this.get('areaCountryMax') * 10 : this.get('areaCountryMaxValue')),

                           this.get('priceCountryMinValue'),
                           (this.get('priceCountryMaxValue') > this.get('priceCountryMax') * 0.998 ? this.get('priceCountryMax') * 10 : this.get('priceCountryMaxValue')),

                           this.get('countryChecked'),
                           this.get('districtCountryChecked')).then((filterResults) => this.set('results', filterResults)); }
      else {
        this.get('filter')(this.get('type'),
                           this.get('category'),

                           this.get('roomsMinValue'),
                           (this.get('roomsMaxValue') > this.get('roomsMax') * 0.998 ? this.get('roomsMax') * 10 : this.get('roomsMaxValue')),

                           this.get('areaMinValue'),
                           (this.get('areaMaxValue') > this.get('areaMax') * 0.998 ? this.get('areaMax') * 10 : this.get('areaMaxValue')),

                           this.get('priceMinValue'),
                           (this.get('priceMaxValue') > this.get('priceMax') * 0.998 ? this.get('priceMax') * 10 : this.get('priceMaxValue')),

                           this.get(this.get('category') == 'living' ? 'livingChecked' : 'commericalChecked'),
                           this.get('districtCityChecked')).then((filterResults) => this.set('results', filterResults)); }
    }
      else {
        if (this.get('category') === 'commerical') {
        this.get('filter')(this.get('type'),
                           this.get('category'),

                           this.get('roomsMinValue'),
                           (this.get('roomsMaxValue') > this.get('roomsMax') * 0.998 ? this.get('roomsMax') * 10 : this.get('roomsMaxValue')),

                           this.get('areaCommericalMinValue'),
                           (this.get('areaCommericalMaxValue') > this.get('areaCommericalMax') * 0.998 ? this.get('areaCommericalMax') * 10 : this.get('areaCommericalMaxValue')),

                           this.get('priceCommericalMinValueRent'),
                           (this.get('priceCommericalMaxValueRent') > this.get('priceCommericalMaxRent') * 0.998 ? this.get('priceCommericalMaxRent') * 10 : this.get('priceCommericalMaxValueRent')),

                           this.get('commericalChecked'),
                           this.get('districtCityChecked')).then((filterResults) => this.set('results', filterResults)); }
      else if (this.get('category') === 'country') {
        this.get('filter')(this.get('type'),
                           this.get('category'),

                           0, 99,

                           this.get('areaCountryMinValue'),
                           (this.get('areaCountryMaxValue') > this.get('areaCountryMax') * 0.998 ? this.get('areaCountryMax') * 10 : this.get('areaCountryMaxValue')),

                           this.get('priceCountryMinValueRent'),
                           (this.get('priceCountryMaxValueRent') > this.get('priceCountryMaxRent') * 0.998 ? this.get('priceCountryMaxRent') * 10 : this.get('priceCountryMaxValueRent')),

                           this.get('countryChecked'),
                           this.get('districtCountryChecked')).then((filterResults) => this.set('results', filterResults)); }
      else {
        this.get('filter')(this.get('type'),
                           this.get('category'),

                           this.get('roomsMinValue'),
                           (this.get('roomsMaxValue') > this.get('roomsMax') * 0.998 ? this.get('roomsMax') * 10 : this.get('roomsMaxValue')),

                           this.get('areaMinValue'),
                           (this.get('areaMaxValue') > this.get('areaMax') * 0.998 ? this.get('areaMax') * 10 : this.get('areaMaxValue')),

                           this.get('priceMinValueRent'),
                           (this.get('priceMaxValueRent') > this.get('priceMaxRent') * 0.998 ? this.get('priceMaxRent') * 10 : this.get('priceMaxValueRent')),

                           this.get(this.get('category') == 'living' ? 'livingChecked' : 'commericalChecked'),
                           this.get('districtCityChecked')).then((filterResults) => this.set('results', filterResults)); }
      }
    },
  }
});
