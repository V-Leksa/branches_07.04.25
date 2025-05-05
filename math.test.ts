const {returnDivideComponents} = require ('./math');

test ('adds 10 / 5 to equal 2', () => {
    expect (returnDivideComponents (10, 5).toBe (2));
});
