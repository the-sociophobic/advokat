import Ember from 'ember';

const yandex = window.ymaps;

export default Ember.Object.extend({

  init() {
    //this.set('geocoder', new yandex.maps.Geocoder());
  },

  createMap(element, location) {
    var that = this;
    yandex.ready(function(){
      let myMap = new yandex.Map("map", {
                  center: [59.9343, 30.3351],
                  zoom: 15
              }); 
      that.pinLocation(location, myMap);

      return myMap;
    });
  },

  pinLocation(location, myMap) {
    console.log(location);
    yandex.geocode(location).then(result => {
      console.log(myMap.getCenter());
      let position = result.geoObjects.get(0).geometry._coordinates;
      myMap.setCenter(position);
      console.log(myMap.getCenter());
      
      let myPlacemark = new ymaps.Placemark(position, {});
      myMap.geoObjects.add(myPlacemark);
    });
  }
  
});