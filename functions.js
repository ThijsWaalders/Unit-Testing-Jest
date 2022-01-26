// Import the axios package for fetchUser
const { default: axios } = require('axios');

const functions = {
    add: (num1, num2) => num1 + num2,
    isNull: () => null,
    checkValue: (x) => x,
    isArray: (array) => array,
    createUser: () => {
        const user = { firstName: 'Brad' };
        user['lastName'] = 'Traversy';
        return user;
    },
    fetchUser: () =>
        axios
            .get('https://jsonplaceholder.typicode.com/users/1')
            .then((res) => res.data)
            .catch((err) => 'error'),
};
module.exports = functions; // exports the functions function as a module
