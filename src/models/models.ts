export type Spec =
    // Hunter
    'marksmanship' |
    // Priest
    'shadow' |
    'holypriest' |
    'discipline' |
    // Mage
    'fire' |
    'arcane' |
    // Death Knight
    'frostdps' |
    'unholydps' |
    'bloodtank' |
    // Paladin
    'retribution' |
    'protection' |
    'holy' |
    // Shaman
    'elemental' |
    'restoration' |
    'enhancement' |
    // Druid
    'feraldps' |
    'feraltank' |
    'balance' |
    'restodruid' |
    // Rogue
    'combat' |
    // Warrior
    'fury' |
    // Warlock
    'affliction' |
    'demonology';

export type Character = {
    name: string;
    specs: { spec: Spec, value: number; }[];
};

export type Player = {
    name: string,
    characters: Character[];
};

export type Composition = {
    tanks: CompOption[],
    healers: CompOption[],
    dps: CompOption[];
};

export type CompOption = { specs: Spec[], note?: string; };

export type ResultSlot = {

    specs: Spec[];
    note?: string;
    role: 'tank' | 'healer' | 'dps';
    group: number;
};

export type ResultSpec = {

    character: string;
    player: string;
    spec: Spec;
    value: number;
};

export type Result = {
    slot: ResultSlot,
    spec: ResultSpec;
}[];