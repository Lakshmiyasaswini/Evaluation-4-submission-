import { Before, Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";

// Steps to visit the contact us page
Given('I visit the contact us page',()=>{
    cy.visit('https://automationexercise.com/contact_us');
})

// Steps to fill in the contact us form
When('I fill in the contact us form with the valid details',()=>{
    cy.get('[name="name"]').type('Lakshmi yasaswini');
    cy.get('[name="email"]').type('yashuraja@gmail.com');
    cy.get('[name="subject"]').type("Knowing about how the products will have in this website");
    cy.get('[name="message"]').type('It is a good platform');
})

//steps to click on the submit
And('I submit the form',()=>{
    cy.get('[name="submit"][name="submit"]').click();
})

//Steps to get the conformation message
Then('I should see the conformation message',()=>{
    cy.on('window:alert',(alertinfo)=>{
        expect(alertinfo).to.contains('message has been sent successfully');
    })
})