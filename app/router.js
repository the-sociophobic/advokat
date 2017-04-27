import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('first');
  this.route('about');
  this.route('contact');
  this.route('rentals');
  this.route('services');
  this.route('jobs');
  this.route('feedback');

  this.route('index', function() {});
});

export default Router;
