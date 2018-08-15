export default {
    token: null,
    user: null,
    dataUpdatedTimestamp: null,
    results: null,
    games: {},
    activeGame: null,
    igdb: {
        platforms: {
            nsw: 130,
        },
        gameCategories: {
            0: 'Main game',
            1: 'DLC / Addon',
            2: 'Expansion',
            3: 'Bundle',
            4: 'Standalone expansion',
        },
        pegi: {
            1: '3',
            2: '7',
            3: '12',
            4: '16',
            5: '18',
        },
        esrb: {
            1: 'RP',
            2: 'EC',
            3: 'E',
            4: 'E10+',
            5: 'T',
            6: 'M',
            7: 'AO',
        },
        linkTypes: {
            1: 'official',
            2: 'wikia',
            3: 'wikipedia',
            4: 'facebook',
            5: 'twitter',
            6: 'twitch',
            8: 'instagram',
            9: 'youtube',
            10: 'iphone',
            11: 'ipad',
            12: 'android',
            13: 'steam',
            14: 'Reddit',
        },
    },
};
