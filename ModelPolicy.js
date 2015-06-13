var wlFilter = require('waterline-criteria');

function ModelPolicy(req) {
	this.req = req;
}

ModelPolicy.prototype.queriedModelCreteria = function(criteria) {
	var Model = this.req.options.model;
	if(!Model) return true; // if its not a model just continue;

	var model_obj = Model.findOne(this.req.param("id")).then(function(data){
		return data;
	});

	return this.customModelCreteria(model_obj, criteria);
};

ModelPolicy.prototype.customModelCreteria = function(model_obj, criteria) {
	return (wlFilter(model_obj,criteria).results.length > 0);
};

