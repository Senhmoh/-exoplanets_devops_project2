const exoplanet = require('../routes/exoplanets')

describe('', () => {
    it('should return true for allowed characters', () => {
        expect(exoplanet.checkWrittenRules('EXO.P-LANETE')).toBe(false);
    })
})
