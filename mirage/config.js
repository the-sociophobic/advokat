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
    price: 4500000,                  /* цена */

    name: 'Татьяна Владимировна',
    phone: '+7 961 611-56-11',
    mail: '89616115611@mail.ru',

    type: 'sell',                     /* 'sell' - покупка 'rent' - аренда */
    property_type: 'living',          /* 'living' - жилая 'new' - новостройки 'commerical' - коммерческая 'country' - загородная */
    category:  'квартира',            /*  */

    district: 'Приморский',            /* район */

    metro: 'Комендантский проспект',
    time_on_transport: 0,             /* время на транспорте */
    time_on_foot: 5,                  /* время пешком */

    address: 'улица Уточкина 5',
    apartment: '00',                    /* номер квартиры */
    latitude: '60.011445',            /* широта */
    longitude: '30.263735',           /* долгота */

    rooms: 2,                         /* комнаты */
    area: 45.8,                         /* площадь */
    living_space: 28.6,                 /* общая жилая площадь */
    room_space: '18.4+10.2',       /* площади комнат в кавычках */
    kitchen_space: 7.00,                 /* площадь кухни */

    floor: 9,                         /* этаж */
    floors_total: 9,                 /* всего этажей */

    building_type: 'крупно-панельный',       /* тип здания */

    deal_status: 'прямая продажа',        /* тип сделки */

    description: 'Чистая светлая квартира рядом с метро. Новые трубы и двери, стеклопакеты, стены и полы выровнены, проводка новая.<br>Отличная инфраструктура, рядом школа, детский сад, магазины, у метро - торгово-развлекательный комплекс. Зеленый двор с детской площадкой.',

    special: true,                    /* показывать на главной true/false - да/нет */
  },
  relationships: {
    images: {
      data: [
        { type: 'image', id: 1 },
        { type: 'image', id: 2 },
        { type: 'image', id: 3 },
        { type: 'image', id: 4 },
        { type: 'image', id: 5 },
        { type: 'image', id: 6 },
        { type: 'image', id: 7 },
        { type: 'image', id: 8 },
        { type: 'image', id: 9 }
      ]
    }
  }
},
{
  type: 'rentals',
  id: 11,
  attributes: {
    price: 4290000,                  /* цена */

    name: 'Марина Вячеславовна',
    phone: '+7 921 350-28-44',
    mail: 'advokat1995@list.ru',

    type: 'sell',                     /* 'sell' - покупка 'rent' - аренда */
    property_type: 'living',          /* 'living' - жилая 'new' - новостройки 'commerical' - коммерческая 'country' - загородная */
    category:  'квартира',            /*  */

    district: 'Выборгский',            /* район */

    metro: 'Парнас',
    time_on_transport: 0,             /* время на транспорте */
    time_on_foot: 5,                  /* время пешком */

    address: 'улица Федора Абрамова 4А',
    apartment: '00',                    /* номер квартиры */
    latitude: '60.069756',            /* широта */
    longitude: '30.332291',           /* долгота */

    rooms: 1,                         /* комнаты */
    area: 42,                         /* площадь */
    living_space: 18,                 /* общая жилая площадь */
    room_space: '18',       /* площади комнат в кавычках */
    kitchen_space: 13,                 /* площадь кухни */

    floor: 20,                         /* этаж */
    floors_total: 26,                 /* всего этажей */

    building_type: 'кирп. монолит',       /* тип здания */

    deal_status: 'встречная покупка',        /* тип сделки */

    description: 'Отличная просторная светлая, теплая квартира с&nbsp;большим балконом в &quot;Северной долине&quot;. Кухонный гарнитур-бонус. Магистральные фильтры для воды. Гардеробная. Вид на&nbsp;город. Близость метро. Детские сады и&nbsp;школа рядом. Супермаркеты, ТЦ, сбербанк, аптека в&nbsp;пешей доступности. Паркинг.',

    special: true,                    /* показывать на главной true/false - да/нет */
  },
  relationships: {
    images: {
      data: [
        { type: 'image', id: 101 },
        { type: 'image', id: 102 },
        { type: 'image', id: 103 },
        { type: 'image', id: 104 },
        { type: 'image', id: 105 },
        { type: 'image', id: 106 },
        { type: 'image', id: 107 },
        { type: 'image', id: 108 },
        { type: 'image', id: 109 }
      ]
    }
  }
}];

  let images = [{
  type: 'image',
  id: 1,           /* уникальный номер */
  attributes: {
    url: 'https://pp.userapi.com/c841536/v841536181/231a/RM-IpxdLqGY.jpg', /* ссылка на изображение в интернете */
    width: 480,
    height: 200
  },
  relationships: { rental: 1 }
},{
  type: 'image',
  id: 2,
  attributes: {
    url: 'https://pp.userapi.com/c841536/v841536181/2324/Bb2_zpxFJGA.jpg',
    width: 480,
    height: 200
  },
  relationships: { rental: 1 }
},{
  type: 'image',
  id: 3,
  attributes: {
    url: 'https://pp.userapi.com/c841536/v841536181/232e/KMEWfHSsIMU.jpg',
    width: 480,
    height: 200
  },
  relationships: { rental: 1 }
},{
  type: 'image',
  id: 4,
  attributes: {
    url: 'https://pp.userapi.com/c841536/v841536181/2338/l5LwMtYAfa0.jpg',
    width: 480,
    height: 200
  },
  relationships: { rental: 1 }
},{
  type: 'image',
  id: 5,
  attributes: {
    url: 'https://pp.userapi.com/c841536/v841536181/2342/SrKZ5FujDHE.jpg',
    width: 480,
    height: 200
  },
  relationships: { rental: 2 }
},{
  type: 'image',
  id: 6,
  attributes: {
    url: 'https://pp.userapi.com/c841536/v841536181/234c/HtQxKEdz50M.jpg',
    width: 480,
    height: 200
  },
  relationships: { rental: 2 }
},{
  type: 'image',
  id: 7,
  attributes: {
    url: 'https://pp.userapi.com/c841536/v841536181/2356/Ejeu58wrvhQ.jpg',
    width: 480,
    height: 200
  },
  relationships: { rental: 3 }
},{
  type: 'image',
  id: 8,
  attributes: {
    url: 'https://pp.userapi.com/c841536/v841536181/2360/0I0vD1SbNZg.jpg',
    width: 480,
    height: 200
  },
  relationships: { rental: 3 }
},{
  type: 'image',
  id: 9,
  attributes: {
    url: 'https://pp.userapi.com/c841536/v841536181/2369/9f7I3u4NDcE.jpg',
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
  id: 101,
  attributes: {
    url: 'https://pp.userapi.com/c841536/v841536181/238a/lePad5TrCPY.jpg',
    width: 480,
    height: 200
  },
  relationships: { rental: 4 }
},{
  type: 'image',
  id: 102,
  attributes: {
    url: 'https://pp.userapi.com/c841536/v841536181/2394/u9BIGmWv45o.jpg',
    width: 480,
    height: 200
  },
  relationships: { rental: 5 }
},{
  type: 'image',
  id: 103,
  attributes: {
    url: 'https://pp.userapi.com/c841536/v841536181/239e/SPYbLBXFowM.jpg',
    width: 480,
    height: 200
  },
  relationships: { rental: 5 }
},{
  type: 'image',
  id: 104,
  attributes: {
    url: 'https://pp.userapi.com/c841536/v841536181/23a8/hDCuwb72Zk4.jpg',
    width: 480,
    height: 200
  },
  relationships: { rental: 6 }
},{
  type: 'image',
  id: 105,
  attributes: {
    url: 'https://pp.userapi.com/c841536/v841536181/23b2/gnk7WFGDnws.jpg',
    width: 480,
    height: 200
  },
  relationships: { rental: 6 }
},{
  type: 'image',
  id: 106,
  attributes: {
    url: 'https://pp.userapi.com/c841536/v841536181/23bc/ImTY2iJy8d4.jpg',
    width: 480,
    height: 200
  },
  relationships: { rental: 6 }
},{
  type: 'image',
  id: 107,
  attributes: {
    url: 'https://pp.userapi.com/c841536/v841536181/23c6/qX8qJOCLX78.jpg',
    width: 480,
    height: 200
  },
  relationships: { rental: 6 }
},{
  type: 'image',
  id: 108,
  attributes: {
    url: 'https://pp.userapi.com/c841536/v841536181/23d0/flCqKNI_Y9o.jpg',
    width: 480,
    height: 200
  },
  relationships: { rental: 6 }
},{
  type: 'image',
  id: 109,
  attributes: {
    url: 'https://pp.userapi.com/c841536/v841536181/23da/7r5mBIu_5zs.jpg',
    width: 480,
    height: 200
  },
  relationships: { rental: 6 }
},{
  type: 'image',
  id: 110,
  attributes: {
    url: 'https://pp.userapi.com/c841536/v841536181/23bc/ImTY2iJy8d4.jpg',
    width: 480,
    height: 200
  },
  relationships: { rental: 6 }
},{
  type: 'image',
  id: '1а',
  attributes: {
    url: 'https://pp.userapi.com/c841536/v841536181/23b2/gnk7WFGDnws.jpg',
    width: 480,
    height: 200
  },
  relationships: { rental: 6 }
},{
  type: 'image',
  id: '2а',
  attributes: {
    url: 'https://pp.userapi.com/c841536/v841536181/23bc/ImTY2iJy8d4.jpg',
    width: 480,
    height: 200
  },
  relationships: { rental: 6 }
},{
  type: 'image',
  id: '3а',
  attributes: {
    url: 'https://pp.userapi.com/c841536/v841536181/23b2/gnk7WFGDnws.jpg',
    width: 480,
    height: 200
  },
  relationships: { rental: 6 }
},{
  type: 'image',
  id: '4а',
  attributes: {
    url: 'https://pp.userapi.com/c841536/v841536181/23bc/ImTY2iJy8d4.jpg',
    width: 480,
    height: 200
  },
  relationships: { rental: 6 }
},{
  type: 'image',
  id: '5а',
  attributes: {
    url: 'https://pp.userapi.com/c841536/v841536181/23b2/gnk7WFGDnws.jpg',
    width: 480,
    height: 200
  },
  relationships: { rental: 6 }
},{
  type: 'image',
  id: '6а',
  attributes: {
    url: 'https://pp.userapi.com/c841536/v841536181/23bc/ImTY2iJy8d4.jpg',
    width: 480,
    height: 200
  },
  relationships: { rental: 6 }
},{
  type: 'image',
  id: '7а',
  attributes: {
    url: 'https://pp.userapi.com/c841536/v841536181/23b2/gnk7WFGDnws.jpg',
    width: 480,
    height: 200
  },
  relationships: { rental: 6 }
},{
  type: 'image',
  id: '8а',
  attributes: {
    url: 'https://pp.userapi.com/c841536/v841536181/23bc/ImTY2iJy8d4.jpg',
    width: 480,
    height: 200
  },
  relationships: { rental: 6 }
},{
  type: 'image',
  id: '9а',
  attributes: {
    url: 'https://pp.userapi.com/c841536/v841536181/23b2/gnk7WFGDnws.jpg',
    width: 480,
    height: 200
  },
  relationships: { rental: 6 }
},{
  type: 'image',
  id: '10а',
  attributes: {
    url: 'https://pp.userapi.com/c841536/v841536181/23bc/ImTY2iJy8d4.jpg',
    width: 480,
    height: 200
  },
  relationships: { rental: 6 }
}];

  let feedbacks = [{
      type: 'feedback',
      id: 1,
      attributes: {
        date: '',
        title: 'ой',
        body: 'купил квартиру в Хрущевке, а её снесли... но агентство норм'
      }
    },
    {
      type: 'feedback',
      id: 2,
      attributes: {
        date: '',
        title: 'у меня нет почки',
        body: 'посоветовали взять ипотеку, а через 2 месяца коллекторы подожгли мою машину и забрали почку.. но агентство хорошее'
      }
    },
    {
      type: 'feedback',
      id: 3,
      attributes: {
        date: '',
        title: 'помогли с приватизацией',
        body: 'соседка переехала в Украину, помогли переписать её комнату на меня. хорошее агентство'
      }
    }];
  
  let posts = [{
      type: 'post',
      id: 1,
      attributes: {
        date: '',
        title: 'национализация недвижимости площадью свыше 150 метров квадратных',
        body: 'да да, вы не ослышались!'
      }
    },
    {
      type: 'post',
      id: 2,
      attributes: {
        date: '',
        title: 'ипотека или продать детей на органы?',
        body: 'важный вопрос, с которым сталкивается любая прогрессивная семья..'
      }
    },
    {
      type: 'post',
      id: 3,
      attributes: {
        date: '',
        title: 'можно ли прописаться в подвале?',
        body: 'нет, нельзя'
      }
    },
    {
      type: 'post',
      id: 4,
      attributes: {
        date: '',
        title: 'рыба рыба',
        body: 'что-то про газетные обои неподозрительный текст'
      }
    }];
  
  this.get('/index', function() {
    let filteredRentals = rentals.filter(function(i) {
      return i.attributes.special;
    });
    return { data: filteredRentals };
  });
  
  this.get('/feedbacks', function() {
    return { data: feedbacks };
  });
  
  this.get('/posts', function() {
    return { data: posts };
  });
  
  this.get('/rentals', function(db, request) {
    let filteredRentals = rentals.filter(function(i) {
      let unit = i.attributes;
      let query = request.queryParams;
      
      if (typeof query.type === 'undefined') {
        return { data: rentals };}

      if (query.category != null) {
        let category = query.category.map(function(value) { return value.toLowerCase(); });
        if (category.indexOf(' ' + unit.category) === -1) {
          return false;}
      }
      if (query.district != null) {
        let district = query.district.map(function(value) { return value.toLowerCase(); });
        if (district.indexOf(' ' + unit.district.toLowerCase()) === -1) {
          return false;}
      }
      
      if (query.property_type === 'commerical') {
        return (unit.type === query.type) &&
               (unit.property_type === query.property_type) &&
               (unit.area >= query.areaMin && unit.area <= query.areaMax) &&
               (unit.price >= query.priceMin && unit.price <= query.priceMax); }
      else if (query.property_type  === 'country') {
        return (unit.type === query.type) &&
               (unit.property_type === query.property_type) &&
               (unit.lot_area >= query.lotMin && unit.lot_area <= query.lotMax) &&
               (unit.area >= query.areaMin && unit.area <= query.areaMax) &&
               (unit.price >= query.priceMin && unit.price <= query.priceMax); }
      else {
        return (unit.type === query.type) &&
               (unit.property_type === query.property_type) &&
               (unit.rooms >= query.roomsMin && unit.rooms <= query.roomsMax) &&
               (unit.area >= query.areaMin && unit.area <= query.areaMax) &&
               (unit.price >= query.priceMin && unit.price <= query.priceMax); }
    });
    
    filteredRentals.sort(function(a, b) {return a.price - b.price;});
    return { data: filteredRentals };
  });

  this.get('/rentals/:id', (schema, request) => {
    let rental = rentals.filter(function(i) {
      if (i.id === request.params.id) {
        return true;}
      return false;
    });
    let rent =  rental[0];
    return { data: rent };
  });

  
  this.get('/images/:id', (schema, request) => {
    let image = images.filter(function(i) {
      if (i.id === request.params.id) {
        return true;}
      return false;
    });
    let img = image[0];
    return { data: img };
  });
  
}
