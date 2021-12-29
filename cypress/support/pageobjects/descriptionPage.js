export class descriptionPage {


    getDescription() {
        cy.get('div[class="ui container"] article h2').then(Inline => {
            var text = Inline.text()
            expect(text).to.equal('System requirements')
        })
    }

    getTextforDescription() {
        cy.get('div[class="ui container"] article')
            .find('ul li').then(assettext => {
                var abc = assettext.text()
                expect(abc).to.contain('ability')
                expect(abc).to.contain('digits')
            })
    }

}


export const despPage = new descriptionPage()