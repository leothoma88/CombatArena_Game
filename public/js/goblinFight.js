const router = require('express').Router();
//import battle.js
//import getMOnsterData
//import getCharacterData
//import goblin image
// const getCharacter = require("./getCharacterData");
// // const getMonster  = require("./getMonsterData");
const { Monsters } = require('../..controllers/api/monsterRoutes');
// const char = getCharacter(0);
// const goblin = getMonster(0);

let goblin = router.get();

console.log('call goblin', goblin);

let something = [];
const getMonster = async (id) =>  {
    // let x;
    return await fetch(`/api/monsters/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    // .then((response) => response.json())
    // .then((data) => {x = data})
    
    // .catch(error => console.log(error));
    // return x;
}
// export default getMonster;
// const goblin = getMonster(0);

// console.log('show goblin: ', goblin);
// console.log(getMonster(0));
// let goblin = getMonster(0);
getMonster(0).then((res) => res.json()).then((data) => {
    

something.push(data);
console.log(something)
    console.log(data.strength)});

console.log(something)

const settingInterval = setInterval(() => {
    if(something.length !== 0){
    clearInterval(settingInterval);
    } else {
    console.log(something);
    }
}, 500)

console.log(something[0])
// let goblin = {
//     id: 0,
//     name: 'goblin',
//     strength: 2,
//     health: 2,
// }