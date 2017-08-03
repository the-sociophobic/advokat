import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('contact');
  this.route('rentals');
  this.route('rental', { path: '/rental/:rental_id' });
  this.route('services');
  this.route('jobs');
  this.route('feedback');
  this.route('privacy');
  this.route('feedbacks');
  this.route('posts');
  this.route('login');
  this.route('callbacks');
  this.route('edit', function() {
    this.route('rental');
    this.route('post');
    this.route('feedback');
  });
});

export default Router;
