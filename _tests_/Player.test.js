// const { exportAllDeclaration } = require('@babel/types');
// const { default: TestRunner } = require('jest-runner');
const Potion = require('../lib/Potion');

jest.mock('../lib/Potion.js');



const Player = require('../lib/Player');
const { JestHook } = require('jest-watcher');
const { objectExpression } = require('@babel/types');

test('creates a player object', () => {
    const player = new Player('Dave');

    expect(player.name).toBe('Dave');
    expect(player.health).toEqual(expect.any(Number));
    expect(player.strength).toEqual(expect.any(Number));
    expect(player.agility).toEqual(expect.any(Number));

    expect(player.inventory).toEqual (
        expect.arrayContaining([expect.any(Object)])
    );

    console.log(new Potion());
});

