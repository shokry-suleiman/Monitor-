describe('First Scenario', () => {
  it('visit home', () => {
    cy.visit('http://localhost:8081/');
  })

  beforeEach(() => {
    cy.intercept('GET', '**/employees*', { fixture: 'employees.json' })
    cy.visit('http://localhost:8081/')
  })

  it('assert employees data is apearing', () => {
      cy.get('.c-users-list__body > div').contains('moses_mueller@zesla.com')
  })

  it('assert on team perofrmance page link text and href', () => {
    cy.get('div.top-links > a:nth-child(2)').contains('Team performance chart page')
      .should('have.attr', 'ui-sref').and('include', 'team-performance')
  })

})



