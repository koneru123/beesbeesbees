class RetiredForagerBee extends ForagerBee, Grub {
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
}

