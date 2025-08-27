import * as bootstrap from './bootstrap-lambda'
describe('bootstrap-lambda', () => {
    it('deve importar sem erro', () => {
        expect(bootstrap).toBeDefined()
    })
    it('deve ter propriedades exportadas', () => {
        expect(typeof bootstrap).toBe('object')
    })
})
