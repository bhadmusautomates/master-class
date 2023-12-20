let edison
describe('Test SignUp Journey', () => {
  before(()=>{
    cy.fixture('elements').then((selector)=>{
      edison = selector
    })
  })

  it('Successful SignUp', () => {
      cy.clickAnElement(edison.SignUpButton)
      cy.fillBasicDetails()
  })

  it('Successful Login', () => {
    
      cy.clickAnElement(edison.LoginButton)
  
  })

  it('Successful Product', () => {
  
      cy.clickAnElement(edison.ProductLink)
  
  })
})