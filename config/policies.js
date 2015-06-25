module.exports.policies = {
  ProductController: {
    '*': true,
    'delete': 'isOwner'
  }

};
