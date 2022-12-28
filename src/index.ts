import { players } from './data/character-data';
import { iccComp } from './data/raid-compositions';
import { Composition, Player, Result, ResultSlot, ResultSpec, Spec } from './models/models';
import { formatResult, isSpecAvailable } from './utils/comp-utils';

const getSpecList = (playerList: Player[]) => playerList
    .map(player =>
        player.characters
            .map(character => character.specs
                .map(spec => ({ ...spec, character: character.name, player: player.name })))
            .flat())
    .flat().sort((a, b) => b.value - a.value);

const getSlotList: (groupCount: number, comp: Composition) => ResultSlot[] = (groupCount, comp) => [
    ...comp.tanks.map(slot => new Array(groupCount).fill(0).map((_, i) => ({ ...slot, group: i + 1, role: 'tank' as 'tank' }))).flat(),
    ...comp.healers.map(slot => new Array(groupCount).fill(0).map((_, i) => ({ ...slot, group: i + 1, role: 'healer' as 'healer' }))).flat(),
    ...comp.dps.map(slot => new Array(groupCount).fill(0).map((_, i) => ({ ...slot, group: i + 1, role: 'dps' as 'dps' }))).flat()
];

const doStuffRec: (specs: ResultSpec[], slots: ResultSlot[], solutionSoFar: Result) => Result = (specs, slots, solutionSoFar) =>
{
    // we are finished
    if (slots.length === 0)
    {
        return [];
    }
    const slot = slots[0];
    const availableSpecs = specs.filter(spec => isSpecAvailable(spec, solutionSoFar, slot));
    if (availableSpecs.length === 0)
    {
        console.log('unable to fill slot', slot);
        return [];
    }
    for (let option of availableSpecs)
    {
        const currentStep = {
            slot: slot, spec: option
        };
        const nextResult = doStuffRec(specs, slots.slice(1), [...solutionSoFar, currentStep]);
        if (nextResult.length === slots.length - 1)
        {
            return [currentStep, ...nextResult];
        } else
        {
            //console.log('failed to complete the rest of the raid');
            return [];
        }
    }
    console.log('Failed to complete the groups.');
    return [];
};

const doStuff = (groupCount: number, playerList: Player[], composition: Composition) =>
{
    const specs = getSpecList(playerList);
    const slots = getSlotList(groupCount, composition)
        .sort((a, b) =>
            specs.filter(spec => a.specs.find(v => v === spec.spec)).length -
            specs.filter(spec => b.specs.find(v => v === spec.spec)).length);
    const result = doStuffRec(specs, slots, []);
    return result;
};

const GROUP_COUNT = 2;

const result = doStuff(GROUP_COUNT, players, iccComp);

console.log('player count: ', players.length);
for (let i = 0; i < GROUP_COUNT; ++i)
{
    console.log(`############ GROUP ${i + 1} ############`);
    console.log('Tanks:');
    console.log(
        result
            .filter(r => r.slot.group === i + 1 && r.slot.role === 'tank')
            .map(slot => formatResult(slot.slot, slot.spec))
    );
    console.log('Healers:');
    console.log(
        result
            .filter(r => r.slot.group === i + 1 && r.slot.role === 'healer')
            .map(slot => formatResult(slot.slot, slot.spec))
    );
    console.log('Dps:');
    console.log(
        result
            .filter(r => r.slot.group === i + 1 && r.slot.role === 'dps')
            .map(slot => formatResult(slot.slot, slot.spec))
    );
}
// console.log(
//     result
//         .sort((a, b) => a.spec.player > b.spec.player ? 1 : -1)
//         .map(slot => formatResult(slot.slot, slot.spec))
// );