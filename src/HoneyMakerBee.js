/* class HoneyMakerBee extends Bee {
  constructor(age, color, food, eat, job, honeyPot, makeHoney, giveHoney) {
    super(age, color, food, eat, job);
    this.age = 10,
    this.job = 'make honey',
    this.honeyPot = 0
  }
  makeHoney() {
    this.honeyPot += 1;
  }
  giveHoney() {
    this.honeyPot -= 1;
  }
} */

var HoneyMakerBee = function() {
  Bee.call(this);
  this.age = 10,
  this.job = 'make honey',
  this.honeyPot = 0;
}

HoneyMakerBee.prototype = Object.create(Bee.prototype);
HoneyMakerBee.prototype.constructor = HoneyMakerBee;

HoneyMakerBee.prototype.makeHoney = function() {
  this.honeyPot += 1;
}

HoneyMakerBee.prototype.giveHoney = function() {
  this.honeyPot -= 1;
}




