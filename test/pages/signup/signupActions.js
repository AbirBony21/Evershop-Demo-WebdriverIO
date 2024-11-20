
const signupLocators = require("./signupLocators");


class SignupActions{
    async enterFullNameInput(fullName){
        await signupLocators.fullNameInputField.setValue(fullName);
    }

    async clickOnCreateAccount(){
        await signupLocators.createAccountLink.click();
    }

}


module.exports = new SignupActions();