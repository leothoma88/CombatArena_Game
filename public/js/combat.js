const { options } = require("../../models/Characters");


// const john = { 
//     health: 100,
//     name: john,
//     strength: 30,
//     user_id: 1,
//     id: 1,
// }

// const monster = {
//     health: 100, 
//     name: vampire,
//     strength: 20,
//     user_id: 2,
//     id: 2,
// }
class Character {
    constructor(name, strength, health) {
        this.name = name;
        this.strength = strength;
        this.health = health;
    }

    isAlive() {
        if(this.health < 1) {
            console.log(`${this.name} has been defeated`);
            return false;
        }
        return true;
    }
}

//just for testing, dunno if i actually even need to use these
const john = new Character('john', 100, 10);
const cow = new Character('cow', 100, 5);

const battle = (character, npc, choice) => {
    character = this.character;
    npc = this.npc;
    choice = this.choice;
    const userWin;
    const userLoss;
    const tie;
    let attackChoice = [light, strong, parry];
    chooseAttack();

    let index = Math.floor(Math.random() * attackChoice.length;)
    npcChoice = options[index];

    if (choice === npcChoice) {
        return tie;
    } else if (
        (choice === 'light' && npcChoice === 'strong') ||
        (choice === 'strong' && npcChoice === 'parry') ||
        (choice === 'parry' && npcChoice === 'light')
    ) {
        return userWin;
    } else if (
        (choice === 'strong' && npcChoice === 'light') ||
        (choice === 'parry' && npcChoice === 'strong') ||
        (choice === 'light'&& npcChoice === 'parry')
    ) {
        return userLoss;
    }      
}


//need function to subtract strength from health based on the result. dunno if i should do this inside the battle function
//or afterwards in another
