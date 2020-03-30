/* class Grub {
  constructor(age, color, food) {
    this.age = 0,
    this.color = 'pink',
    this.food = 'jelly'
  }
  eat() {
    return
  }
} */

var Grub = function() {
  this.age = 0,
  this.color = 'pink',
  this.food = 'jelly'
}

Grub.prototype.eat = function() {
  return;
}

Grub.prototype = Object.create(Grub.prototype);
Grub.prototype.constructor = Grub;


