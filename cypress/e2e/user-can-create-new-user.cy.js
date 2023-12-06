describe('User can create new user', () => {

  //before each test case
  beforeEach(() => {
    //arrange
    cy.visit('http://127.0.0.1:8000')

    // cy.exec(
    //   "cd ..demo-app-cypress-automation && php artisan migrate:fresh --seed"
    //   );

    cy.exec("del.sh"); //alternatif

    //act
    cy.get(':nth-child(2) > .form-control').type('superadmin@gmail.com');
    cy.get(':nth-child(3) > .form-control').clear();
    cy.get(':nth-child(3) > .form-control').type('password');
    cy.get('.btn').click();
    cy.visit("http://127.0.0.1:8000/user-management/user");
  })

  it('User can create new user', () => {
    cy.get('.card-header-action > .btn-icon').click();
    cy.get('#name').type('baru');
    cy.get('#email').type('baru@gmail.com');
    cy.get('#password').type('1234567890');
    cy.get('.btn-primary').click();

    //assert
    cy.get('p').should('be.visible');
    cy.get('p').should('have.text', 'Data Berhasil Ditambahkan');
    cy.get('.nav-link > .d-sm-none').click();
    cy.get('.text-danger').click();
  })

  it('User cannot create new user because invalid email', () => {
    cy.get('.card-header-action > .btn-icon').click();
    cy.get('#name').type('baru');
    cy.get('#email').type('baru');
    cy.get('#password').type('123456789');
    cy.get('.btn-primary').click();

    //assert
    cy.get('.invalid-feedback').should('be.visible');
    cy.get('.invalid-feedback').should('contain', 'The email must be a valid email address.');
    cy.get('.nav-link > .d-sm-none').click();
    cy.get('.text-danger').click();
  })

  it('User cannot create new user because name is required', () => {
    cy.get('.card-header-action > .btn-icon').click();
    cy.get('#email').type('baru@gmail.com');
    cy.get('#password').type('123456789');
    cy.get('.btn-primary').click();

    //assert
    cy.get('.invalid-feedback').should('be.visible');
    cy.get('.invalid-feedback').should('contain', 'The name field is required.');
    cy.get('.nav-link > .d-sm-none').click();
    cy.get('.text-danger').click();
  })
})