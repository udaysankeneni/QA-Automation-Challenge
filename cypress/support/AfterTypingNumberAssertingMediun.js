
//const textbox= cy.get('input[type="number"]')
class AfterTypingNumberAssertingMediun{

getNumberTextBox(){
return cy.get('input[type="number"]');
}
typeNumberInTextbox(numbers){

    return this.getNumberTextBox().type(numbers);
}
getSubmitButton(){

    return  cy.get('[type="submit"]');
}
}

module.exports=AfterTypingNumberAssertingMediun;
