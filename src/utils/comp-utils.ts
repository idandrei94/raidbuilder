import { Result, ResultSlot, ResultSpec, Spec } from '../models/models';

export const isSpecAvailable: (spec: ResultSpec, result: Result, slot: ResultSlot) => boolean = (spec, result, slot) =>
{
    return doesCharHaveSpec(spec, slot)
        && !isCharAlreadySelected(spec, result)
        && !isPlayerAlreadyInGroup(spec, result, slot);
};

const doesCharHaveSpec = (spec: ResultSpec, slot: ResultSlot) =>
    !!slot.specs.find(v => v === spec.spec);
const isCharAlreadySelected = (spec: ResultSpec, result: Result) =>
    !!result.find(r => r.spec.character === spec.character);
const isPlayerAlreadyInGroup = (spec: ResultSpec, result: Result, slot: ResultSlot) =>
    !!result.filter(r => r.slot.group === slot.group)
        .find(r => r.spec.player === spec.player);

export const formatResult = (slot: ResultSlot, spec: ResultSpec) => `${spec.character} (${spec.player}) - ${spec.spec} (${spec.value}) ${slot.note ? `#${slot.note}` : ''}`;

export const validateGroup = (result: Result) =>
{
    const groups = result.reduce((acc, v) => acc > v.slot.group ? acc : v.slot.group, 0);
    for (let i = 1; i <= groups; ++i)
    {
        const groupSlots = result.filter(r => r.slot.group === i);
        for (let slot of groupSlots)
        {
            const playerOccurences = groupSlots.filter(s => s.spec.player === slot.spec.player).length;
            if (playerOccurences !== 1)
            {
                return false;
            }
        }
    }
    for (let slot of result)
    {
        const charOccurences = result.filter(s => s.spec.character === slot.spec.character).length;
        if (charOccurences !== 1)
        {
            return false;
        }
    }
    return true;
};