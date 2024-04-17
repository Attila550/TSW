describe('Testovanie formulara na AIS UKF', () :void => {
  beforeEach(() :void => {
      cy.visit('https://ais2.ukf.sk/ais/start.do')
  })

 
  it('Kontrola loginu', () :void => {
    cy.get('#login').type("login")
    cy.get('#heslo').type("heslo")
    cy.get('#login-form-submit-btn').click()
    cy.get("app-rozvrh > .card > .card-header").click()
    cy.wait(2000)
    cy.get(':nth-child(7) > .rozvrh-okienko > .predmet-nazov').should("exist").contains("Testovanie softvéru")
    cy.get(':nth-child(7) > .rozvrh-okienko').click()
    cy.wait(2000)
    cy.get(':nth-child(9) > .rozvrh-okienko').should("not.exist")


})


})