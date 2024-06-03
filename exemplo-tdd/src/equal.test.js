describe('equality', () => {
    // Uso básico do toEquals
    it('basic usage - toEqual', () => {
        expect(1+1).toEqual(2)
        expect(1+1).not.toEqual(3)
        expect('developer').toEqual('developer')
        expect('developer').not.toEqual('devel')
        expect({ name: 'developer' }).toEqual({ name: 'developer' })
    })

    // Uso básico do toEquals
    it('basic usage - toBe', () => {
        expect(1+1).toBe(2)
        expect('developer').toBe('developer')
        // O jest compara os objetos através do endereço de memoria
        // abaixo temos os mesmos objetos, mais estão em endereços de memoria diferente
        // melhor forma de testar é usando o toEqual
        // expect({ name: 'developer' }).toBe({ name: 'developer' })
    })
})