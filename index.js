const monster = {
    maxHealth: 10,
    name: "Лютый",
    moves: [
        {
            "name": "Удар когтистой лапой",
            "physicalDmg": 3, // физический урон
            "magicDmg": 0,    // магический урон
            "physicArmorPercents": 20, // физическая броня
            "magicArmorPercents": 20,  // магическая броня
            "cooldown": 0     // ходов на восстановление
        },
        {
            "name": "Огненное дыхание",
            "physicalDmg": 0,
            "magicDmg": 4,
            "physicArmorPercents": 0,
            "magicArmorPercents": 0,
            "cooldown": 3
        },
        {
            "name": "Удар хвостом",
            "physicalDmg": 2,
            "magicDmg": 0,
            "physicArmorPercents": 50,
            "magicArmorPercents": 0,
            "cooldown": 2
        },
    ]
}
const magician = {
    maxHealth: 10,
    name: "Евстафий",
    moves: [
        {
            "name": "Удар боевым кадилом",
            "physicalDmg": 2,
            "magicDmg": 0,
            "physicArmorPercents": 0,
            "magicArmorPercents": 50,
            "cooldown": 0
        },
        {
            "name": "Вертушка левой пяткой",
            "physicalDmg": 4,
            "magicDmg": 0,
            "physicArmorPercents": 0,
            "magicArmorPercents": 0,
            "cooldown": 4
        },
        {
            "name": "Каноничный фаербол",
            "physicalDmg": 0,
            "magicDmg": 5,
            "physicArmorPercents": 0,
            "magicArmorPercents": 0,
            "cooldown": 3
        },
        {
            "name": "Магический блок",
            "physicalDmg": 0,
            "magicDmg": 0,
            "physicArmorPercents": 100,
            "magicArmorPercents": 100,
            "cooldown": 4
        },
    ]
}

var readlineSync = require('readline-sync');
difficulty  = ['easy', 'normal', 'hard'];
index_game = readlineSync.keyInSelect(difficulty, 'Difficulty: ');

if(index_game == 0){
    magician.maxHealth = 10;
}
else if(index_game == 1){
    magician.maxHealth = 6;
}
else if(index_game == 2){
    magician.maxHealth = 3;
}
console.log('Ok, start ' + difficulty[index_game] + '  game!');

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

// do{
//     number_moves = getRandomInt(1, 3);
//     monster.moves[number_moves];
//     console.log('Ход монстра: '); 
//     console.log(
//     monster.moves[number_moves].name, 
//     "Физический урон: " + monster.moves[number_moves].physicalDmg, 
//     "Магический урон: " + monster.moves[number_moves].magicDmg, 
//     "Физическая броня: " + monster.moves[number_moves].physicArmorPercents,
//     "Магическая броня: " + monster.moves[number_moves].magicArmorPercents,
//     "КД: " + monster.moves[number_moves].cooldown,
//     "Здоровье: " + monster.maxHealth);

//     action  = ['1', '2', 
//     '3', '4'];
  
//     player_action = readlineSync.keyInSelect(action, 'Your action: ');
//     console.log('Ход игрока: '); 
//     console.log(
//         magician.moves[player_action].name, 
//         "Физический урон: " + magician.moves[player_action].physicalDmg, 
//         "Магический урон: " + magician.moves[player_action].magicDmg, 
//         "Физическая броня: " + magician.moves[player_action].physicArmorPercents,
//         "Магическая броня: " + magician.moves[player_action].magicArmorPercents,
//         "КД: " + magician.moves[player_action].cooldown,
//         "Здоровье: " + magician.maxHealth);

