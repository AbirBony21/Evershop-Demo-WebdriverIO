class searchLocators{
    get searchIcon(){
        return $("//a[@class='search-icon']");
    }

    get searchInputField(){
        return $("//input[@placeholder='Search']");
    }

    productList(number){
        return $(`(//div[contains(@class,'product-name')])[${number}]`);
    }


}

module.exports = new searchLocators();

// (//ul[contains(@class,'variant-option-list')]/li/a)[1]
// (//div[contains(@class,'product-name')])[1]