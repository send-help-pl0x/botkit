const functions = require('./functions');

test('Adds 2 + 2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4);
});




test('User should be DYlan', () => {
    expect(functions.createUser()).toEqual({
        firstName: 'Dylan',
        lastName: 'Albertazzi'
    });
});

//async data

test('user name should me Leanne Graham', () => {
    expect.assertions(1);
    return functions.fetchUser().then(data => {
        expect(data.name).toEqual('Leanne Graham');
    })
})