module.exports.policies = {
  UserController: {
    'login': true,
    '*': 'isOwner'
  }

};
