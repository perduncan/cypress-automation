export class LoginPage{

    loginPage_username = '#usernameOrEmail'
    loginPage_password = '#password'
    loginPage_loginButton = '.login__form-action > .button'
    loginPage_gdprButton = '.gdpr-banner__buttons > .button'

    navigate(url){
        cy.visit(url)
    }

    enterUsername(username){
        cy.get(this.loginPage_username).type(username)
    }

    enterPassword(password){
        cy.get(this.loginPage_password).type(password)
    }

    clickLogin(){
        cy.get(this.loginPage_loginButton).click()
    }

    clickGdprBanner(){
        cy.get(this.loginPage_gdprButton).click()
    }
}