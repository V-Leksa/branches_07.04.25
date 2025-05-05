const {returnDivideComponents} = require ('./math');

test ('adds 10 / 5 to equal 2', () => {
    expect (returnDivideComponents (10, 5).toBe (2));
});

const {returnAddComponents} = require ('./math');

test ('adds 2 + 3 to equal 5', () => {
    expect (returnAddComponents (2, 3).toBe (5));
});
