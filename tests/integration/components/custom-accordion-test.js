import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('custom-accordion', 'Integration | Component | custom accordion', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{custom-accordion}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#custom-accordion}}
      template block text
    {{/custom-accordion}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
