// // teste para o app de calculadora de adição
// describe('addition', () => {
//     let calc = null
//     beforeEach(() => {
//         const options = {
//             precision: 2
//         }

//         calc = new Calculator(options)
//     });

//     // Some dois numeros positivos
//     it('adds two positive number', () => {
//         const result = calc.add(1.3344, 4.5)
//         // Espero que ao usar a função add (soma) seja igual a 5.83
//         expect(result).toEqual(5.83)
//     })

//     it('adds two negative number', () => {
//         const result = calc.add(-1.3344, -4.5)
//         // Espero que ao usar a função add (soma) seja igual a -5.83
//         expect(result).toEqual(-5.83)
//     })
// })