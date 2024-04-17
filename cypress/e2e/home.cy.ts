describe('Home page test', () :void => {
  beforeEach(() :void => {
      cy.visit('http://localhost:3000/')
  })

  it('Porovnanie nadpisu H1', () :void => {
      cy.get("h1").contains("Testing Next.js Applications with Cypress")
  })

  it('Porovnanie nadpisu HTML atribut', () :void => {
      cy.get("[data-test='hero-heading']").contains("Testing Next.js Applications with Cypress")
  })

  it('Porovnanie obsahu v DT', () :void => {
      cy.get("dt").eq(0).contains("4 Courses")
  })

  it('Porovnanie obsahu v DT', () :void => {
    cy.get("dt").eq(0).contains("4 Courses")
  })
  
})