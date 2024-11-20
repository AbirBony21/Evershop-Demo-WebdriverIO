const loginLocators = require("./loginLocators");

class LoginActions{
    async clickOnProfileIcon(){
        await loginLocators.profileIcon.waitForDisplayed({ timeout: 5000 });
        await loginLocators.profileIcon.click();
    }

    async enterEmail(email){
        await loginLocators.loginEmailInput.setValue(email);
    }

    async enterPassword(password){
        await loginLocators.loginPasswordInput.setValue(password);
    }

    async clickOnSubmitButton(){
        await loginLocators.buttonSignin.click();
    }

    async clickOnLogout(){
        await loginLocators.logoutLink.waitForDisplayed({ timeout: 5000 });
        await loginLocators.logoutLink.click();
    }

}

module.exports = new LoginActions();