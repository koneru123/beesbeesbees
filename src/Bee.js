/* class Bee extends Grub {
  constructor(age, color, food, eat, job) {
    super(age, color, food, eat);
    this.age = 5,
    this.color = 'yellow',
    this.job = 'keep on growing';
  }
} */

var Bee = function() {
  Grub.call(this);
  this.age = 5;
  this.color = "yellow";
  this.job = "keep on growing";
};

Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Bee;
