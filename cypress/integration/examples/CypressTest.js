
describe('My first solo attempt', function () {

    it('should select info from table', function () {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        cy.get('tr td:nth-child(2)').each(($e1, index, $list) => {

            const text = $e1.text()
            if (text.includes('Python')) {
                cy.get('tr td:nth-child(2)').eq(index).next().then(function (payment) {
                    const paymentAmt = payment.text()
                    expect(paymentAmt).to.eq('25')


                })
            }


        })






    })
})