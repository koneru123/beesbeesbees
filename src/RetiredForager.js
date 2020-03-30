/* class RetiredForagerBee extends ForagerBee, Grub {
  constructor(age, job, canFly, color, forage, food, eat, treasureChest, gamble) {
    super(age, job, color, food, eat, canFly, treasureChest, forage);
    this.age = 40,
    this.job = 'gamble',
    this.canFly = false,
    this.color = 'grey'
  }
  forage() {
    return 'I am too old, let me play cards instead';
  }
  gamble() {
    this.treasureChest.push('treasure');
  }
} */

var RetiredForagerBee = function() {
  ForagerBee.call(this);
  Grub.call(this);
  this.age = 40,
  this.job = 'gamble',
  this.canFly = false,
  this.color = 'grey';
}

RetiredForagerBee.prototype = Object.create(ForagerBee.prototype);
RetiredForagerBee.prototype = Object.create(ForagerBee.prototype);
RetiredForagerBee.prototype.constructor = RetiredForagerBee;

RetiredForagerBee.prototype.forage = function() {
  return 'I am too old, let me play cards instead';
}

RetiredForagerBee.prototype.gamble = function() {
  this.treasureChest.push('treasure');
}





