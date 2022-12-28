const iccComp = {
    tanks: [
        ['bloodtank', 'feraltank'],
        ['protection']
    ],
    healers: [
        ['holy'],
        ['restoration'],
        ['discipline']],
    dps: [
        ['frostdps', 'feraldps', 'enhancement'],
        ['unholydps'],
        ['retribution'],
        ['retribution'],
        ['combat'],
        ['combat'],
        ['fury'],
        ['fury'],
        ['fury'],
        ['balance', 'fire'],
        ['shadow'],
        ['shadow'],
        ['marksmanship'],
        ['marksmanship'],
        ['demonology'],
        ['balance'],
        ['fire', 'affliction'],
        ['fire', 'affliction'],
        ['fire'],
        ['fire']
    ]
};
module.exports = [...iccComp.tanks, ...iccComp.healers, ...iccComp.dps].slice(0, 17);