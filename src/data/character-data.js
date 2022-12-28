
const players = [
    {
        name: 'advertise',
        characters: [
            { name: 'advertise', 'specs': [{ spec: 'marksmanship', value: 1 }] },
            { name: 'tiref', 'specs': [{ spec: 'fire', value: 3 }] },
            { name: 'notadvertise', specs: [{ spec: 'feraldps', value: 27 }] },
            { name: 'progression', specs: [{ spec: 'affliction', value: 31 }] },
            { name: 'irone', 'specs': [{ spec: 'combat', value: 29 }] },
        ]
    },
    {
        name: 'alitta',
        characters: [
            { name: 'alitadisc', 'specs': [{ spec: 'discipline', value: 12 }] },
            { name: 'alitta', 'specs': [{ spec: 'combat', value: 31 }] },
            { name: 'alittad', 'specs': [{ spec: 'discipline', value: 14 }] },
            { name: 'cahlan', 'specs': [{ spec: 'bloodtank', value: 6 }] },
            { name: 'invuctus', 'specs': [{ spec: 'discipline', value: 32 }] },
            { name: 'layoa', 'specs': [{ spec: 'discipline', value: 25 }] },
            { name: 'femalewarr', 'specs': [{ spec: 'fury', value: 28 }] },
            { name: 'todesengele', 'specs': [{ spec: 'bloodtank', value: 2 }] },
            { name: 'cosmicheals', 'specs': [{ spec: 'holy', value: 13 }] }
        ]
    },
    {
        name: 'aramid',
        characters: [
            { name: 'aramid', 'specs': [{ spec: 'combat', value: 22 }] },
            {
                name: 'carbotech', 'specs': [
                    { spec: 'retribution', value: 40 },
                    { spec: 'protection', value: 12 }
                ]
            }
        ]
    },
    {
        name: 'asheria',
        characters: [
            {
                name: 'asheria', 'specs': [
                    { spec: 'balance', value: 36 },
                    { spec: 'feraltank', value: 23 }
                ]
            },
            {
                name: 'notasheria', 'specs': [
                    { spec: 'balance', value: 27 },
                    { spec: 'restodruid', value: 40 }
                ]
            },
            { name: 'airehsa', 'specs': [{ spec: 'balance', value: 25 }] },
            {
                name: 'asherian', 'specs': [
                    { spec: 'balance', value: 4 },
                    { spec: 'feraltank', value: 17 },
                ]
            },
            {
                name: 'notasheria', 'specs': [
                    { spec: 'balance', value: 10 },
                    { spec: 'restodruid', value: 12 }
                ]
            },
        ]
    },
    {
        name: 'beli',
        characters: [
            {
                name: 'beli', 'specs': [
                    { spec: 'retribution', value: 1 },
                    { spec: 'protection', value: 16 }
                ]
            },
            { name: 'belka', 'specs': [{ spec: 'feraltank', value: 24 }] },
            { name: 'belliarr', 'specs': [{ spec: 'combat', value: 12 }] },
            { name: 'bllink', 'specs': [{ spec: 'shadow', value: 13 }] },
            { name: 'crni', 'specs': [{ spec: 'fury', value: 27 }] },
            { name: 'whitemagi', 'specs': [{ spec: 'fire', value: 24 }] },
            {
                name: 'whiteman', 'specs': [{ spec: 'unholydps', value: 4 }]
            },
            { name: 'whitemann', 'specs': [{ spec: 'frostdps', value: 9 }] },
        ]
    },
    {
        name: 'asiimar',
        characters: [
            { name: 'asiimar', 'specs': [{ spec: 'marksmanship', value: 1 }] },
            {
                name: 'asiimer', 'specs': [
                    { spec: 'balance', value: 11 },
                    { spec: 'restodruid', value: 36 }
                ]
            },
            { name: 'burstmachine', 'specs': [{ spec: 'fury', value: 2 }] },
            { name: 'plagemachine', 'specs': [{ spec: 'unholydps', value: 1 }] },
            { name: 'catchmebaby', 'specs': [{ spec: 'combat', value: 40 }] },
            { name: 'ikissedagirl', 'specs': [{ spec: 'holy', value: 5 }] },
        ]
    },
    {
        name: 'budey',
        characters: [
            {
                name: 'budey', 'specs': [
                    { spec: 'restodruid', value: 3 },
                    { spec: 'balance', value: 21 }
                ]
            },
            { name: 'elorria', 'specs': [{ spec: 'fire', value: 33 }] },
            { name: 'avrosia', 'specs': [{ spec: 'holy', value: 14 }] },
            {
                name: 'warmfate', 'specs': [
                    { spec: 'discipline', value: 13 },
                    { spec: 'shadow', value: 18 }
                ]
            },
            { name: 'strify', 'specs': [{ spec: 'marksmanship', value: 23 }] },
            {
                name: 'obi', 'specs': [
                    { spec: 'holy', value: 3 },
                    { spec: 'protection', value: 15 }
                ]
            },
            { name: 'buddie', 'specs': [{ spec: 'restodruid', value: 2 }] }
        ]
    },
    {
        name: 'bunnylover',
        characters: [
            { name: 'bunnyhater', 'specs': [{ spec: 'holy', value: 40 }] },
            {
                name: 'bunnylover', 'specs': [
                    { spec: 'holypriest', value: 14 },
                    { spec: 'discipline', value: 33 }
                ]
            },
            { name: 'muffinhater', 'specs': [{ spec: 'restodruid', value: 25 }] },
            { name: 'muffinlover', 'specs': [{ spec: 'restoration', value: 6 }] },
        ]
    },
    {
        name: 'calbo',
        characters: [
            { name: 'arbol', 'specs': [{ spec: 'restodruid', value: 3 }] },
            {
                name: 'calbito', 'specs': [
                    { spec: 'demonology', value: 29 },
                    { spec: 'affliction', value: 11 }
                ]
            },
            {
                name: 'calbo', 'specs': [
                    { spec: 'discipline', value: 17 },
                    { spec: 'shadow', value: 27 }
                ]
            },
            {
                name: 'elcalbo', 'specs': [
                    { spec: 'holy', value: 39 },
                    { spec: 'retribution', value: 10 }
                ]
            },
            {
                name: 'elmuerte', 'specs': [
                    { spec: 'frostdps', value: 12 },
                    { spec: 'bloodtank', value: 31 }
                ]
            },
            { name: 'eltotem', 'specs': [{ spec: 'restoration', value: 6 }] },
            { name: 'livingbombs', 'specs': [{ spec: 'fire', value: 33 }] },
            { name: 'platehealer', 'specs': [{ spec: 'holy', value: 6 }] },
            { name: 'karrier', 'specs': [{ spec: 'fury', value: 26 }] }
        ]
    },
    {
        name: 'carrykk',
        characters: [
            {
                name: 'geydar', 'specs': [
                    { spec: 'unholydps', value: 8 },
                    { spec: 'frostdps', value: 21 }
                ]
            },
            {
                name: 'carrykk', 'specs': [
                    { spec: 'fury', value: 35 }
                ]
            },
            {
                name: 'goolen', 'specs': [
                    { spec: 'retribution', value: 30 },
                    { spec: 'holy', value: 12 }
                ]
            },
            {
                name: 'ikita', 'specs': [
                    { spec: 'shadow', value: 17 },
                    { spec: 'discipline', value: 31 }
                ]
            },
            {
                name: 'phylaa', 'specs': [
                    { spec: 'restoration', value: 24 },
                    { spec: 'enhancement', value: 6 }
                ]
            },
            {
                name: 'thoga', 'specs': [
                    { spec: 'combat', value: 22 }
                ]
            },
            {
                name: 'ozail', 'specs': [
                    { spec: 'fire', value: 6 }
                ]
            },
        ]
    },
    {
        name: 'chillness',
        characters: [
            {
                name: 'chillness', 'specs': [
                    { spec: 'shadow', value: 18 },
                    { spec: 'discipline', value: 30 }
                ]
            },
            {
                name: 'chillrip', 'specs': [
                    { spec: 'restoration', value: 34 }
                ]
            },
            {
                name: 'chillfaith', 'specs': [
                    { spec: 'shadow', value: 14 }
                ]
            },
            {
                name: 'jeandarc', 'specs': [
                    { spec: 'retribution', value: 32 },
                    { spec: 'holy', value: 35 }
                ]
            },
            {
                name: 'corruptchill', 'specs': [
                    { spec: 'demonology', value: 14 }
                ]
            },
            {
                name: 'illfaith', 'specs': [
                    { spec: 'discipline', value: 32 },
                    { spec: 'holypriest', value: 32 }
                ]
            },
            {
                name: 'saintsinner', 'specs': [
                    { spec: 'affliction', value: 27 },
                    { spec: 'demonology', value: 18 }
                ]
            }
        ]
    },
    {
        name: 'cowardy',
        characters: [
            {
                name: 'acolyte', 'specs': [
                    { spec: 'shadow', value: 29 }
                ]
            },
            {
                name: 'tolsty', 'specs': [
                    { spec: 'feraltank', value: 26 }
                ]
            },
            {
                name: 'cowardy', 'specs': [
                    { spec: 'combat', value: 40 }
                ]
            },
            {
                name: 'felore', 'specs': [
                    { spec: 'demonology', value: 30 }
                ]
            },
            {
                name: 'karisma', 'specs': [
                    { spec: 'fire', value: 35 }
                ]
            },
            {
                name: 'necropsy', 'specs': [
                    { spec: 'unholydps', value: 21 }
                ]
            },
            {
                name: 'anni', 'specs': [
                    { spec: 'marksmanship', value: 6 }
                ]
            }
        ]
    },
    {
        name: 'dagraamis',
        characters: [
            {
                name: 'dagraamis', 'specs': [
                    { spec: 'restodruid', value: 6 }
                ]
            },
            {
                name: 'azerase', 'specs': [
                    { spec: 'holypriest', value: 2 }
                ]
            },
            {
                name: 'dagrouge', 'specs': [
                    { spec: 'combat', value: 7 }
                ]
            },
            {
                name: 'dagnab', 'specs': [
                    { spec: 'demonology', value: 34 }
                ]
            }
        ]
    },
    {
        name: 'dedoviya',
        characters: [
            {
                name: 'dedoviya', 'specs': [
                    { spec: 'fire', value: 21 }
                ]
            },
            {
                name: 'nebezao', 'specs': [
                    { spec: 'combat', value: 3 }
                ]
            },
            {
                name: 'slipknoter', 'specs': [
                    { spec: 'fury', value: 11 }
                ]
            }
        ]
    },
    {
        name: 'ducksy',
        characters: [
            {
                name: 'quackscope', 'specs': [
                    { spec: 'marksmanship', value: 15 }
                ]
            },
            {
                name: 'ducksy', 'specs': [
                    { spec: 'balance', value: 21 },
                    { spec: 'feraltank', value: 16 }
                ]
            },
            {
                name: 'ducksaya', 'specs': [
                    { spec: 'restodruid', value: 32 }
                ]
            },
            {
                name: 'quacksy', 'specs': [
                    { spec: 'shadow', value: 39 },
                    { spec: 'discipline', value: 40 }
                ]
            },
            {
                name: 'quackzini', 'specs': [
                    { spec: 'demonology', value: 31 }
                ]
            },
            {
                name: 'donaldquack', 'specs': [
                    { spec: 'feraldps', value: 28 }
                ]
            },
            {
                name: 'lolmotov', 'specs': [
                    { spec: 'balance', value: 37 }
                ]
            },
            {
                name: 'quakegodx', 'specs': [
                    { spec: 'shadow', value: 39 }
                ]
            },
            {
                name: 'discogodx', 'specs': [
                    { spec: 'discipline', value: 10 }
                ]
            },
            {
                name: 'duckfest', 'specs': [
                    { spec: 'balance', value: 5 }
                ]
            },
            {
                name: 'ducks', 'specs': [
                    { spec: 'shadow', value: 7 }
                ]
            }
        ]
    },
    {
        name: 'duleantic',
        characters: [
            {
                name: 'duleantic', 'specs': [
                    { spec: 'retribution', value: 12 },
                    { spec: 'protection', value: 28 }
                ]
            },
            {
                name: 'kassapin', 'specs': [
                    { spec: 'combat', value: 40 }
                ]
            },
            {
                name: 'plavusha', 'specs': [
                    { spec: 'demonology', value: 17 }
                ]
            },
            {
                name: 'veryfatdk', 'specs': [
                    { spec: 'unholydps', value: 17 },
                    { spec: 'bloodtank', value: 10 }
                ]
            },
            {
                name: 'miilivoje', 'specs': [
                    { spec: 'fire', value: 25 }
                ]
            }
        ]
    },
    {
        name: 'dzaja',
        characters: [
            {
                name: 'dzaja', 'specs': [
                    { spec: 'protection', value: 32 }
                ]
            }
        ]
    },
    {
        name: 'ejk',
        characters: [
            {
                name: 'ejk', 'specs': [
                    { spec: 'restoration', value: 30 },
                    { spec: 'elemental', value: 31 }
                ]
            },
            {
                name: 'dnz', 'specs': [
                    { spec: 'fury', value: 29 }
                ]
            },
            {
                name: 'flowk', 'specs': [
                    { spec: 'retribution', value: 17 },
                    { spec: 'holy', value: 27 }
                ]
            },
            {
                name: 'umiti', 'specs': [
                    { spec: 'restodruid', value: 32 }
                ]
            },
            {
                name: 'sfantatreime', 'specs': [
                    { spec: 'shadow', value: 38 }
                ]
            },
            {
                name: 'milies', 'specs': [
                    { spec: 'fire', value: 38 }
                ]
            },
            {
                name: 'onycs', 'specs': [
                    { spec: 'frostdps', value: 10 },
                    { spec: 'bloodtank', value: 18 }
                ]
            }
        ]
    },
    {
        name: 'elaiss',
        characters: [
            {
                name: 'annebell', 'specs': [
                    { spec: 'discipline', value: 30 },
                    { spec: 'shadow', value: 32 }
                ]
            },
            {
                name: 'creampies', 'specs': [
                    { spec: 'combat', value: 10 }
                ]
            },
            {
                name: 'elaiss', 'specs': [
                    { spec: 'feraltank', value: 38 }
                ]
            },
            {
                name: 'puffylips', 'specs': [
                    { spec: 'restoration', value: 35 },
                    { spec: 'enhancement', value: 12 }
                ]
            }
        ]
    },
    {
        name: 'facetheboy',
        characters: [
            {
                name: 'afner', 'specs': [
                    { spec: 'bloodtank', value: 35 }
                ]
            },
            {
                name: 'dayslut', 'specs': [
                    { spec: 'protection', value: 8 },
                    { spec: 'holy', value: 21 }
                ]
            },
            {
                name: 'facetheboy', 'specs': [
                    { spec: 'marksmanship', value: 36 }
                ]
            },
            {
                name: 'nightslut', 'specs': [
                    { spec: 'feraltank', value: 23 },
                    { spec: 'balance', value: 22 }
                ]
            }
        ]
    },
    {
        name: 'felmaiden',
        characters: [
            {
                name: 'felmaiden', 'specs': [
                    { spec: 'demonology', value: 23 }
                ]
            },
            {
                name: 'naturalpiper', 'specs': [
                    { spec: 'balance', value: 27 }
                ]
            },
            {
                name: 'radiantsteel', 'specs': [
                    { spec: 'protection', value: 32 }
                ]
            },
            {
                name: 'sorrowbane', 'specs': [
                    { spec: 'bloodtank', value: 39 }
                ]
            }
        ]
    },
    {
        name: 'florynelsham',
        characters: [
            {
                name: 'florynelsham', 'specs': [
                    { spec: 'restoration', value: 7 }
                ]
            },
            {
                name: 'florynel', 'specs': [
                    { spec: 'retribution', value: 12 },
                    { spec: 'holy', value: 16 },
                ]
            },
            {
                name: 'quenlethal', 'specs': [
                    { spec: 'marksmanship', value: 29 }
                ]
            },
            {
                name: 'lethallady', 'specs': [
                    { spec: 'fire', value: 10 },
                    { spec: 'arcane', value: 23 }
                ]
            },
            {
                name: 'holythunder', 'specs': [
                    { spec: 'fury', value: 24 }
                ]
            },
            {
                name: 'lethallock', 'specs': [
                    { spec: 'demonology', value: 24 }
                ]
            },
            {
                name: 'kalyda', 'specs': [
                    { spec: 'retribution', value: 18 }
                ]
            },
            {
                name: 'loveisblind', 'specs': [
                    { spec: 'discipline', value: 32 },
                    { spec: 'shadow', value: 22 }
                ]
            },
            {
                name: 'floryneldk', 'specs': [
                    { spec: 'unholydps', value: 23 }
                ]
            },
            {
                name: 'lovelybeast', 'specs': [
                    { spec: 'restodruid', value: 38 }
                ]
            }
        ]
    },
    {
        name: 'flybyflys',
        characters: [
            {
                name: 'dontknow', 'specs': [
                    { spec: 'discipline', value: 13 }
                ]
            },
            {
                name: 'doomteller', 'specs': [
                    { spec: 'restoration', value: 36 }
                ]
            },
            {
                name: 'flybyflys', 'specs': [
                    { spec: 'fire', value: 27 }
                ]
            },
            {
                name: 'healingmate', 'specs': [
                    { spec: 'balance', value: 39 },
                    { spec: 'restodruid', value: 15 }
                ]
            },
            {
                name: 'musiqq', 'specs': [
                    { spec: 'holy', value: 29 },
                    { spec: 'protection', value: 9 }
                ]
            },
            {
                name: 'summonportal', 'specs': [
                    { spec: 'demonology', value: 37 }
                ]
            },
            {
                name: 'whatisdis', 'specs': [
                    { spec: 'marksmanship', value: 2 }
                ]
            },
            {
                name: 'bagaina', 'specs': [
                    { spec: 'retribution', value: 9 },
                    { spec: 'holy', value: 22 }
                ]
            }
        ]
    },
    {
        name: 'fokit',
        characters: [
            {
                name: 'fokit', 'specs': [
                    { spec: 'shadow', value: 28 },
                    { spec: 'discipline', value: 13 }
                ]
            },
            {
                name: 'lokit', 'specs': [
                    { spec: 'marksmanship', value: 5 }
                ]
            },
            {
                name: 'sokit', 'specs': [
                    { spec: 'fury', value: 19 }
                ]
            }
        ]
    },
    {
        name: 'fu',
        characters: [
            {
                name: 'fu', 'specs': [
                    { spec: 'combat', value: 8 }
                ]
            },
            {
                name: 'magdalene', 'specs': [
                    { spec: 'demonology', value: 39 },
                    { spec: 'affliction', value: 16 }
                ]
            },
            {
                name: 'ayy', 'specs': [
                    { spec: 'balance', value: 20 },
                    { spec: 'restodruid', value: 17 }
                ]
            },
            {
                name: 'milkyway', 'specs': [
                    { spec: 'shadow', value: 21 },
                    { spec: 'discipline', value: 27 }
                ]
            },
            {
                name: 'bitter', 'specs': [
                    { spec: 'feraldps', value: 27 },
                    { spec: 'feraltank', value: 28 }
                ]
            },
            {
                name: 'probably', 'specs': [
                    { spec: 'holy', value: 36 },
                    { spec: 'protection', value: 35 }
                ]
            },
            {
                name: 'car', 'specs': [
                    { spec: 'protection', value: 20 },
                    { spec: 'holy', value: 7 }
                ]
            }
        ]
    },
];

module.exports = players;