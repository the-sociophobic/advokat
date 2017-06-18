export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
  */
  
  this.namespace = '/api';

  let rentals = [{
      type: 'rentals',
      id: 1,
      attributes: {
        price: 37000000,

        name: 'Татьяна',
        phone: '+79114560921',
        mail: 'btd.spb@mail.ru',

        type: 'sell',
        property_type: 'living',
        category:  'студия',

        district: 'Адмиралтейский',

        metro: 'Ломоносовская',
        time_on_transport: 3,
        time_on_foot: 9,

        address: 'улица Полярников 6',
        apartment: 13,
        latitude: '59.997256',
        longitude: '30.297199',

        rooms: 2,
        area: 44,
        living_space: '12, 20',
        kitchen_space: 12,

        floor: 6,
        floors_total: 25,

        building_type: 'кирпичный',
        
        deal_status: 'встречная покупка',

        description: 'принцип относительности заключается в относительной полезности обсуждения полезности относительного принципа относительно абсолютного стол рыба фонарь аптека улица градусник',

        special: true,
      },
      relationships: {
        images: {
          data: [
            { type: 'image', id: 1 },
            { type: 'image', id: 2 },
            { type: 'image', id: 3 },
            { type: 'image', id: 4 }
          ]
        }
      }
    },
    {
      type: 'rentals',
      id: 2,
      attributes: {
        price: 14600000,

        name: 'Андрей',
        phone: '+79114560921',
        mail: 'btd.spb@mail.ru',

        type: 'sell',
        property_type: 'living',
        category:  'квартира',

        district: 'Кировский',

        metro: 'Технологический Институт 2',
        time_on_transport: 5,
        time_on_foot: 7,

        address: 'улица Аэродромная 5',
        apartment: 34,
        latitude: '59.997256',
        longitude: '30.297199',

        rooms: 3,
        area: 55,
        living_space: '20, 22, 13',
        kitchen_space: 0,

        floor: 4,
        floors_total: 25,

        building_type: 'кирпичный',
        
        deal_status: 'расселение',
        
        description: 'Те, кому когда-либо приходилось делать в квартире ремонт, наверное, обращали внимание на старые газеты, наклеенные под обоями. Как правило, пока все статьи не перечитаешь, ничего другого делать не можешь. Интересно же — обрывки текста, чья-то жизнь... Так же и с рыбой. Пока заказчик не прочтет всё, он не успокоится. Бывали случаи, когда дизайн принимался именно из-за рыбного текста, который, разумеется, никакого отношения к работе не имел.',

        special: true,
      },
      relationships: {
        images: {
          data: [
            { type: 'image', id: 5 },
            { type: 'image', id: 6 }
          ]
        }
      }
    },
    {
      type: 'rentals',
      id: 3,
      attributes: {
        price: 5300000,

        name: 'Оксана',
        phone: '+79114560921',
        mail: 'btd.spb@mail.ru',

        type: 'sell',
        property_type: 'living',
        category:  'квартира',

        district: 'Петроградский',

        metro: 'Площадь Александра Невского 2',
        time_on_transport: 5,
        time_on_foot: 25,

        address: 'Тележная улица 28',
        apartment: 6,
        latitude: '59.997256',
        longitude: '30.297199',
        
        rooms: 2,
        area: 13,
        living_space: '6, 4',
        kitchen_space: 3,

        floor: 20,
        floors_total: 25,

        building_type: 'кирпичный',
        
        deal_status: 'прямая продажа',
        
        description: 'Принцип восприятия непредвзято создает паллиативный интеллект, условно. Концепция ментально оспособляет закон внешнего мира. Сомнение раскладывает на элементы неоднозначный структурализм. Смысл жизни профанирует принцип восприятия, отрицая очевидное. Жизнь философски ассоциирует напряженный постмодернизм. Объект деятельности означает конфликт. Согласно предыдущему, конфликт, в рамках сегодняшних воззрений, ясен не всем.',

        special: true,
      },
      relationships: {
        images: {
          data: [
            { type: 'image', id: 7 },
            { type: 'image', id: 8 }
          ]
        }
      }
    },
    {
      type: 'rentals',
      id: 4,
      attributes: {
        price: 70000,

        name: 'Ирина',
        phone: '+79114560921',
        mail: 'btd.spb@mail.ru',
        
        type: 'rent',
        property_type: 'commerical',
        category: 'офис',
        
        district: 'Кировский',

        metro: 'Проспект Ветеранов',
        time_on_transport: 3,
        time_on_foot: 10,

        address: 'проспект Ветеранов 43',
        apartment: 38,
        latitude: '59.842291',
        longitude: '30.242064',

        rooms: 2,
        area: 43,

        floor: 5,
        floors_total: 8,

        building_type: 'монолит',

        description: 'хахахахаххахахахахаххаахаххахахаххахахаххахха',
        
        special: false,
      },
      relationships: {
        images: {
          data: [
            { type: 'image', id: 9 },
            { type: 'image', id: 10 },
            { type: 'image', id: 11 }
          ]
        }
      }
    },
    {
      type: 'rentals',
      id: 5,
      attributes: {
        price: 7000000,

        name: 'Сергей',
        phone: '+79114560921',
        mail: 'btd.spb@mail.ru',

        type: 'sell',
        property_type: 'commerical',
        category:  'квартира',
        
        district: 'Невский',

        metro: 'Обводный Канал',
        time_on_transport: 11,
        time_on_foot: 14,

        address: 'Невский проспект 20',
        apartment: 10,
        latitude: '59.997256',
        longitude: '30.297199',

        rooms: 3,
        area: 83,
        living_space: 70,
        kitchen_space: 13,

        floor: 3,
        floors_total: 25,
        
        building_type: 'кирпичный',

        deal_status: 'встречная покупка',

        description: 'что-то с чем-то и кое-чем, таки, вот....',

        special: true,
      },
      relationships: {
        images: {
          data: [
            { type: 'image', id: 12 },
            { type: 'image', id: 13 }
          ]
        }
      }
    },
    {
      type: 'rentals',
      id: 6,
      attributes: {
        price: 345000,

        name: 'Багир',
        phone: '+79114560921',
        mail: 'btd.spb@mail.ru',

        type: 'rent',
        property_type: 'living',
        category:  'комната',
        district: 'Василеостровский',

        metro: 'Василеостровская',
        time_on_transport: 9,
        time_on_foot: 13,

        address: 'Средний проспект 12',
        apartment: 26,
        latitude: '59.997256',
        longitude: '30.297199',

        rooms: 1,
        area: 9,

        floor: 10,
        floors_total: 11,
        
        building_type: 'блочный',

        description: 'маленькая комната с тараканами, крысами и мертвым владельцем',

        special: true,
      },
      relationships: {
        images: { 
          data: [
            { type: 'image', id: 14 },
            { type: 'image', id: 15 },
            { type: 'image', id: 16 }
          ]
        }
      }
    }];

  let images = [{
      type: 'image',
      id: 1,
      attributes: {
        url: 'https://pp.userapi.com/c621216/v621216679/2800/vrPtZgGSDBE.jpg',
        width: 1280,
        height: 853
      },
      relationships: { rental: 1 }
    },{
      type: 'image',
      id: 2,
      attributes: {
        url: 'https://pp.userapi.com/c622629/v622629580/3631e/b82k_eYITGM.jpg',
        width: 480,
        height: 200
      },
      relationships: { rental: 1 }
    },{
      type: 'image',
      id: 3,
      attributes: {
        url: 'https://pp.userapi.com/c631625/v631625299/6aca/8kqunVT6u5k.jpg',
        width: 480,
        height: 200
      },
      relationships: { rental: 1 }
    },{
      type: 'image',
      id: 4,
      attributes: {
        url: 'https://pp.userapi.com/c628421/v628421149/26fe7/Z8syXt-K4pA.jpg',
        width: 480,
        height: 200
      },
      relationships: { rental: 1 }
    },{
      type: 'image',
      id: 5,
      attributes: {
        url: 'https://pp.userapi.com/c630721/v630721254/e23/sy5K4xYLgpc.jpg',
        width: 480,
        height: 200
      },
      relationships: { rental: 2 }
    },{
      type: 'image',
      id: 6,
      attributes: {
        url: 'https://pp.userapi.com/c405923/v405923786/4677/Bqwy69aFaic.jpg',
        width: 480,
        height: 200
      },
      relationships: { rental: 2 }
    },{
      type: 'image',
      id: 7,
      attributes: {
        url: 'https://pp.userapi.com/c629325/v629325968/1a781/KkIO2WVfJPE.jpg',
        width: 480,
        height: 200
      },
      relationships: { rental: 3 }
    },{
      type: 'image',
      id: 8,
      attributes: {
        url: 'https://pp.userapi.com/c627328/v627328393/17895/4wdpQVKWWac.jpg',
        width: 480,
        height: 200
      },
      relationships: { rental: 3 }
    },{
      type: 'image',
      id: 9,
      attributes: {
        url: 'https://pp.userapi.com/c620529/v620529436/1eb24/s0dp3mgbyeM.jpg',
        width: 480,
        height: 200
      },
      relationships: { rental: 4 }
    },{
      type: 'image',
      id: 10,
      attributes: {
        url: 'https://cs7055.userapi.com/c540105/v540105986/157fe/5WB_nPAlh5Y.jpg',
        width: 480,
        height: 200
      },
      relationships: { rental: 4 }
    },{
      type: 'image',
      id: 11,
      attributes: {
        url: 'https://cs7055.userapi.com/c623616/v623616650/c668/Lypg0g9yyNs.jpg',
        width: 480,
        height: 200
      },
      relationships: { rental: 4 }
    },{
      type: 'image',
      id: 12,
      attributes: {
        url: 'https://pp.userapi.com/c320117/v320117634/a10d/9-foSi8jEQQ.jpg',
        width: 480,
        height: 200
      },
      relationships: { rental: 5 }
    },{
      type: 'image',
      id: 13,
      attributes: {
        url: 'https://pp.userapi.com/c623124/v623124606/4d124/sYuedT6Se34.jpg',
        width: 480,
        height: 200
      },
      relationships: { rental: 5 }
    },{
      type: 'image',
      id: 14,
      attributes: {
        url: 'https://pp.userapi.com/c623324/v623324337/e1d8/nBekmoSldpY.jpg',
        width: 480,
        height: 200
      },
      relationships: { rental: 6 }
    },{
      type: 'image',
      id: 15,
      attributes: {
        url: 'https://pp.userapi.com/c628129/v628129275/29a7/UZ78HvrDAa0.jpg',
        width: 480,
        height: 200
      },
      relationships: { rental: 6 }
    },{
      type: 'image',
      id: 16,
      attributes: {
        url: 'https://pp.userapi.com/c618131/v618131427/236d6/TmM7APzbz08.jpg',
        width: 480,
        height: 200
      },
      relationships: { rental: 6 }
    }];

  this.get('/index', function(db, request) {
    let filteredRentals = rentals.filter(function(i) {
      return i.attributes.special;
    });
    return { data: filteredRentals };
  });
  
  this.get('/rentals', function(db, request) {
    let filteredRentals = rentals.filter(function(i) {
      let unit = i.attributes;
      let query = request.queryParams;
      
      if (typeof query.type == 'undefined')
        return { data: rentals };

      if (query.category != null) {
        let category = query.category.map(function(value) { return value.toLowerCase(); });
        if (category.indexOf(' ' + unit.category) == -1)
          return false;
      }
      if (query.district != null) {
        let district = query.district.map(function(value) { return value.toLowerCase(); });
        if (district.indexOf(' ' + unit.district.toLowerCase()) == -1)
          return false;
      }
      
      if (query.property_type == 'commerical') {
        return (unit.type == query.type) &&
               (unit.property_type == query.property_type) &&
               (unit.area >= query.areaMin && unit.area <= query.areaMax) &&
               (unit.price >= query.priceMin && unit.price <= query.priceMax); }
      else if (query.property_type  == 'country') {
        return (unit.type == query.type) &&
               (unit.property_type == query.property_type) &&
               (unit.lot_area >= query.lotMin && unit.lot_area <= query.lotMax) &&
               (unit.area >= query.areaMin && unit.area <= query.areaMax) &&
               (unit.price >= query.priceMin && unit.price <= query.priceMax); }
      else {
        return (unit.type == query.type) &&
               (unit.property_type == query.property_type) &&
               (unit.rooms >= query.roomsMin && unit.rooms <= query.roomsMax) &&
               (unit.area >= query.areaMin && unit.area <= query.areaMax) &&
               (unit.price >= query.priceMin && unit.price <= query.priceMax); }
    });
    return { data: filteredRentals };
  });

  this.get('/rentals/:id', (schema, request) => {
    let rental = rentals.filter(function(i) {
      if (i.id == request.params.id)
        return true;
      return false;
    });
    let rent =  rental[0];
    return { data: rent };
  });

  
  this.get('/images/:id', (schema, request) => {
    let image = images.filter(function(i) {
      if (i.id == request.params.id)
        return true;
      return false;
    });
    let img = image[0];
    return { data: img };
  });
  
}
