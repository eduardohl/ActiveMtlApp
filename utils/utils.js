module.exports = function(){
    return {
        getResquestLocation:getResquestLocation,
        getRequestedElemId: getRequestedElemId
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

}