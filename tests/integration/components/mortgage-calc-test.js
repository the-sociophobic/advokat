import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('mortgage-calc', 'Integration | Component | mortgage calc', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{mortgage-calc}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#mortgage-calc}}
      template block text
    {{/mortgage-calc}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
