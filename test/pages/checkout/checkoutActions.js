const checkoutLocators = require("./checkoutLocators");
const utility = require("../../utilities/utility");

class checkoutActions{
    async getSubTotalAmount(){
        const subTotal = await checkoutLocators.subTotal.getText();
        const subTotalIntoNumber = await utility.convertTextToNumber(subTotal);
        return subTotalIntoNumber;
    }

    async getGrandTotalAmount(){
        const grandTotal = await checkoutLocators.grandTotal.getText();
        const grandTotalIntoNumber = await utility.convertTextToNumber(grandTotal);
        return grandTotalIntoNumber;
    }

    async clickOnCheckoutButton(){
        await checkoutLocators.checkoutButton.click();
    }

    

}

module.exports = new checkoutActions();