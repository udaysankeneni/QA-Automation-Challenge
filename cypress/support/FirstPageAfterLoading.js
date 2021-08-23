//const header= cy.get('h1')
class FirstPageAfterLoading{

    getHeaderOfTheWebApp(){
         return cy.get('h1');
    }
    verifyHeaderOfTheWebApp(){

        return this.getHeaderOfTheWebApp().then(el=>{
            expect(el.text()).to.be.equal('Enter a number to get the median of primes:')
        })
    }

}
export default FirstPageAfterLoading;
