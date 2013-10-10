module.exports = function(){
    return {
        getResquestLocation:getResquestLocation,
        getRequestedElemId: getRequestedElemId
    };

    function getResquestLocation(req){

        if(req.params.lat !== undefined && req.params.lon !== undefined){
            return {
                latitude: req.params.lat,
                longitude: req.params.lon
            };
        } else {
            return {};
        }

    };

    function getRequestedElemId(req){
       return req.params.id;
    };

}