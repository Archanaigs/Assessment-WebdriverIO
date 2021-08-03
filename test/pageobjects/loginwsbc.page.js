const Page = require('./page');

 class login extends Page {
    get signInEmailField () { return $('#input-email') }
    get signInPasswordField () { return $('#input-password') }
    get signInBtn () { return $("#button-submit") }

    

    async fillSignInForm (email, password) {
        await (await this.signInEmailField).setValue(email);
        await (await this.signInPasswordField).setValue(password);
        await (await this.signInBtn).click();
    }

    
  
}

module.exports = new login();
