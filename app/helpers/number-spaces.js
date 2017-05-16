import Ember from 'ember';

export function numberSpaces(number/*, hash*/) {
  var instr = number.toString();
  var outstr = '';
  
  for (let i = 0; i < instr.length; i++) {
    outstr += instr[i];
    if ((i + 3 - instr.length % 3) % 3 === 2) {
      outstr += ' ';
    }
  }
  return outstr;
}

export default Ember.Helper.helper(numberSpaces);
