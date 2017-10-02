QUnit.test("Here's a test that should always pass", function (assert) {
    assert.ok(1 <= 3, "1<3 - the first agrument is 'truthy', so we pass!");
});

QUnit.test('Testing calcultePrice function with several sets of inputs', function (assert) {
    assert.equal(Total1(12, 2, 5), 25.2, 'Tested with two relatively small positive numbers');
    assert.equal(Total1(50, 50, 5), 2625, 'Tested with two large positive numbers');

});