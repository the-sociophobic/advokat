import Ember from 'ember';

export function imageViewOffset([index, slideIndex]) {
  if (slideIndex > 5 && index < slideIndex - 5)
    return 'margin-left: -150px';
  return '';
}

export default Ember.Helper.helper(imageViewOffset);
