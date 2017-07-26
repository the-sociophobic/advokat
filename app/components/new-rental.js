import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  
  districtCity: [' Адмиралтейский',' Василеостровский',' Выборгский',' Калининский',' Кировский',' Колпинский',' Красногвардейский',' Красносельский',' Кронштадтский',' Курортный',' Московский',' Невский',' Петроградский',' Петродворцовый',' Приморский',' Пушкинский',' Фрунзенский',' Центральный'],
  districtCityChecked: [],
  districtCountry: ['Бокситогорский', 'Волосовский', 'Волховский', 'Всеволожский', 'Выборгский', 'Гатчинский', 'Кингисеппский', 'Киришский', 'Кировский', 'Лодейнопольский', 'Ломоносовский', 'Лужский', 'Подпорожский', 'Приозерский', 'Сланцевский', 'Тихвинский', 'Тосненский'],
  districtCountryChecked: [],

  typeOptions: ['купить', 'арендовать'],
  categoryBuyOptions: ['жилая', 'новостройки', 'коммерческая', 'загородная'],
  categoryRentOptions: ['жилая', 'коммерческая', 'загородная'],
  livingOptions: ['квартира', 'комната', 'студия'],
  newOptions: ['квартира', 'студия'],
  commericalOptions: ['офис', 'торговые', 'различного назначения', 'здания', 'склады, Гаражи'],
  countryOptions: ['дом', 'таунхаус', 'участок'],
  
  buildingTypeOptions: ['кирпичный', 'кирпично-монолитный', 'сталинский', 'старый фонд', 'старый фонд с КР', 'панельный', 'блочный'],
  dealStatusOptions: ['прямая продажа', 'встречная покупка', 'расселение', 'переуступка'],
  specialOptions: ['да', 'нет'],
  
  red: ['проспект ветеранов', 'ленинский проспект', 'автово', 'кировский завод', 'нарвская', 'балтийская', 'технологический институт 1', 'пушкинская', 'владимирская', 'площадь восстания', 'выборгская', 'лесная', 'площадь мужества', 'политехническая', 'академическая', 'гражданский проспект', 'девяткино'],
  blue: ['купчино', 'звездная', 'звёздная', 'московская', 'парк победы', 'электросила', 'московские ворота', 'фрунзенская', 'технологический институт 2', 'сенная площадь', 'невский проспект', 'горьковская', 'петроградская', 'черная речка', 'чёрная речка', 'пионерская', 'удельная', 'озерки', 'проспект просвещения', 'парнас'],
  green: ['приморская', 'василеостровская', 'гостинный двор', 'маяковская', 'площадь александра невского 1', 'елизаровская', 'ломоносовская', 'пролетарская', 'обухово', 'рыбацкое'],
  orange: ['театральная', 'спасская', 'достоевская', 'лиговский проспект', 'площадь александра невского 2', 'новочеркасская', 'ладожская', 'проспект большевиков', 'улица дыбенко'],
  violet: ['шушары', 'дунайская', 'проспект славы', 'международная', 'бухарестская', 'волковская', 'обводный канал', 'звенигородская', 'садовая', 'адмиралтейская', 'спортивная', 'чкаловская', 'крестовский остров', 'старая деревня', 'комендантский проспект'],

  metro_options: [],
  
  images: [],
  
  actions: {
    commit_type() {
      this.set('property_type', undefined);
      this.set('category',      undefined);
      this.set('district',      undefined);
    },
    commit_property_type() {
      this.set('category',      undefined);
      this.set('district',      undefined);
    },
    metro_filter() {
      let options = [];
      var { metro, red, blue, green, orange, violet } = this.getProperties('metro', 'red', 'blue', 'green', 'orange', 'violet');
      
      for(var i = 0; i < red.length; i++)
        if (red[i].includes(metro.toLowerCase()))
          options.push(red[i]);
      for(var i = 0; i < blue.length; i++)
        if (blue[i].includes(metro.toLowerCase()))
          options.push(blue[i]);
      for(var i = 0; i < green.length; i++)
        if (green[i].includes(metro.toLowerCase()))
          options.push(green[i]);
      for(var i = 0; i < orange.length; i++)
        if (orange[i].includes(metro.toLowerCase()))
          options.push(orange[i]);
      for(var i = 0; i < violet.length; i++)
        if (violet[i].includes(metro.toLowerCase()))
          options.push(violet[i]);
      
      this.set('metro_options', options);
    },
    toggleMetro(label) {
      this.set('metro', label);
      this.set('metro_options', []);
    },
    
    add() {
      let rental = this.get('store').createRecord('rental', {
        price: this.get('price'),

        name: this.get('name'),
        phone: this.get('phone'),
        mail: this.get('mail'),

        type: this.get('type'),
        property_type: this.get('property_type'),
        category:  this.get('category'),

        district: this.get('district'),

        metro: this.get('metro'),
        time_on_transport: this.get('time_on_transport'),
        time_on_foot: this.get('time_on_foot'),

        address: this.get('address'),
        apartment: this.get('apartment'),
        latitude: this.get('latitude'),
        longitude: this.get('longitude'),

        rooms: this.get('rooms'),
        area: this.get('area'),
        living_space: this.get('living_space'),
        room_space:  this.get('room_space'),
        kitchen_space: this.get('kitchen_space'),
        lot_area: this.get('lot_area'),

        floor: this.get('floor'),
        floors_total: this.get('floors_total'),

        building_type: this.get('building_type'),

        deal_status: this.get('deal_status'),

        description: this.get('description'),

        special: this.get('special'),

        creation_date: new Date(),
        last_update_date: new Date(),
        expire_date: new Date().setFullYear(new Date().getFullYear() + 1)
      });

      rental.save();
    }
  }
});
