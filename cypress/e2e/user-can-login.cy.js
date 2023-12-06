describe('User Can Login', () => {
  //positive test case
  it('User can login', () => {
    //arrange
    cy.visit('http://127.0.0.1:8000');
    //act
    cy.get(':nth-child(2) > .form-control').type("superadmin@gmail.com");
    cy.get(':nth-child(3) > .form-control').type("password");
    cy.get('.btn').click();
    //assert
    cy.get('.nav-link > .d-sm-none').should("have.text", "Hi, SuperAdmin");
  });

  //positive test case
  it('User can access Forgot Password', () => {
    //arrange
    cy.visit('http://127.0.0.1:8000');
    //act
    cy.get('.text-small').click();
    //assert
    cy.get('h4').should("have.text", "Forgot Password");
  })

  //negative test case
  it("user cannot login with valid username and wrong password", () =>{
    //arrange
    cy.visit('http://127.0.0.1:8000');
    //act
    cy.get(':nth-child(2) > .form-control').type("superadmin@gmail.com");
    cy.get(':nth-child(3) > .form-control').type("password-salah");
    cy.get('.btn').click();
    //assert
    cy.get('.invalid-feedback').should("have.text", "These credentials do not match our records.");
  });

    //negative test case
  it("user cannot login with wrong username and valid password", () =>{
    //arrange
    cy.visit('http://127.0.0.1:8000');
    //act
    cy.get(':nth-child(2) > .form-control').type("superadminx@gmail.com");
    cy.get(':nth-child(3) > .form-control').type("password-salah");
    cy.get('.btn').click();
      //assert
    cy.get('.invalid-feedback').should("have.text", "These credentials do not match our records.");
  });

    //negative test case
  it("user cannot login with empty username and valid password", () =>{
    //arrange
    cy.visit('http://127.0.0.1:8000');
    //act
    cy.get(':nth-child(3) > .form-control').type("password");
    cy.get('.btn').click();
    //assert
    cy.get('.invalid-feedback').should("have.text", "The email field is required.");
  });

  //negative test case
  it("user cannot login with valid username and empty password", () =>{
    //arrange
    cy.visit('http://127.0.0.1:8000');
    //act
    cy.get(':nth-child(2) > .form-control').type("superadmin@gmail.com");
    cy.get('.btn').click();
    //assert
    cy.get('.invalid-feedback').should("have.text", "The password field is required.");
  });

  //negative test case
  it("user cannot login with empty username and empty password", () =>{
    //arrange
    cy.visit('http://127.0.0.1:8000');
    //act
    cy.get('.btn').click();
    //assert
    cy.get(':nth-child(2) > .invalid-feedback').should("have.text", "The email field is required.");
    cy.get(':nth-child(3) > .invalid-feedback').should("have.text", "The password field is required.");
  });
})