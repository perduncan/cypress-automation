/// <reference types="cypress"/> 
import {LoginPage} from "../Pages/login_page"

const loginPage = new LoginPage()

it('login', function() {
    loginPage.navigate('https://wordpress.com/me')
    loginPage.clickGdprBanner()
    loginPage.enterUsername('perduncan@gmail.com')
    loginPage.clickLogin()
    loginPage.enterPassword('Qatest123!')
    loginPage.clickLogin()

    // Wait for profile page to load after login
    cy.wait(5000)

    // Verify elements on the page
    cy.get('.animate__appear > .gravatar').should('have.class', 'gravatar')
    cy.get('#first_name').should('be.empty')
    cy.get('#last_name').should('be.empty')
    cy.get('#display_name').should('be.empty')
    cy.get('#description').should('be.empty')
    cy.get('#inspector-toggle-control-0').should('not.be.checked')
    cy.get('.section-header__actions > .button').click().should('contain.text', 'Add')
    cy.get('.popover__menu > :nth-child(1)').click()
    cy.get('.profile-links-add-wordpress__cancel').click()

    // Log out
    cy.get('.sidebar__me-signout > .button').click()
 


})


