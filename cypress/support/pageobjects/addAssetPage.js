export class addAssetPage {

    clickAddAssetTab() {
        cy.get('a[testid="add-asset"]').click()
    }

    enterAssetNumber(number) {
        cy.get('input[type="text"]').click().type(number)
    }


    clickSendButton() {
        cy.get('button[type="submit"]').click()
    }

    checkMessage() {
        cy.get('.valid-feedback').then(text => {
            var message = text.text()

            expect(message).to.equal('Correct format')
        })

    }
}


export const addAsset = new addAssetPage()