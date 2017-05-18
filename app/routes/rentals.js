import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [{
      type: 'продажа',
      property_type: 'жилая',
      category:  'студия', /* владелец */
      description: 'принцип относительности заключается в относительной полезности обсуждения полезности относительного принципа относительно абсолютного стол рыба фонарь аптека улица градусник',
      image: ['https://pp.userapi.com/c621216/v621216679/2800/vrPtZgGSDBE.jpg', 'https://pp.userapi.com/c622629/v622629580/3631e/b82k_eYITGM.jpg', 'https://pp.userapi.com/c631625/v631625299/6aca/8kqunVT6u5k.jpg', 'https://pp.userapi.com/c628421/v628421149/26fe7/Z8syXt-K4pA.jpg'],

      price: 35000000,

      area: 44,
      living_space: 32,
      kitchen_space: 12,
      rooms: 2,
      floor: 6,

      address: 'Динамомашинная 5к1',
      district: 'Адмиралтейский',
      latitude: '59.997256',
      longitude: '30.297199',
      metro: 'Ломоносовская',
      time_on_transport: 3,
      time_on_foot: 9
}, {
      type: 'продажа',
      property_type: 'жилая',
      category:  'квартира', /* владелец */
      description: 'Те, кому когда-либо приходилось делать в квартире ремонт, наверное, обращали внимание на старые газеты, наклеенные под обоями. Как правило, пока все статьи не перечитаешь, ничего другого делать не можешь. Интересно же — обрывки текста, чья-то жизнь... Так же и с рыбой. Пока заказчик не прочтет всё, он не успокоится. Бывали случаи, когда дизайн принимался именно из-за рыбного текста, который, разумеется, никакого отношения к работе не имел.',
      image: ['https://pp.userapi.com/c630721/v630721254/e23/sy5K4xYLgpc.jpg'],

      price: 14600000,

      area: 55,
      living_space: 55,
      kitchen_space: 0,
      rooms: 1,
      floor: 2,

      address: 'Аэродромная 5к1',
      district: 'Кировский',
      latitude: '59.997256',
      longitude: '30.297199',
      metro: 'Технологический Институт 2',
      time_on_transport: 5,
      time_on_foot: 7
}, {
      type: 'продажа',
      property_type: 'жилая',
      category:  'квартира', /* владелец */
      description: 'Принцип восприятия непредвзято создает паллиативный интеллект, условно. Концепция ментально оспособляет закон внешнего мира. Сомнение раскладывает на элементы неоднозначный структурализм. Смысл жизни профанирует принцип восприятия, отрицая очевидное. Жизнь философски ассоциирует напряженный постмодернизм. Объект деятельности означает конфликт. Согласно предыдущему, конфликт, в рамках сегодняшних воззрений, ясен не всем.',
      image: ['https://pp.userapi.com/c405923/v405923786/4677/Bqwy69aFaic.jpg', 'https://pp.userapi.com/c629325/v629325968/1a781/KkIO2WVfJPE.jpg', 'https://pp.userapi.com/c627328/v627328393/17895/4wdpQVKWWac.jpg'],

      price: 5300000,

      area: 13,
      living_space: 10,
      kitchen_space: 3,
      rooms: 1,
      floor: 20,

      address: 'Междуреченская 67',
      district: 'Петроградский',
      latitude: '59.997256',
      longitude: '30.297199',
      metro: 'Площадь Александра Невского 2',
      time_on_transport: 5,
      time_on_foot: 25
}, {
      type: 'аренда',
      property_type: 'жилая',
      category:  'квартира', /* владелец */
      description: 'хахахахаххахахахахаххаахаххахахаххахахаххахха',
      image: ['https://pp.userapi.com/c620529/v620529436/1eb24/s0dp3mgbyeM.jpg', 'https://cs7055.userapi.com/c540105/v540105986/157fe/5WB_nPAlh5Y.jpg'],

      price: 700000,

      area: 200,
      living_space: 190,
      kitchen_space: 10,
      rooms: 5,
      floor: 4,

      address: 'Некая ул 5',
      district: 'Московский',
      latitude: '59.997256',
      longitude: '30.297199',
      metro: 'Проспект Ветеранов',
      time_on_transport: 12,
      time_on_foot: 30
},{
      type: 'аренда',
      property_type: 'жилая',
      category:  'дом', /* владелец */
      description: 'что-то с чем-то и кое-чем, таки, вот....',
      image: ['https://cs7055.userapi.com/c623616/v623616650/c668/Lypg0g9yyNs.jpg', 'https://pp.userapi.com/c320117/v320117634/a10d/9-foSi8jEQQ.jpg', 'https://pp.userapi.com/c623124/v623124606/4d124/sYuedT6Se34.jpg'],

      price: 70000000,

      area: 83,
      living_space: 70,
      kitchen_space: 13,
      rooms: 3,
      floor: 3,

      address: 'Ударников 20/3',
      district: 'Невский',
      latitude: '59.997256',
      longitude: '30.297199',
      metro: 'Обводной Канал',
      time_on_transport: 11,
      time_on_foot: 14
},{
      type: 'аренда',
      property_type: 'жилая',
      category:  'комната', /* владелец */
      description: 'маленькая комната с тараканами, крысами и мертвым владельцем',
      image: ['https://pp.userapi.com/c623324/v623324337/e1d8/nBekmoSldpY.jpg', 'https://pp.userapi.com/c628129/v628129275/29a7/UZ78HvrDAa0.jpg', 'https://pp.userapi.com/c618131/v618131427/236d6/TmM7APzbz08.jpg'],

      price: 345000,

      area: 9,
      living_space: 9,
      kitchen_space: 0,
      rooms: 1,
      floor: 60,

      address: 'Суицидная 15',
      district: 'Василеостровский',
      latitude: '59.997256',
      longitude: '30.297199',
      metro: 'Черная Речка',
      time_on_transport: 9,
      time_on_foot: 13
}];
  }
});