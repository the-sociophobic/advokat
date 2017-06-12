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
        type: 'продажа',
        property_type: 'жилая',
        category:  'студия',
        description: 'принцип относительности заключается в относительной полезности обсуждения полезности относительного принципа относительно абсолютного стол рыба фонарь аптека улица градусник',

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
        time_on_foot: 9,

        name: 'Татьяна',
        phone: '+79114560921'
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
        type: 'продажа',
        property_type: 'жилая',
        category:  'квартира',
        description: 'Те, кому когда-либо приходилось делать в квартире ремонт, наверное, обращали внимание на старые газеты, наклеенные под обоями. Как правило, пока все статьи не перечитаешь, ничего другого делать не можешь. Интересно же — обрывки текста, чья-то жизнь... Так же и с рыбой. Пока заказчик не прочтет всё, он не успокоится. Бывали случаи, когда дизайн принимался именно из-за рыбного текста, который, разумеется, никакого отношения к работе не имел.',

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
        time_on_foot: 7,

        name: 'Андрей',
        phone: '+79114560921'
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
        type: 'продажа',
        property_type: 'жилая',
        category:  'квартира',
        description: 'Принцип восприятия непредвзято создает паллиативный интеллект, условно. Концепция ментально оспособляет закон внешнего мира. Сомнение раскладывает на элементы неоднозначный структурализм. Смысл жизни профанирует принцип восприятия, отрицая очевидное. Жизнь философски ассоциирует напряженный постмодернизм. Объект деятельности означает конфликт. Согласно предыдущему, конфликт, в рамках сегодняшних воззрений, ясен не всем.',

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
        time_on_foot: 25,

        name: 'Оксана',
        phone: '+79114560921'
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
        type: 'аренда',
        property_type: 'жилая',
        category:  'квартира',
        description: 'хахахахаххахахахахаххаахаххахахаххахахаххахха',

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
        time_on_foot: 30,

        name: 'Ирина',
        phone: '+79114560921'
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
        type: 'аренда',
        property_type: 'жилая',
        category:  'дом',
        description: 'что-то с чем-то и кое-чем, таки, вот....',

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
        metro: 'Обводный Канал',
        time_on_transport: 11,
        time_on_foot: 14,

        name: 'Сергей',
        phone: '+79114560921'
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
        type: 'аренда',
        property_type: 'жилая',
        category:  'комната',
        description: 'маленькая комната с тараканами, крысами и мертвым владельцем',

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
        time_on_foot: 13,

        name: 'Багир',
        phone: '+79114560921'
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
        width: 480,
        height: 200
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

  
  this.get('/rentals', function(db, request) {
    return { data: rentals };
  });

  this.get('/rentals/:id', (schema, request) => {
    return schema.rentals.find(request.params.id);
  });

  
  this.get('/images', function() {
    return { data: images };
  });
  
  this.get('/images/:id', (schema, request) => {
    return schema.images.find(request.params.id);
  });
  
}
