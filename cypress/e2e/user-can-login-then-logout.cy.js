describe('User can login to system', () => {
  it('user can login with valid username and password', () => {
    //arrange
    cy.visit('http://127.0.0.1:8000')
    //act
    // cy.get('[data-id="email"').type("superadmin@gmail.com");
    // cy.get('[data-id="password"').type("password");
    // cy.get('[data-id="submit"').click();
    // cy.get('[data-id="username"').click();
    // cy.get('[data-id="logout"').click();
    // cy.get('h4').should("be.visible");
    //assert
    // cy.get('h4').should("have.text", "Login");
    cy.get(':nth-child(2) > .form-control').clear('s');
    cy.get(':nth-child(2) > .form-control').type('superadmin@gmail.com');
    cy.get(':nth-child(3) > .form-control').clear();
    cy.get(':nth-child(3) > .form-control').type('password');
    cy.get('.btn').click();
    cy.get('.nav-link > .d-sm-none').click();
    cy.get('.text-danger').click();
  })
})