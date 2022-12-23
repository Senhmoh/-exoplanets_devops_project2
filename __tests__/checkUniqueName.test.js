const { checkUniqueName } = require('../utils/utils')

describe('utils library test suite', () => {
    it('should be return false checkUniqueName', () => {
        expect(checkUniqueName('oli++++++')).toBe(false)
    })
})
