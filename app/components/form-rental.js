import Ember from 'ember';

export default Ember.Component.extend({
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
  
  red: ['Проспект Ветеранов', 'Ленинский Проспект', 'Автово', 'Кировский Завод', 'Нарвская', 'Балтийская', 'Технологический Институт 1', 'Пушкинская', 'Владимирская', 'Площадь Восстания', 'Выборгская', 'Лесная', 'Площадь Мужества', 'Политехническая', 'Академическая', 'Гражданский Проспект', 'Девяткино'],
  blue: ['Купчино', 'Звездная', 'Звёздная', 'Московская', 'Парк Победы', 'Электросила', 'Московские Ворота', 'Фрунзенская', 'Технологический Институт 2', 'Сенная Площадь', 'Невский Проспект', 'Горьковская', 'Петроградская', 'Черная Речка', 'Чёрная Речка', 'Пионерская', 'Удельная', 'Озерки', 'Проспект Просвещения', 'Парнас'],
  green: ['Приморская', 'Василеостровская', 'Гостинный Двор', 'Маяковская', 'Площадь Александра Невского 1', 'Елизаровская', 'Ломоносовская', 'Пролетарская', 'Обухово', 'Рыбацкое'],
  orange: ['Театральная', 'Спасская', 'Достоевская', 'Лиговский проспект', 'Площадь Александра Невского 2', 'Новочеркасская', 'Ладожская', 'Проспект Большевиков', 'Улица Дыбенко'],
  violet: ['Шушары', 'Дунайская', 'Проспект Славы', 'Международная', 'Бухарестская', 'Волковская', 'Обводный Канал', 'Звенигородская', 'Садовая', 'Адмиралтейская', 'Спортивная', 'Чкаловская', 'Крестовский Остров', 'Старая Деревня', 'Комендантский Проспект'],

  metro_options: [],
    
  store: Ember.inject.service(),
  rental: undefined,
  init() {
    this._super(...arguments);
    if (this.get('editable'))
      this.get('store').findRecord('rental', this.get('editable').id).then(rental => {
        this.set('rental', rental);
      });
    else
      this.set('rental', this.get('store').createRecord('rental'));
  },
  
  actions: {
    save() {
      this.get('rental').save();
      window.history.back();
    },
    cancel() {
      window.history.back();
    },
    delete() {
      this.get('rental').destroyRecord();
      window.history.back();
    },
    commit() {
      
    },
    commit_special() {
      var a = this.get('rental.special');
      if (a === false || a === 'нет' || a === 'false')
        this.set('rental.special', 'да');
      else
        this.set('rental.special', 'нет');
    },
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
      var { red, blue, green, orange, violet } = this.getProperties('red', 'blue', 'green', 'orange', 'violet');
      var metro = this.get('rental.metro');
      
      for(var i = 0; i < red.length; i++)
        if (red[i].toLowerCase().includes(metro.toLowerCase()))
          options.push(red[i]);
      for(var i = 0; i < blue.length; i++)
        if (blue[i].toLowerCase().includes(metro.toLowerCase()))
          options.push(blue[i]);
      for(var i = 0; i < green.length; i++)
        if (green[i].toLowerCase().includes(metro.toLowerCase()))
          options.push(green[i]);
      for(var i = 0; i < orange.length; i++)
        if (orange[i].toLowerCase().includes(metro.toLowerCase()))
          options.push(orange[i]);
      for(var i = 0; i < violet.length; i++)
        if (violet[i].toLowerCase().includes(metro.toLowerCase()))
          options.push(violet[i]);
      
      this.set('metro_options', options);
    },
    toggleMetro(label) {
      this.set('rental.metro', label);
      this.set('metro_options', []);
    },
  }
});
