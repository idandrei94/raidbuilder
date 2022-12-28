const prologDb = require('../dummy');
const pl = require('tau-prolog');
require('tau-prolog/modules/promises')(pl);
const players = require('./data/character-data');
const comp = require('./data/raid-compositions');
const fs = require('fs');
const path = require('path');

const generatePlayerData = (data) => data.map(generatePlayer).flat().sort().join('\n');

const generatePlayer = (player) =>
{
    return player.characters.map(c => [`haschar(${player.name}, ${c.name}).`, ...generateCharacter(c)]).flat().sort();
};

const generateCharacter = (character) =>
{
    return character.specs.map(spec => generateSpec(character.name, spec.spec));
};

const generateSpec = (charName, spec) => `hasspec(${charName}, ${spec}).`;

const generateRoles = (index, roles) => roles.map(role => `slotis(${'slot' + index}, ${role}).`);

const generateComp = (comp) => comp.map((slot, index) => generateRoles(index, slot)).flat().sort().join('\n');

generateSlotQuery = (slots) => slots.map((_, index) => [
    `slotis(${'slot' + index}, ${'SPEC' + index})`,
    `hasspec(${'CHAR' + index}, ${'SPEC' + index})`,
    `haschar(${'PLAYER' + index}, ${'CHAR' + index})`]
).flat();

generatePlayerInequalityQuery = (count) =>
    new Array(count - 1).fill(0)
        .map((_, index) => index)
        .map(i => new Array(count - 1 - i).fill(0).map((_, j) => `PLAYER${i} \\== PLAYER${i + j + 1}`)).flat();

generateQuery = (slots) =>
{
    return [...generateSlotQuery(slots), ...generatePlayerInequalityQuery(slots.length), ...new Array(slots.length).fill(0).map((_, index) => `format('~w (~w): ~w ~n', [CHAR${index}, PLAYER${index}, SPEC${index}])`)].join(',\n') + '.';
};

const doStuff = async () =>
{
    await fs.writeFileSync(path.join(__dirname, '..', 'prolog', 'characters.pl'), `${generatePlayerData(players)}\n${generateComp(comp)}\nget_comp :-\n${generateQuery(comp)}`);
    return;
    const session = pl.create();
    await session.promiseConsult(`${generatePlayerData(players)}\n${generateComp(comp)}\nget_comp :-\n${generateQuery(comp)}`);
    const start = Date.now();
    await session.promiseQuery('get_comp.');
    for await (let answer of session.promiseAnswers())
    {
        console.log('Solutions calculated in ', ((Date.now() - start) / 60000).toFixed(0), 'minutes.');
        console.log(session.format_answer(answer));
    }
};

doStuff();