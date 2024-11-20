const signupActions = require("../pages/signup/signupActions");
const loginActions = require("../pages/login/loginActions");
const utility = require("../utilities/utility");

var fullName = "";
var email = "";
var password = "";

describe("Demo evershop site product purchase journey", ()=>{

    it("Should able to succesfully register", async()=>{
        await loginActions.clickOnProfileIcon();
        await signupActions.clickOnCreateAccount();
        fullName = await utility.createrandomString(5);
        email = fullName + "@yopmail.com";
        password = fullName + "&*&*&0";
        await signupActions.enterFullNameInput(fullName);
        await loginActions.enterEmail(email);
        await loginActions.enterPassword(password);
        await loginActions.clickOnSubmitButton();
        await browser.pause(5000);
    });

    it("Should able to succesfully logout", async()=>{
        await loginActions.clickOnProfileIcon();
        await loginActions.clickOnLogout();
        await browser.pause(5000);
    });

    it("Should able to succesfully login", async()=>{
        await loginActions.clickOnProfileIcon();
        await browser.pause(5000);
        await loginActions.enterEmail(email);
        await loginActions.enterPassword(password);
        await loginActions.clickOnSubmitButton();
    });

    
});