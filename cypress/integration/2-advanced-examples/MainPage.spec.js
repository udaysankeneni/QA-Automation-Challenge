import FirstPageAfterLoading from '../../support/FirstPageAfterLoading'
import AfterTypingNumberAssertingMediun from '../../support/AfterTypingNumberAssertingMediun'


/// <reference types="cypress" />


describe('Assignment Task',()=>{


    // By Using Request Verifying that Status Is Ok or Not , This Is an Example Of API Testing
    it('Asserting That Response is Not Modified ', () => {
      cy.request('http://localhost:3000/')
      .then((response) => {
        // https://on.cypress.io/assertions
        expect(response).property('status').to.equal(200)
      })
    })
   
     // This Test Case is Basically taking numbers 1 to 10 and for each number we are verifying mediun 
     // diffrent assertions are also added for the headers 
    it('verifying Median For specific Number in response getting set', () => {
        var numbers=Array.from(Array(10).keys())

      cy.visit('http://localhost:3000/')   // visting the Page

      let firstpage=new FirstPageAfterLoading()  // make object
      firstpage.verifyHeaderOfTheWebApp();
        
      let aftertypingnumber= new AfterTypingNumberAssertingMediun();

      for (let index = 0; index < numbers.length; index++) {
     aftertypingnumber.typeNumberInTextbox(numbers[index]);
     aftertypingnumber.getSubmitButton().click()


     
        switch (numbers[index]) {
            case 1:
                cy.get('h2').then(text=>{
                    expect(text.text()).includes(',')
                })
                break;
        
                case 2:
                    cy.get('h2').then(text=>{
                        expect(text.text()).includes(',')
                    })
                break;
        
                case 3:
                    cy.get('h2').then(text=>{
                        expect(text.text()).includes('2')
                    })
                break;
        
                case 4:
                    cy.get('h2').then(text=>{
                        expect(text.text()).includes('2,3')
                    })
                break;
        
                case 5:
                    cy.get('h2').then(text=>{
                        expect(text.text()).includes('2,3')
                    })
                break;
        
                case 6:
                    cy.get('h2').then(text=>{
                        expect(text.text()).includes('3')
                    })
                break;
        
                case 7:
                    cy.get('h2').then(text=>{
                        expect(text.text()).includes('3')
                    })
                break;
        
                case 8:
                    cy.get('h2').then(text=>{
                        expect(text.text()).includes('3,5')
                    })
                break;

                case 9:
                    cy.get('h2').then(text=>{
                        expect(text.text()).includes('3,5')
                    })
                break;
        
                case 10:
                    cy.get('h2').then(text=>{
                        expect(text.text()).includes('3,5')
                    })
                break;
        
                
               default:
                   cy.log('Please Enter Some Number To Get Mediun')
                break;
        }

      }
    })
})
     


