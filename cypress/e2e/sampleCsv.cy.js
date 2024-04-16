
/// <reference types="cypress" />

const neatCSV = require ('neat-csv');

describe('Read CSV', () => {   
 let table;      // global variable to store data in a table
    before(() => {
        cy
        .fixture('testData.csv')   
      // cy.readFile('cypress\fixtures\testData.csv')  // Or use this command and give relative path
        .then(neatCSV)      // convert CSV file into object
        .then(data => {
          table = data;
        })
        .then(console.table)
    });

    it('Fill input fields using CSV data', ()=> 
  {
     cy.visit('https://www.supplyhouse.com/', {failOnStatusCode: false}) 

     cy.wait(4000) 
     cy.get('#react-header-search-input').type('taco') 

     Cypress.on('uncaught:exception', (err) => {
      console.log('Cypress detected uncaught exception: ', err);
      return false;
    });

    //cy.get('#react-header-search-input').type(table[0] ['brand_name'])
    cy.wait(4000) 

   cy.xpath("//div[@class='Box-sc-1z9git-0 jvLuNd']/div//span")
    .then( items => 
    {
      expect(items[1]).to.have.css('font-weight','400')
      expect(items[1]).to.have.css('font-weight','normal')
      expect(items[1]).to.have.css('-webkit-text-fill-color','rgb(52, 52, 52)')
       
    }) 

    cy.xpath("//div[@class='Box-sc-1z9git-0 jvLuNd']/div")
    .then( items => 
    {
    expect(items[1]).to.have.css('font-weight','bold')
    expect(items[1]).to.have.css('-webkit-text-fill-color','rgb(0, 0, 0)')

    })

});

});

   