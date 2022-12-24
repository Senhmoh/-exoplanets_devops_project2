/* eslint-disable no-undef */
/* eslint-disable no-undef */
const exoplanet = require('../routes/exoplanets')

describe('', () => {
    it('should return true for upperCase characters', () => {
        expect(exoplanet.checkWrittenRules('EXOPLANETE')).toBe(true)
    })
    it('should return false for lowerCase characters', () => {
        expect(exoplanet.checkWrittenRules('exoplanete')).toBe(false)
    })
    it('should return true for allowed characters', () => {
        expect(exoplanet.checkWrittenRules('EXO.P-LANETE')).toBe(true)
    })

    it('should return false for allowed characters', () => {
        expect(exoplanet.checkWrittenRules('EXO$P£LANETE')).toBe(false)
    })

    it('should return false for forbiden sentance', () => {
        expect(exoplanet.checkWrittenRules('Trappiste$****01****-00')).toBe(
            false
        )
    })
})

module.exports
