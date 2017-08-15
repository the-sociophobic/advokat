import Ember from 'ember';

export default Ember.Component.extend({
  /* filter params */
  countryDistrict: {
    options: ['Бокситогорский', 'Волосовский', 'Волховский', 'Всеволожский', 'Выборгский', 'Гатчинский', 'Кингисеппский', 'Киришский', 'Кировский', 'Лодейнопольский', 'Ломоносовский', 'Лужский', 'Подпорожский', 'Приозерский', 'Сланцевский', 'Тихвинский', 'Тосненский'],
    selected: []
  },
  cityDistrict: {
    options: ['Адмиралтейский', 'Василеостровский', 'Выборгский', 'Калининский', 'Кировский', 'Колпинский', 'Красногвардейский', 'Красносельский', 'Кронштадтский', 'Курортный', 'Московский', 'Невский', 'Петроградский', 'Петродворцовый', 'Приморский', 'Пушкинский', 'Фрунзенский', 'Центральный'],
    selected: []
  },

  livingOptions:     ['квартира', 'комната', 'студия'],
  newOptions:        ['квартира', 'студия'],
  commericalOptions: ['офис', 'торговые', 'различного назначения', 'здания', 'склады, гаражи'],
  countryOptions:    ['дом', 'таунхаус', 'участок'],
  
  buy:   { min: 0, max: 20000000, minValue: 0, maxValue: 20000000, step: 200000 },
  rent:  { min: 0, max: 300000, minValue: 0, maxValue: 300000, step: 2000 },  
  rooms: { min: 1, max: 10, minValue: 1, maxValue: 10 },
  area:  { min: 0, max: 99, minValue: 0, maxValue: 99 },
  lot:   { min: 0, max: 99, minValue: 0, maxValue: 99 },

  category: undefined,

  /* radio buttons */
  buyCheck:        undefined,
  rentCheck:       undefined,
  livingCheck:     undefined,
  newCheck:        undefined,
  commericalCheck: undefined,
  countryCheck:    undefined,
  
  filtration: true,

  didReceiveAttrs() {
    this.set('buyCheck',        this.get('type')          === 'купить'       ? true : false);
    this.set('rentCheck',       this.get('type')          === 'арендовать'   ? true : false);
    this.set('livingCheck',     this.get('property_type') === 'жилая'        ? true : false);
    this.set('newCheck',        this.get('property_type') === 'новостройки'  ? true : false);
    this.set('commericalCheck', this.get('property_type') === 'коммерческая' ? true : false);
    this.set('countryCheck',    this.get('property_type') === 'загородная'   ? true : false);
    
    this.send('filter');
  },
  
  actions: {
    buy() {
      this.set('type', 'купить');
    },
    rent() {
      this.set('type', 'арендовать');
      if (this.get('property_type') === 'новостройки') {
        this.set('property_type', 'жилая');
        this.set('category', undefined);
      }
    },
    living() {
      this.set('property_type', 'жилая');
      this.set('category', undefined);
    },
    new() {
      this.set('property_type', 'новостройки');
      this.set('category', undefined);
    },
    commerical() {
      this.set('property_type', 'коммерческая');
      this.set('category', undefined);
    },
    country() {
      this.set('property_type', 'загородная');
      this.set('category', undefined);
    },
    
    filter() {
      var { type, property_type, category, rooms, area, lot, countryDistrict, cityDistrict, agent } = this.getProperties('type', 'property_type', 'category', 'rooms', 'area', 'lot', 'countryDistrict', 'cityDistrict', 'agent');
      var price = (this.get('type') === 'купить' ? this.get('buy') : this.get('sell'));
      let results;
      
      if (this.get('filtration')) {
        results = this.get('rentals').filter(function(rental) {        
          if (type === rental.get('type') &&
              property_type === rental.get('property_type') &&
              (!category || category === rental.get('category'))) {
            /* district */
            if (property_type === 'загородная') {
              if (countryDistrict.selected.length) {
                let district = countryDistrict.selected.map(value => { return ' ' + value.toLowerCase(); });
                
                if (rental.get('district'))
                  if (district.indexOf(rental.get('district').toLowerCase()) === -1)
                    return false;
              }
            } else {
              if (cityDistrict.selected.length) {
                let district = cityDistrict.selected.map(value => { return ' ' + value.toLowerCase(); });
                
                if (rental.get('district'))
                  if (district.indexOf(rental.get('district').toLowerCase()) === -1)
                    return false;
              }
            }

            /* rooms */
            if (property_type === 'жилая' || property_type === 'новостройки') {
              var rentalRooms = rental.get('rooms') ? rental.get('rooms') : 1;
              if (rentalRooms <  rooms.minValue ||
                  rentalRooms > (rooms.maxValue > rooms.max * 0.998 ? rooms.max * 100 : rooms.maxValue))
                return false;
            }
            /* area */
            if (rental.get('area') <  area.minValue ||
                rental.get('area') > (area.maxValue > area.max * 0.998 ? area.max * 100 : area.maxValue))
              return false;
            /* price */
            if (rental.get('price') <  price.minValue ||
                rental.get('price') > (price.maxValue > price.max * 0.998 ? price.max * 100 : price.maxValue))
              return false;
            /* lot area */
            if (property_type === 'загородная') {
              if (rental.get('lot') <  lot.minValue ||
                  rental.get('lot') > (lot.maxValue > lot.max * 0.998 ? lot.max * 100 : lot.maxValue))
                return false;
            }
            /* agent */
            if (agent) {
              if(rental.get('agent.id') !== agent.id)
                return false;
            }
            return true;
          }
          return false;
        });
      } else {
        results = this.get('rentals');
      }
      this.set('results', results);
    },
    toggleFiltration() {
      this.toggleProperty('filtration');
      this.send('filter');
    }
  }
});
