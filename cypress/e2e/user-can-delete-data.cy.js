describe('User can delete data', () => {

  //before each test case
  beforeEach(() => {

    //arrange
    cy.visit('http://127.0.0.1:8000')

    cy.exec("del.sh"); //alternatif

    //act
    cy.get(':nth-child(2) > .form-control').type('superadmin@gmail.com');
    cy.get(':nth-child(3) > .form-control').clear();
    cy.get(':nth-child(3) > .form-control').type('password');
    cy.get('.btn').click();
    cy.visit("http://127.0.0.1:8000/user-management/user");
  })

  //positive test case
  // it.only('User can delete data', () => {
  //   cy.get(':nth-child(3) > .text-right > .d-flex > .ml-2 > .btn').click();
  //   cy.get(':nth-child(2) > .swal-button').click();
  //   cy.get('p').should('be.visible');
  //   cy.get('p').should('contain', 'User Deleted Successfully');
  // })

  it('User can delete data', () => {
    cy.get(".table td").contains("user").parent().find("button").contains('Delete').click();
    cy.get(".swal-button-container").find('button').contains("OK").click()
    cy.get(".alert").should("be.visible").and("have.class", "alert-success").contains("User Deleted Successfully")
    cy.get(".table").should("not.contain", "user");
  })

  //positive test case
  it('User can cancel delete data', () => {
    cy.get(".table td").contains("user").parent().find("button").contains('Delete').click();
    cy.get(".swal-button-container").find('button').contains("Cancel").click()
    cy.get(".table").should("contain", "user");
  })

  //negative test case
  it('User can access Edit Data', () => {
    cy.get(".table td").contains("user").parent().find("a").contains('Edit').click();
    cy.get(".section-title").should("contain", "Edit User");
  })
})