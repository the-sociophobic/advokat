import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    /*
    return RSVP.hash({
      feedbacks:  this.get('store').findAll('feedback'),
      rentals:    this.get('store').findAll('rental'),
      posts:       this.get('store').findAll('post')
    });
    */
    return [{
      feedbacks: [{
        date: '',
        title: 'ой',
        body: 'купил квартиру в Хрущевке, а её снесли... но агентство норм'
      }, {
        date: '',
        title: 'у меня нет почки',
        body: 'посоветовали взять ипотеку, а через 2 месяца коллекторы подожгли мою машину и забрали почку.. но агентство хорошее'
      }, {
        date: '',
        title: 'помогли с приватизацией',
        body: 'соседка переехала в Украину, помогли переписать её комнату на меня. хорошее агентство'
      }],
      rentals: [{
      }],
      posts: [{
        date: '',
        title: 'еееееееееее, коммунизм',
        body: 'частная собственность отменена'
      }, {
        date: '',
        title: 'еееееееееее, кризис',
        body: 'цены на квартиры растут, но если вы владеете квартирами, они падают'
      }, {
        date: '',
        title: 'еееееееееее, пирамиды',
        body: 'акции МММ-2 растут, как и биткоины. квартиры всё ещё неоч'
      }],
    }];
  }
});
