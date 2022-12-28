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