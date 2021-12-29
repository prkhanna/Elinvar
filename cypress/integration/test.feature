Feature: Techniocal Assignment for Elinvar

    Background: Open the application
        Given Open the technical assignemnt application



    Scenario: Check for the Description tab
        Given Check Text of Home page
        Then check for the system requirement Add asset content

    Scenario Outline:  Check format validation
        Given Click on the Add Asset tab
        When Enter the asset '<number>' in New Asset
        Then Click on send button
        And Verify the Message Format
        Examples:

            | number         |
            | ISIN0000000047 |
            | ISIN0000000050 |


    Scenario: Check for the existing asset tab
        Given Click on the Existing Asset tab
        Then Verify the data of Existing asset tab




