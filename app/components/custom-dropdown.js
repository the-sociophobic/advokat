import Ember from 'ember';

export default Ember.Component.extend({
  isExpanded: false,
  any: 'Любой',
  optionsAlign: '',
  
  init() {
    this._super(...arguments);
    if (this.get('width') < this.get('options-width'))
      this.set('optionsAlign', 'left: -440px;');
    /*
    if (this.$('.multiple-dropdown')[0].left > document.width / 2) {
      
      var {width, optionsWidth} = this.getProperties('width', 'options-width');
    
      width = width.toString().slice(-1)[0] == '%' ? width.toString().slice(0, -1).parseInt() / 100 * document.width : width.toString().slice(0, -2).parseInt();
      optionsWidth = optionsWidth.toString().slice(-1)[0] == '%' ? optionsWidth.toString().slice(0, -1).parseInt() / 100 * this.$('.multiple-dropdown').width : optionsWidth.toString().slice(0, -2).parseInt();
      
      this.set('optionsAlign', 'right: ' + (width - optionsWidth).toString() + 'px;');
    }
    */
  },
  
  actions: {
    toggleExpand() {
      this.toggleProperty('isExpanded');
    },
    Expand() {
      this.set('isExpanded', true);
    },
    Collapse() {
      this.set('isExpanded', false);
    },
    toggleLabel(label) {
      var hehe = label;
      this.set('selected', hehe);
      this.set('isExpanded', false);
      
      this.get('commit')();
    },
    any() {
      var hehe = undefined;
      this.set('selected', hehe);
      this.set('isExpanded', false);

      this.get('commit')();
    }
  }
});
