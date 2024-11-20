class LoginLocators{
    get profileIcon(){
        return $("//a[contains(@href,'/account')]");
    }
    
    get loginEmailInput(){
        return $("//input[@name='email']");
    }
    
    get loginPasswordInput(){
        return $("//input[@name='password']");
    }

    get buttonSignin(){
        return $("//button[@type='submit']");
    }
    
    get logoutLink(){
        return $("//a[contains(text(),'Logout')]");
    }

}

module.exports = new LoginLocators();
