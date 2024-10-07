describe('Getting info from a table', function () {

    it('should get value of the course', function () {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('tr td:nth-child(2)').each(($e1, index, $list) => {

            const text = $e1.text()
            if (text.includes('Java')) {

                cy.get('tr td:nth-child(2)').eq(index).next().then(function (price) {


                    const priceText = price.text()
                    expect(priceText).to.equal('30')

                })
            }
        })



    })


})
