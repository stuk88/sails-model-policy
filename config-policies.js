
module.exports.policies = {
  UserController: {
    'login': true,
    '*': 'isAuthenticated'
  }

};
