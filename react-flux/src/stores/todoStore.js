import { EventEmitter } from 'events';

var TodoStore = Object.assign({}, EventEmitter.prototype, {
  items: [],
  getAll(){
    return this.items;
  },
  addItem(txt){
    this.items.push(txt);
    this.emit('change');
  },
  addChangeListener(callback){
    this.on('change', callback)
  },
  removeChangeListener(callback){
    this.removeListener('change', callback);
  }
});

module.exports = TodoStore;