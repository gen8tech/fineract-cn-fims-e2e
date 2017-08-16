//Offices.js
var Common = require('../Pages/Common.js');

var officeIdentifierInput = $(".mat-input-infix input[placeholder='Identifier']");
var officeNameInput = $(".mat-input-infix input[formcontrolname='name']");
var officeDescriptionInput = $(".mat-input-infix input[formcontrolname='description']");
var streetInput = $(".mat-input-infix input[formcontrolname='street']");
var numberInput = $(".mat-input-infix input[placeholder='Number']");
var passwordInput = $(".mat-input-infix input[formcontrolname='password']");
var withdrawalLimitInput = $(".mat-input-infix input[formcontrolname='cashdrawLimit']");
var tellerAccountInput = $(".mat-input-infix input[placeholder='Teller account(Asset accounts only)']");
var vaultAccountInput = $(".mat-input-infix input[placeholder='Vault account(Asset accounts only)']");
var assignedEmployeeInput = $(".mat-input-infix input[placeholder='Assigned employee']");
var buttonPrimary = $(".mat-raised-button.mat-primary");


//Actions specific to the Offices section, including Teller management

var EC = protractor.ExpectedConditions;

module.exports = {
    goToManageOfficesViaSidePanel: function() {
        $$("a[href='/offices']").first().click();
    },
    clickViewOfficesFromQuickAccess: function() {
        browser.wait(EC.visibilityOf($$("a[href='/offices']").get(1)), 5000);
        $$("a[href='/offices']").get(1).click();
    },
    verifyCardHasTitleCreateOffice: function () {
        form_title = $("fims-layout-card-over .mat-toolbar-row div").getText();
        expect(form_title).toEqual("Create new office");
    },
    clickButtonCreateNewOffice: function(){
        browser.wait(EC.visibilityOf($("a[title='Create branch office']")), 5000);
        $("a[title='Create branch office']").click();
    },

    goToManageTellersForOfficeByIdentifier: function(identifier){
        link = '/offices/detail/' + identifier + '/tellers';
        browser.wait(EC.visibilityOf($('a[href="' + link +'"]')), 5000);
        $('a[href="' + link +'"]').click();
    },
    enterTextIntoOfficeIdentifierInputField: function(text) {
        officeIdentifierInput.click().sendKeys(text);
    },
    enterTextIntoOfficeNameInputField: function(text) {
        officeNameInput.click().sendKeys(text);
    },
    enterTextIntoOfficeDescriptionInputField: function(text){
        officeDescriptionInput.click().sendKeys(text);
    },
    clickEnabledContinueButtonForOfficeDetails: function(){
        expect($$(".mat-raised-button").get(0).isEnabled()).toBeTruthy();
        $$(".mat-raised-button").get(0).click();
    },
    clickEnabledCreateOfficeButton: function(){
        browser.wait(EC.visibilityOf($(".mat-raised-button.mat-primary")), 5000);
        expect($(".mat-raised-button.mat-primary").isEnabled()).toBeTruthy();
        $(".mat-raised-button.mat-primary").click();
    },
    clickCreateTellerForOfficeByIdentifier: function(identifier){
        link = '/offices/detail/' + identifier + '/tellers/create';
        browser.wait(EC.visibilityOf($('a[href="' + link + '"]')), 5000);
        $('a[href="' + link + '"]').click();
    },
    enterTextIntoTellerNumberInputField: function(text) {
        browser.wait(EC.visibilityOf(numberInput), 5000);
        numberInput.click().sendKeys(text);
    },
    enterTextIntoPasswordInputField: function(text) {
        passwordInput.click().sendKeys(text);
    },
    enterTextIntoCashWithdrawalLimitInputField: function(text) {
        withdrawalLimitInput.click().sendKeys(text);
    },
    enterTextIntoTellerAccountInputFieldAndSelectMatchingEntry: function(text) {
        tellerAccountInput.click().sendKeys(text);
        browser.wait(EC.visibilityOf($(".mat-option")), 5000);
        $$(".mat-option").first().click();
    },
    enterTextIntoVaultAccountInputFieldAndSelectMatchingEntry: function(text) {
        vaultAccountInput.click().sendKeys(text);
        browser.wait(EC.visibilityOf($(".mat-option")), 5000);
        $$(".mat-option").first().click();
    },
    enterTextIntoAssignedEmployeeInputField: function(text) {
        assignedEmployeeInput.click().sendKeys(text);
    },
    clickEnabledCreateTellerButton: function(){
        //rowser.wait(EC.elementToBeClickable(buttonPrimary), 5000);
        expect(buttonPrimary.isEnabled()).toBeTruthy();
        buttonPrimary.click();
    },
    clickActionOpenForTellerOfOffice: function(teller, office){
        link = '/offices/detail/' + office + '/tellers/detail/' + teller + '/command?action=OPEN';
        browser.wait(EC.elementToBeClickable($('a[href="' + link + '"]')), 5000);
        $('a[href="' + link + '"]').click();
    },
    clickEnabledOpenTellerButton: function(){
        browser.wait(EC.visibilityOf($(".mat-raised-button.mat-primary")), 5000);
        //expect($(".mat-raised-button.mat-primary").isEnabled()).toBeTruthy();
        $(".mat-raised-button.mat-primary").click();
    },
    verifyTellerStatusIs: function(expectedStatus){
        browser.wait(EC.visibilityOf($("fims-state-display")), 5000);
        status = $("fims-state-display .mat-list-text .mat-line").getText();
        expect(status).toEqual(expectedStatus);
    },
    selectOnlyOptionInList: function(){
        browser.wait(EC.visibilityOf($(".mat-option")), 3000);
        element(by.css('.mat-option')).click();
    },
    selectOptionInListByName: function(name){
        browser.wait(EC.visibilityOf($(".mat-option")), 3000);
        element(by.cssContainingText('.mat-option', name)).click();
    },
    clickButtonCreateHeadquarter: function(){
        expect($(".mat-raised-button.mat-primary").isEnabled()).toBeTruthy();
        $(".mat-raised-button.mat-primary").click();
    },
    verifyNoHeadquarterExistingYet: function(){
        browser.wait(EC.visibilityOf($(".mat-card-title .material-icons")), 5000);
        title = $(".mat-card .mat-card-title span").getText();
        expect(title).toEqual("No Headquarter found");
    }



}