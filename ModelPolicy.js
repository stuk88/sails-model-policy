var wlFilter = require('waterline-criteria');

function ModelPolicy(req) {
	this.req = req;
}

ModelPolicy.prototype.queriedModelCreteria = function(criteria) {
	var Model = actionUtil.parseModel(req);
	if(!Model) return true; // if its not a model just continue;

	var model_obj = Model.findOne(req.param("id")).then(function(data){
		return data;
	});

	return (wlFilter(model_obj,criteria).results.length > 0);
};

ModelPolicy.prototype.customModelCreteria = function(model_obj, criteria) {
	return (wlFilter(model_obj,criteria).results.length > 0);
};
