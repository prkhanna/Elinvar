/// <reference types="cypress" />

import { Given } from "cypress-cucumber-preprocessor/steps";
import { Then } from "cypress-cucumber-preprocessor/steps";
import { When } from "cypress-cucumber-preprocessor/steps";
import { addAsset } from "../../support/pageobjects/addAssetPage";
import { despPage } from "../../support/pageobjects/descriptionPage";
import { existingAsset } from "../../support/pageobjects/existingAssetPage";
//Your test-case glue-code should be here :)

Given('Open the technical assignemnt application', function () {
    cy.visit('/')
})

Given('Check Text of Home page', function () {
    despPage.getDescription()
})




Then('check for the system requirement Add asset content', function () {
    despPage.getTextforDescription()

})


Given('Click on the Add Asset tab', function () {
    addAsset.clickAddAssetTab()

})


When('Enter the asset {string} in New Asset', function (number) {
    addAsset.enterAssetNumber(number)

})

Then('Click on send button', function () {
    addAsset.clickSendButton()
})


And('Verify the Message Format', function () {
    addAsset.checkMessage()
})


Given('Click on the Existing Asset tab', function () {
    existingAsset.existingAssetTab()
})



Then('Verify the data of Existing asset tab', function () {
    existingAsset.dateCheckonExistingTab()

})