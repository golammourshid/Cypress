describe('Get Started Spec', () => {
  it('go to get start page', () => {
    cy.visit('/nid-pub')
    cy.get('a[href="/nid-pub/register-account"]').eq(0).click()
  })
//   it('change language to English', () => {
//     cy.get('[id = "menu-button"]').click()
//     cy.contains(/English/i).click()
//   })
//   it('go to home', () => {
//     cy.visit('/nid-pub/register-account')
//     cy.get('[id = "menu-button"]').click()
//   })
})
