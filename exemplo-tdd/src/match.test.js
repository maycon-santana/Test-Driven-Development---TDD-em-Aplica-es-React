describe('Match regular expression', () => {
    it('basic', () => {
        // Espero que a palavra developer seja caracterer e que eu possa ter uma ou mais letras
        expect('developer').toMatch(/\w+/)
        // Verifique se a string abaixo atende um padrão de telefone celular
        expect('(99)99999-9999').toMatch(/^\(\d{2}\)\d{5}-\d{4}$/)
        // Verifique se a string abaixo atende um padrão de telefone fixo
        expect('(99)9999-9999').toMatch(/^\(\d{2}\)\d{4}-\d{4}$/)
        // Verifique se a string abaixo atende um padrão de CEP
        expect('99999-999').toMatch(/^\d{5}-\d{3}$/)
        // Verifique se a string abaixo atende um padrão de CPF
        expect('999.999.999-25').toMatch(/^\d{3}.\d{3}.\d{3}-\d{2}$/)
        // Verifique se a string abaixo atende um padrão de RG
        expect('19.615.583-6').toMatch(/^\d{2}.\d{3}.\d{3}-\d{1}$/)
        // Verifique se a string abaixo atende um padrão de CNPJ
        expect('99.999.999/9999-99').toMatch(/^\d{2}.\d{3}.\d{3}\/\d{4}-\d{2}$/)
        // Verifique se a string abaixo atende um padrão de Certidão Nascimento, Casamento e Óbito
        expect('157320 01 55 2023 1 11735 674 1805016-43').toMatch(/^\d{6} \d{2} \d{2} \d{4} \d{1} \d{5} \d{3} \d{7}-\d{2}$/)
        // Verifique se a string abaixo atende um padrão de PIS/PASEP Válido
        expect('118.89413.63-6').toMatch(/^\d{3}.\d{5}.\d{2}-\d{1}$/)
        // Verifique se a string abaixo atende um padrão de Renavam
        expect('68966173790').toMatch(/^\d{11}$/)
        // Verifique se a string abaixo atende um padrão de Placa
        // Para esse teste foi adicionado o padrão correto para placas: ^[A-Z]{3}-\d{4}$, 
        // que corresponde a três letras maiúsculas seguidas por um hífen e quatro dígitos.
        expect('NET-0789').toMatch(/^[A-Z]{3}-\d{4}$/)
        // Verifique se a string abaixo atende um padrão do valor da Inscrição Estadual do Estado do ACRE
        expect('01.657.162/142-97').toMatch(/^\d{2}.\d{3}.\d{3}\/\d{3}-\d{2}$/)
        // Verifique se a string abaixo atende um padrão do valor da Inscrição Estadual do Estado de Alagoas
        expect('248302051').toMatch(/^\d{9}$/)
        // Verifique se a string abaixo atende um padrão do valor da Inscrição Estadual do Estado do Amapá
        expect('032678274').toMatch(/^\d{9}$/)
        // Verifique se a string abaixo atende um padrão do valor da Inscrição Estadual do Estado do Amazonas
        expect('80.300.011-1').toMatch(/^\d{2}.\d{3}.\d{3}-\d{1}$/)
        // Verifique se a string abaixo atende um padrão do valor da Inscrição Estadual do Estado da Bahia
        expect('2910588-29').toMatch(/^\d{7}-\d{2}$/)
        // Verifique se a string abaixo atende um padrão do valor da Inscrição Estadual do Estado do Ceara
        expect('58121740-3').toMatch(/^\d{8}-\d{1}$/)
        // Verifique se a string abaixo atende um padrão do valor da Inscrição Estadual do Estado de Distrito Federal
        expect('07822594001-56').toMatch(/^\d{11}-\d{2}$/)
        // Verifique se a string abaixo atende um padrão do valor da Inscrição Estadual do Estado do Espirito Santo
        expect('44930760-3').toMatch(/^\d{8}-\d{1}$/)
        // Verifique se a string abaixo atende um padrão do valor da Inscrição Estadual do Estado de Goias
        expect('15.659.925-2').toMatch(/^\d{2}.\d{3}.\d{3}-\d{1}$/)
        // Verifique se a string abaixo atende um padrão do valor da Inscrição Estadual do Estado do Maranhão
        expect('12296756-9').toMatch(/^\d{8}-\d{1}$/)
        // Verifique se a string abaixo atende um padrão do valor da Inscrição Estadual do Estado do Mato Grosso
        expect('9052779526-2').toMatch(/^\d{10}-\d{1}$/)
        // Verifique se a string abaixo atende um padrão do valor da Inscrição Estadual do Estado do Mato Grosso do Sul
        expect('28757147-5').toMatch(/^\d{8}-\d{1}$/)
        // Verifique se a string abaixo atende um padrão do valor da Inscrição Estadual do Estado de Minas Gerais
        expect('275.609.947/5755').toMatch(/^\d{3}.\d{3}.\d{3}\/\d{4}$/)
        // Verifique se a string abaixo atende um padrão do valor da Inscrição Estadual do Estado do Pará
        expect('15-170530-5').toMatch(/^\d{2}-\d{6}-\d{1}$/)
        // Verifique se a string abaixo atende um padrão do valor da Inscrição Estadual do Estado da Paraiba
        expect('70406121-0').toMatch(/^\d{8}-\d{1}$/)
        // Verifique se a string abaixo atende um padrão do valor da Inscrição Estadual do Estado do Paraná
        expect('53069854-4').toMatch(/^\d{8}-\d{1}$/)
        // Verifique se a string abaixo atende um padrão do valor da Inscrição Estadual do Estado de Pernambuco
        expect('4732128-89').toMatch(/^\d{7}-\d{2}$/)
        // Verifique se a string abaixo atende um padrão do valor da Inscrição Estadual do Estado do Piaui
        expect('30560289-6').toMatch(/^\d{8}-\d{1}$/)
        // Verifique se a string abaixo atende um padrão do valor da Inscrição Estadual do Estado do Rio de Janeiro
        expect('44.201.02-0').toMatch(/^\d{2}.\d{3}.\d{2}-\d{1}$/)
        // Verifique se a string abaixo atende um padrão do valor da Inscrição Estadual do Estado do Rio Grande do Norte
        expect('20.653.334-9').toMatch(/^\d{2}.\d{3}.\d{3}-\d{1}$/)
        // Verifique se a string abaixo atende um padrão do valor da Inscrição Estadual do Estado do Rio Grande do Sul
        expect('605/6287932').toMatch(/^\d{3}\/\d{7}$/)
        // Verifique se a string abaixo atende um padrão do valor da Inscrição Estadual do Estado de Rondônia
        expect('9994575096986-2').toMatch(/^\d{13}-\d{1}$/)
        // Verifique se a string abaixo atende um padrão do valor da Inscrição Estadual do Estado de Roraima
        expect('24539783-6').toMatch(/^\d{8}-\d{1}$/)
        // Verifique se a string abaixo atende um padrão do valor da Inscrição Estadual do Estado de São Paulo
        expect('098.374.562.968').toMatch(/^\d{3}.\d{3}.\d{3}.\d{3}$/)
        // Verifique se a string abaixo atende um padrão do valor da Inscrição Estadual do Estado de Santa Catarina
        expect('350.402.590').toMatch(/^\d{3}.\d{3}.\d{3}$/)
        // Verifique se a string abaixo atende um padrão do valor da Inscrição Estadual do Estado de Sergipe
        expect('04292951-2').toMatch(/^\d{8}-\d{1}$/)
        // Verifique se a string abaixo atende um padrão do valor da Inscrição Estadual do Estado de Tocantis
        expect('26637476-0').toMatch(/^\d{8}-\d{1}$/)
        // Verifique se a string abaixo atende um padrão do valor do Título de Eleitor
        expect('781815400116').toMatch(/^\d{12}$/)
    })
})