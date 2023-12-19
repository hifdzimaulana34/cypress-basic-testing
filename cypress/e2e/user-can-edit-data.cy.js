describe('User can edit existing data', () => {

  //before each test case
  beforeEach(() => {

    cy.exec("del.sh");

    //arrange
    cy.visit('http://127.0.0.1:8000')

     //alternatif

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

  it.only('User can Edit data', () => {
    cy.get(".table td").contains("user").parent().find("a").contains('Edit').click();
    cy.get(".section-title").should("contain", "Edit User");
    cy.get('#name').clear();
    cy.get('#name').type('user edited');
    cy.get('.btn-primary').click();
    cy.get(".table td").contains("user").should('have.text','user edited');
    cy.get(".alert")
      .should("be.visible")
      .and("have.class", "alert-success")
      .and("contain", "User Berhasil Diupdate")
  })

  //positive test case
  it.only('User can cancel delete data', () => {
    cy.get(".table td").contains("user").parent().find("a").contains('Edit').click();
    cy.get(".section-title").should("contain", "Edit User");
    cy.get('#name').clear();
    cy.get('#name').type('user edited');
    cy.get('.btn-secondary').click();
    cy.get(".table td").contains("user").should('have.text','user');
  })
})