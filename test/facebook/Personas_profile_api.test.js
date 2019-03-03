const {
    facebookbot
} = require('../../lib/Botkit');

describe('== Personas_profile_api', () => {
    const controller = botkit.core({});
    test('Should not fail', () => {
        expect(1).toBeTruthy();
    });

});
