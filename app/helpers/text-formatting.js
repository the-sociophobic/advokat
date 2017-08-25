import Ember from 'ember';

export function textFormatting(text) {
  let formatted = text.copy();
  formatted = formatted.toString().replace(/\n/g, '<br>');
  return formatted;
}

export default Ember.Helper.helper(textFormatting);
