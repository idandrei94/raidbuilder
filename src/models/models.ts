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
    [group: string]: CompOption[];
};

export type CompOption = Spec[];