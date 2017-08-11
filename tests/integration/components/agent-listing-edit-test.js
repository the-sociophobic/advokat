import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('agent-listing-edit', 'Integration | Component | agent listing edit', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{agent-listing-edit}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#agent-listing-edit}}
      template block text
    {{/agent-listing-edit}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});