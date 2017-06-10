export default function() {
  this.namespace = '/api';

  this.get('/rentals', function() {
    return {
      data: [{
      type: 'продажа',
},
]
    };
  });
}