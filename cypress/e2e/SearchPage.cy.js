import '../support/commands';

describe('Lounge the URL',() => {
    beforeEach(() => {
        // Launch the application URL
        cy.visit('https://www.supplyhouse.com/');
        cy.logger('application',"Launched Application--> Search Test");
      });

// Create an empty array to store the test data
var testData = [];

it
('search input',()=>
{
//cy.get('[data-testid="header-search-input"]').type('taco');
// Read the JSON file
cy.fixture('TestData.json').then((data) => {
  // Iterate over the JSON data and push each item to the array
data.forEach((item) => {
    testData.push(item);
    });
})
// Use the array of test data in your test
var Search;
'Error handling'
Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})
cy.get('input').type(test)
}
)
});

/*
('search input',()=>{
        cy.get('[data-testid="header-search-input"]').type('taco');     
        
        cy.get('.page-content col-xs-12').should('have.length', numExpectedResults);
        
      }) 
*/
