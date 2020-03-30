class ForagerBee extends Bee {
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
}

