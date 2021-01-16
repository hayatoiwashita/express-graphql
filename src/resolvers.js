const { Users } = require('../data/users');

const resolvers = {
  users: async (_) => {
    console.log('come here');
    return Users;
  },
  user: async ({ id }, context) => {
    return Users.find((user) => user.id == id);
  },
};

module.exports = resolvers;
