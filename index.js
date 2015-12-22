exports.helloworld = function(context, data) {
    console.log(data.message);
    context.success(data.message);
};

exports.onChangeRepoRicc = function(context, data) {
    console.log("onChgRepo" + data.message);
    context.success("onChgRepo" + data.message);
};

exports.provabucket = function(context, data) {
    console.log("[provaBucket] "+data.message);
    context.success("[provaBucket] "+data.message);
};

