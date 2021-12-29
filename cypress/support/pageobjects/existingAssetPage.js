export class existingAssetPage {

    existingAssetTab() {
        cy.get('a[href="#/assets"]').click()
    }

    dateCheckonExistingTab() {
        cy.get('div[role="status"]').then(displayedText => {
            var displayed = displayedText.text()
            expect(displayed).to.not.equal('Loading...')
        })
    }
}


export const existingAsset = new existingAssetPage()