var assert = chai.assert;

suite('test:', function() {
    test('Prueba de los HEADER', function() {
        var tokens = lexer('[HEADER]');
assert.equal(tokens[0].type,'header');
    });

});