//         if(magician.moves[player_action].physicArmorPercents > monster.moves[number_moves].physicalDmg){ // Если больше физической брони
//             magician.moves[player_action].physicArmorPercents-=monster.moves[number_moves].physicalDmg; // Уменьшается физическая броня 
//         }
//         else if(magician.moves[player_action].magicArmorPercents > monster.moves[number_moves].magicDmg ) {// Если больше магической брони
//             magician.moves[player_action].magicArmorPercents-=monster.moves[number_moves].magicDmg; // Уменьшается магическая броня 
//         }
//         else if(magician.moves[player_action].physicArmorPercents < monster.moves[number_moves].physicalDmg){// Если физической брони меньше
//             while(magician.moves[player_action].physicArmorPercents > 0){
//                 magician.moves[player_action].physicArmorPercents--;
//                 monster.moves[number_moves].physicalDmg--;
//             }
//             magician.maxHealth-=monster.moves[number_moves].physicalDmg;
//         }
//         else if(magician.moves[player_action].magicArmorPercents < monster.moves[number_moves].magicDmg){// Если физической брони меньше
//             while(magician.moves[player_action].magicArmorPercents > 0){
//                 magician.moves[player_action].magicArmorPercents--;
//                 monster.moves[number_moves].magicDmg--;
//             }
//             magician.maxHealth-=monster.moves[number_moves].magicDmg;
//         }
//         console.log('Результат хода: '); 
//         console.log(
//             magician.moves[player_action].name, 
//             "Физический урон: " + magician.moves[player_action].physicalDmg, 
//             "Магический урон: " +  magician.moves[player_action].magicDmg, 
//             "Физическая броня: " +  magician.moves[player_action].physicArmorPercents,
//             "Магическая броня: " + magician.moves[player_action].magicArmorPercents,
//             "КД: " + magician.moves[player_action].cooldown,
//             "Здоровье: " + magician.maxHealth);

// }while(magician.maxHealth > 0 || monster.maxHealth > 0  ); // Условие продолжения игры
   
while(true){
    number_moves = getRandomInt(1, 3);
    monster.moves[number_moves];
    console.log('Ход монстра: '); 
    console.log(
    monster.moves[number_moves].name, 
    "Физический урон: " + monster.moves[number_moves].physicalDmg, 
    "Магический урон: " + monster.moves[number_moves].magicDmg, 
    "Физическая броня: " + monster.moves[number_moves].physicArmorPercents,
    "Магическая броня: " + monster.moves[number_moves].magicArmorPercents,
    "КД: " + monster.moves[number_moves].cooldown,
    "Здоровье: " + monster.maxHealth);

    action  = ['1', '2', 
    '3', '4'];
  
    player_action = readlineSync.keyInSelect(action, 'Your action: ');
    console.log('Ход игрока: '); 
    console.log(
        magician.moves[player_action].name, 
        "Физический урон: " + magician.moves[player_action].physicalDmg, 
        "Магический урон: " + magician.moves[player_action].magicDmg, 
        "Физическая броня: " + magician.moves[player_action].physicArmorPercents,
        "Магическая броня: " + magician.moves[player_action].magicArmorPercents,
        "КД: " + magician.moves[player_action].cooldown,
        "Здоровье: " + magician.maxHealth);

        if(magician.moves[player_action].physicArmorPercents > monster.moves[number_moves].physicalDmg){ // Если больше физической брони
            magician.moves[player_action].physicArmorPercents-=monster.moves[number_moves].physicalDmg; // Уменьшается физическая броня 
        }
        else if(magician.moves[player_action].magicArmorPercents > monster.moves[number_moves].magicDmg ) {// Если больше магической брони
            magician.moves[player_action].magicArmorPercents-=monster.moves[number_moves].magicDmg; // Уменьшается магическая броня 
        }
        else if(magician.moves[player_action].physicArmorPercents < monster.moves[number_moves].physicalDmg){// Если физической брони меньше
            while(magician.moves[player_action].physicArmorPercents > 0){
                magician.moves[player_action].physicArmorPercents--;
                monster.moves[number_moves].physicalDmg--;
            }
            magician.maxHealth-=monster.moves[number_moves].physicalDmg;
        }
        else if(magician.moves[player_action].magicArmorPercents < monster.moves[number_moves].magicDmg){// Если физической брони меньше
            while(magician.moves[player_action].magicArmorPercents > 0){
                magician.moves[player_action].magicArmorPercents--;
                monster.moves[number_moves].magicDmg--;
            }
            magician.maxHealth-=monster.moves[number_moves].magicDmg;
        }
        console.log('Результат хода: '); 
        console.log(
            magician.moves[player_action].name, 
            "Физический урон: " + magician.moves[player_action].physicalDmg, 
            "Магический урон: " +  magician.moves[player_action].magicDmg, 
            "Физическая броня: " +  magician.moves[player_action].physicArmorPercents,
            "Магическая броня: " + magician.moves[player_action].magicArmorPercents,
            "КД: " + magician.moves[player_action].cooldown,
            "Здоровье: " + magician.maxHealth);


            

            // Условия завершения игры
            if(magician.maxHealth <= 0){
                console.log('LOSE GAME'); 
                break;
            }
            else if(monster.maxHealth <= 0){
                console.log('WIN GAME');
                break;
            }
}
    


