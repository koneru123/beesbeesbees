/* class ForagerBee extends Bee {
  constructor(age, job, color, food, eat, canFly, treasureChest, forage) {
    super(age, color, food, eat, job);
    this.age = 10,
    this.job = 'find pollen',
    this.canFly = true,
    this.treasureChest = [],
  }
  forage() {
    this.treasureChest.push('treasure');
  }
} */

var ForagerBee = function() {
  Bee.call(this);
  this.age = 10,
  this.job = 'find pollen',
  this.canFly = true,
  this.treasureChest = [];
}

ForagerBee.prototype = Object.create(Bee.prototype);
ForagerBee.prototype.constructor = ForagerBee;

ForagerBee.prototype.forage = function() {
  this.treasureChest.push('treasure');
}


