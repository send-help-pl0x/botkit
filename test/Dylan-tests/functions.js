const axios = require('axios');
const functions = {
    add: function(num1, num2) {
        return num1 + num2;
    },

    createUser: () => {
        const user = {
            firstName: 'Dylan'
        }
        user['lastName'] = 'Albertazzi';
        return user;
    },

    fetchUser: () => axios
    .get('https://jsonplaceholder.typicode.com/users/1')
    .then(res => res.data)
    .catch(err => 'error')
};

module.exports = functions;
