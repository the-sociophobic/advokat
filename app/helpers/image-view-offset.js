import Ember from 'ember';

export function imageViewOffset([index, slideIndex]) {
  if (slideIndex > 3 && index < slideIndex - 3)
    return 'margin-left: -150px';
  return '';
}

export default Ember.Helper.helper(imageViewOffset);
