describe('Form testing', () :void => {
  beforeEach(() :void => {
      cy.visit('https://ais2.ukf.sk/ais/start.do')
  })


  it('Prihlasenie do AIS', () :void => {
    cy.get("#login").type("312175")
    cy.get("#heslo").type("0109301434")
    cy.get("#login-form-submit-btn").click()

    cy.getByData("success-message").should("exist").contains("312175")

    
  })
  
})