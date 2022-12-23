const exoplanet = require('../routes/exoplanets')

/*Test about UpperCase input false situation */
    describe('', () => {
    it('should return false', () => {
        expect(exoplanet.checkWrittenRules('Exoplanete')).toBe(false)
    })
});

module.exports;
