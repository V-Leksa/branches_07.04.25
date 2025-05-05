const {returnDivideComponents} = require ('./math');

test ('adds 10 / 5 to equal 2', () => {
    expect (returnDivideComponents (10, 5).toBe (2));
});
function returnAddComponents (a, b) {
    return a + b;
}

module.exports = {returnAddComponents};
