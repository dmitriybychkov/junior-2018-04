'use strict';

let plan = `
###############
#             #
#       #     #
#             #
#             #
#             #
###############`;

plan = plan.trim().split('\n');

let planW = plan[0].length;
let planH = plan.length;

let mageX = 3;
let mageY = 2;

function printPlan() {
    let s = '';
    for (let i = 0; i < planH; i++) {
        for (let j = 0; j < planW; j++) {
            if (j == mageX && i == mageY) {
                s += 'M';
            } else {
                s += plan[i][j];
            }
        }
        s += '\n';
    }
    console.log(s);
}

printPlan();

function moveLeft() {
    if (plan[mageY][mageX - 1] == ' ') {
        mageX--;
    }
    printPlan();
}

function moveRight() {
    if (plan[mageY][mageX + 1] == ' ') {
        mageX++;
    }
    printPlan();
}

function moveUp() {
    if (plan[mageY - 1][mageX] == ' ') {
        mageY--;
    }
    printPlan();
}

function moveDown() {
    if (plan[mageY + 1][mageX] == ' ') {
        mageY++;
    }
    printPlan();
}

/*

while (plan[mageY][mageX + 1] == ' ') {
    moveRight();
}

*/

// Домашняя работа, задание 1

function moveRU() {
    if (plan[mageY - 1][mageX + 1] == ' ') {
        mageY--;
        mageX++;
    }
    printPlan();
}

function moveRD() {
    if (plan[mageY + 1][mageX + 1] == ' ') {
        mageY++;
        mageX++;
    }
    printPlan();
}

function moveLU() {
    if (plan[mageY - 1][mageX - 1] == ' ') {
        mageY--;
        mageX--;
    }
    printPlan();
}

function moveLD() {
    if (plan[mageY + 1][mageX - 1] == ' ') {
        mageY++;
        mageX--;
    }
    printPlan();
}

let dir = {
    x: 3,
    y: -3
}

function move(dir) {
    if ( Math.abs(dir.x) == Math.abs(dir.y) ) {
        if ( dir.x > 0 && dir.y < 0 ) {
            for ( let i = 0; i < dir.x; i++ ) {
                moveRD();
            }
        } else if ( dir.x > 0 && dir.y > 0 ) {
            for ( let i = 0; i < dir.x; i++ ) {
                moveRU();
            }
        } else if ( dir.x < 0 && dir.y > 0 ) {
            for ( let i = 0; i < Math.abs(dir.x); i++ ) {
                moveLU();
            }
        } else {
            for ( let i = 0; i < Math.abs(dir.x); i++ ) {
                moveLD();
            }
        }
    } else {
        if ( dir.x > 0 ) {
            for ( let i = 0; i < dir.x; i++ ) {
                moveRight();
            }
        } else if ( dir.x < 0) {
            for ( let i = 0; i < Math.abs(dir.x); i++ ) {
                moveLeft();
            }
        }
        if ( dir.y > 0 ) {
            for ( let i = 0; i < dir.y; i++ ) {
                moveUp();
            }
        } else if ( dir.y < 0) {
            for ( let i = 0; i < Math.abs(dir.y); i++ ) {
                moveDown();
            }
        }
    }
}

move(dir);

//Домашняя работа, задание 3

/*

    Сущности(занимают 1 клетку): 

    1. Боевой маг:

        - Маг может ходить в любую пустую клетку или клетку со склянкой.
        - Колдовать заклинание, если есть мана.

    2. Склянка:

        - Рандомно появляется в пустой клетке.
        - Если маг будет в этой клетке, то применится соотв. эффект и склянка исчезнет.

    3. Боевые заклинания:

        - Может быть создано только в свободной клетке рядом с магом и перемещается в заданном направлении.
        - Заклинание исчезает с игрового поля, если столкнулось со стеной или магом.
        - Cвободно проходят друг через друга, а также через склянки.

    Возможные конфликты:

    - Два мага попытаются занять однуи ту же клетку. Займет ее только тот маг, который будет обработан первым, второй маг останется на месте.

*/

//Домашняя работа, задание 4(бонус)

let a = 5;
let b = 8;

a = a * b;
b = a / b;
a = a / b;

console.log(a);
console.log(b);
