function Fighter({ name, damage, hp, strength, agility }) {
  // "Private" variables here
  let _name = name;
  let _damage = damage;
  let _hp = hp;
  const _maxHp = hp;
  let _strength = strength;
  let _agility = agility;
  let _wins = 0;
  let _losses = 0;

  // Public variables here
  return {
    // Getter Methods
    getName() {
      return _name;
    },
    getDamage() {
      return _damage;
    },
    getStrength() {
      return _strength;
    },
    getAgility() {
      return _agility;
    },
    getHealth() {
      return _hp;
    },
    // Setter Methods
    setHealth(newHealth) {
      _hp = Math.max(Math.min(newHealth, _maxHp), 0);
    },

    attack(enemy) {
      const PROBAB = 101;
      const successProbability = enemy.getStrength() + enemy.getAgility();
      let randomSuccessful = Math.floor(Math.random() * PROBAB);

      if (randomSuccessful > successProbability) {
        enemy.setHealth(enemy.getHealth() - _damage);
        console.log(
          _name + ' makes ' + _damage + ' damage to ' + enemy.getName()
        );
      } else {
        console.log(_name + ' attack missed');
      }
    },
    logCombatHistory() {
      console.log(
        'Name: ' + _name + ', Wins: ' + _wins + ', Losses: ' + _losses
      );
    },
    heal(healthPoints) {
      _hp = Math.min(_hp + healthPoints, _maxHp);
    },
    dealDamage(healthPoints) {
      _hp = Math.max(_hp - healthPoints, 0);
    },
    addWin() {
      _wins++;
    },
    addLoss() {
      _losses++;
    }
  };
}

function tryToKill(atacker, defender) {
  atacker.attack(defender);
  if (defender.getHealth() <= 0) {
    console.log(atacker.getName() + ' has won!');
    defender.addLoss();
    atacker.addWin();
    return true;
  }
  return false;
}

function battle(fighter1, fighter2) {
  if (fighter1.getHealth() === 0) {
    console.log(fighter1.getName() + " is dead and can't fight.");
  } else if (fighter2.getHealth() === 0) {
    console.log(fighter2.getName() + " is dead and can't fight.");
  } else {
    while (fighter1.getHealth() > 0 && fighter2.getHealth() > 0) {
      if (!tryToKill(fighter1, fighter2)) {
        tryToKill(fighter2, fighter1);
      }
    }
  }
}

const fighter1 = new Fighter({
  name: 'Maximus',
  damage: 20,
  hp: 100,
  strength: 20,
  agility: 15
});

const fighter2 = new Fighter({
  name: 'Commodus',
  damage: 25,
  hp: 90,
  strength: 25,
  agility: 20
});

battle(fighter1, fighter2);
