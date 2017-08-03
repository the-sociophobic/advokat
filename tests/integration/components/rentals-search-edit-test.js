import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('rentals-search-edit', 'Integration | Component | rentals search edit', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{rentals-search-edit}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#rentals-search-edit}}
      template block text
    {{/rentals-search-edit}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
