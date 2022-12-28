import { Composition } from '../models/models';

export const iccComp: Composition = {
    tanks: [
        { specs: ['bloodtank', 'feraltank'], note: 'outside' },
        { specs: ['protection'], note: 'shadow' }],
    healers: [
        { specs: ['holy'], note: 'heal1' },
        { specs: ['restoration'], note: 'heal2' },
        { specs: ['discipline'], note: 'heal3' },],
    dps: [
        { specs: ['frostdps', 'feraldps', 'enhancement'], note: 'dps' },
        { specs: ['unholydps', 'fire'], note: 'shadow' },
        { specs: ['retribution'], note: 'shadow' },
        { specs: ['retribution'], note: 'shadow' },
        { specs: ['combat'], note: 'shadow' },
        { specs: ['combat'], note: 'shadow' },
        { specs: ['fury'], note: 'shadow' },
        { specs: ['fury'], note: 'shadow' },
        { specs: ['fury'], note: 'shadow' },
        { specs: ['balance', 'fire'], note: 'shadow' },
        { specs: ['shadow'], note: 'shadow' },
        { specs: ['shadow'], note: 'shadow' },
        { specs: ['marksmanship'], note: 'outside' },
        { specs: ['marksmanship'], note: 'outside' },
        { specs: ['demonology'], note: 'outside' },
        { specs: ['balance'], note: 'outside' },
        { specs: ['fire', 'affliction'], note: 'outside' },
        { specs: ['fire', 'affliction'], note: 'outside' },
        { specs: ['fire'], note: 'outside' },
        { specs: ['fire'], note: 'outside' }
    ]
};