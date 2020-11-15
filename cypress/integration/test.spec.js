/* eslint-disable */

// check react chained query bug
// https://github.com/abhinaba-ghosh/cypress-react-selector/issues/41
describe('It should validate cypress chained queries', () => {
    before(() => {
        cy.visit('http://localhost:3000/');
        cy.waitForReact('#root');
    });

    // this test is currently failing
    it('it should validate react selection with component only', () => {
        cy.react('House', { props: { house: 'House 1' } })
            .react('Cat', { name: 'Tom' })
            .should('have.length', '1');
    });
});
