import Inflector from 'ember-inflector';

const inflector = Inflector.inflector;

inflector.irregular('binary', 'images.files');

// Meet Ember Inspector's expectation of an export
export default {};