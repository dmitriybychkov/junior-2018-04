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

    Сущности: 

    1. Боевой маг
    Взаимодействует:
        а) с клетками на игровом поле (маг может появится в любой пустой клетке)
        б) с другими магами (перемещение возможно только в клетку не занятую иным магом + маг может наколдовать эффект на другого мага)
        в) со стенами (перемещение невозможно в клетку, где есть стена)
        г) с заклинаниями (перемещение невозможно в клетку с заклинанием + маг может наколдовать заклятье в соседней клетке)
        д) со склянками (они пополняют здоровье и ману мага)
        е) с самим собой (маг может наколдовать эффект на самого себя)

    2) склянка/маны
    Взаимодействует:
        а) с клетками на игровом поле (с некоторой вероятностью в незанятой части игрового поля может появиться склянка здоровья или маны)
        а) с боевым магом (если маг перемещается в клетку, где находится склянка, она активируется, а затем исчезает с поля)

    3) боевые заклинания
        а) с клетками на игровом поле (может быть создано только в свободной клетке + заклинание появляется в соседней точке рядом с магом в соответствующем направлении)
        б) со стенами (заклинание исчезает с игрового поля, если столкнулось со стеной)
        в) с другими заклинаниями и склянками (проходят сквозь друг друга)
        г) с боевыми магами (заклинание применяет эффект к этому магу, с которым столкнулось):
            1. огненный шар (при столкновении с магом наносит ему урон, уменьшая показатель здоровья)
            2. ледяная стрела – при столкновении с магом замораживает его на несколько ходов)



    Возможные игровые конфликты:

    1) два мага попытаются занять однуи ту же клетку
    2) две склянки или маны могут появиться в одной и той же клетке

*/

//Домашняя работа, задание 4(бонус)

let a = 5;
let b = 8;

a = a * b;
b = a / b;
a = a / b;

console.log(a);
console.log(b);
