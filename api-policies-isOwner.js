module.exports = function(req, res, next) {

  // User is allowed, proceed to the next policy, 
  // or if this is the last policy, the controller
  
  var policyValidator = ModelPolicy(req);

  if (policyValidator.queriedModelCreteria({owner:req.session.user_id}) ) {
    return next();
  }

  // User is not allowed
  res.status(403);
  return res.json({error:'not allowed'});
};
