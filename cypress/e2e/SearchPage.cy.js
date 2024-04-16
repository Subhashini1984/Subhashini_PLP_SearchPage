/// <reference types="cypress" />

describe('search for a product', () => {   
 
     it('search for a product', ()=> 
   {
      cy.visit('https://www.supplyhouse.com/', {failOnStatusCode: false})
      //cy.contains('Continue').click()
      //cy.get('button').check()
      //cy.url().should('include', '/next-page')
      
      cy.wait(4000);
      Cypress.on('uncaught:exception', (err) => {
        // returning false here prevents Cypress from
        // failing the test
        console.log('Cypress detected uncaught exception: ', err);
        return false;
      });
            
      cy.get('#react-header-search-input').type('taco')
      cy.wait(4000); 
      cy.xpath("//div[@class='Box-sc-1z9git-0 jvLuNd']/div//span").then( items => {
      //expect(items[1]).to.have.css('font-weight','400')
     
      expect(items[1]).to.have.css('font-weight','normal')
      expect(items[1]).to.have.css('-webkit-text-fill-color','rgb(52, 52, 52)')
      
    })
  
    cy.xpath("//div[@class='Box-sc-1z9git-0 jvLuNd']/div").then( items => 
    {
    expect(items[1]).to.have.css('font-weight', 'bold')
    expect(items[1]).to.have.css('-webkit-text-fill-color','rgb(0, 0, 0)')

    })
  })
})
    
