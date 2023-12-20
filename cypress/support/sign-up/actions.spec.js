let data
before(() => {
    cy.fixture('elements').then((selector) => {
        data = selector
    })
})

Cypress.Commands.add('clickAnElement', (element) => {
    cy.get(element).should('be.visible').and('exist').click()
})

Cypress.Commands.add('typeAText', (text_field, text) => {
    cy.get(text_field).should('be.visible').fill(text)
})

Cypress.Commands.add('fillBasicDetails', () => {
    cy.typeAText(data.fullNameField, data.fullName)
    cy.typeAText(data.businessNameField, data.businessName)
})

