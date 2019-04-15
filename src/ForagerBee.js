var ForagerBee = function() {
    HoneyMakerBee.call(this);
    this.job = 'find pollen';
    this.canFly = true;
    this.treasureChest = [];
};

ForagerBee.prototype = Object.create(Grub.prototype);
ForagerBee.prototype = Object.create(HoneyMakerBee.prototype);

ForagerBee.prototype.forage = function () {
    this.treasureChest.push('treasure');
};

ForagerBee.prototype.constructor = ForagerBee;