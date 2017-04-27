import Ember from 'ember';

const red = ['проспект ветеранов', 'ленинский проспект', 'автово', 'кировский завод', 'нарвская', 'балтийская', 'технологический институт 1', 'пушкинская', 'владимирская', 'площадь восстания', 'выборгская', 'лесная', 'площадь мужества', 'политехническая', 'академическая', 'гражданский проспект', 'девяткино'];
const blue = ['купчино', 'звездная', 'звёздная', 'московская', 'парк победы', 'электросила', 'московские ворота', 'фрунзенская', 'технологический институт 2', 'сенная площадь', 'невский проспект', 'горьковская', 'петроградская', 'черная речка', 'чёрная речка', 'пионерская', 'удельная', 'озерки', 'проспект просвещения', 'парнас'];
const green = ['приморская', 'василеостровская', 'гостинный двор', 'маяковская', 'площадь александра невского 1', 'елизаровская', 'ломоносовская', 'пролетарская', 'обухово', 'рыбацкое'];
const orange = ['театральная', 'спасская', 'достоевская', 'лиговский проспект', 'площадь александра невского 2', 'новочеркасская', 'ладожская', 'проспект большевиков', 'улица дыбенко'];
const violet = ['шушары', 'дунайская', 'проспект славы', 'международная', 'бухарестская', 'волковская', 'обводный канал', 'звенигородская', 'садовая', 'адмиралтейская', 'спортивная', 'чкаловская', 'крестовский остров', 'старая деревня', 'комендантский проспект'];

export function metroLogo(params/*, hash*/) {
  var name = String(params).toLowerCase();
  
  if (red.indexOf(name) > -1) 
    {return 'metro-red';}
  if (blue.indexOf(name) > -1)
    {return 'metro-blue';}
  if (green.indexOf(name) > -1)
    {return 'metro-green';}
  if (orange.indexOf(name) > -1)
    {return 'metro-orange';}
  if (violet.indexOf(name) > -1)
    {return 'metro-violet';}
  return '';
}

export default Ember.Helper.helper(metroLogo);
