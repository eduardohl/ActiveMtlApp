module.exports = function(){
    return {
        getResquestLocation:getResquestLocation,
        getRequestedElemId: getRequestedElemId,
        getUserId:getUserId
    };

    function getResquestLocation(req){

        if(req.params.lat !== undefined && req.params.lon !== undefined){
            return {
                latitude: parseFloat(req.params.lat),
                longitude: parseFloat(req.params.lon)
            };
        } else {
            return {};
        }

    };

    function getRequestedElemId(req){
        if(req.params.id !== undefined){
            return req.params.id;
        } else {
            return null
        }
    };

    function getUserId(req){
        if(req.query.user !== {}){
            return req.query.user;
        } else {
            return null;
        }

    };

}