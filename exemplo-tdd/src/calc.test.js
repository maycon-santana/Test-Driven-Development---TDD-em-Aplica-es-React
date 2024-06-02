var add = require('./Calc')

// calculadora
describe('calculator', () => {
    // Some dois numeros
    it('add two number', () => {
        // Espero que ao usar a função add (soma) seja igual a 3
        expect(add(5, 2)).toEqual(7)
    })
})