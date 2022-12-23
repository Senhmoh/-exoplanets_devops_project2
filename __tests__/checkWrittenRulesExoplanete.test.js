/* eslint-disable no-undef */
const exoplanet = require('../routes/exoplanets')

/*Test about UpperCase input false situation */
describe('', () => {
    it('should return false for lower characters', () => {
        expect(exoplanet.checkWrittenRules('Exoplanete')).toBe(false)
    })

    it('should return true for upper characters', () => {
        expect(exoplanet.checkWrittenRules('EXOPLANETE')).toBe(true)
    })
})

module.exports
