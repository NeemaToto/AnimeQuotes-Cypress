describe('Visit mini-website and check for required elements', () => {

  beforeEach(() => {
    console.log('Starting Test');
    cy.visit('http://localhost:3000');
  });

  it('should check for at least one image', () => {
    cy.get('img').should('exist');
  });

  it('should check for at least two buttons', () => {
    cy.get('button').should('have.length.gte', 2);
  });

  it('should check if link going to kaggle website exists and checks if url leads to correct data set', () => {
    cy.get('footer div div a').should('exist').and('have.attr', 'href', 'https://www.kaggle.com/datasets/saschamet/anime-quotesjson')
  })

  it('should check to see if there is an h1 tag on the page', () => {
    cy.get('h1').should('exist')
  })

  it('should check to see if there is a header on the page', () => {
    cy.get('header').should('exist')
  })

  it('should check to see if there is a footer on the page', () => {
    cy.get('footer').should('exist')
  })

  it('should check to see if title tag exists, then check to see that it says "Anime Quotes"', () => {
    cy.title().should('exist').and('include', 'Anime Quotes');
  })

  it('should check document to have a head tag in it, then checks to see if it has meta tags in the head', () => {
    cy.document().should('have.property', 'head').and('have.descendants', 'meta');
  })

});
