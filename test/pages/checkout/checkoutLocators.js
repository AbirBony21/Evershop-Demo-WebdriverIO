class checkoutLocators{
    get subTotal(){
        return $("//div[contains(text(),'Sub total')]/following-sibling::div");
    }

    get checkoutButton(){
        return $("//a[contains(@href,'/checkout')]");
    }

    get grandTotal(){
        return $("//div[@class='grand-total-value']");
    }

}

module.exports = new checkoutLocators();