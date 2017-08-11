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
  this.route('privacy');
  this.route('feedbacks');
  this.route('posts');
  this.route('login');
  this.route('callbacks');
  this.route('edit');
  this.route('rental-edit',   { path: '/rental-edit/:rental_id' });
  this.route('agent-edit',    { path: '/agent-edit/:agent_id' });
  this.route('feedback-edit', { path: '/feedback-edit/:feedback_id' });
  this.route('post-edit',     { path: '/post-edit/:post_id' });
  this.route('rental-new');
  this.route('agent-new');
  this.route('feedback-new');
  this.route('post-new');
});

export default Router;
