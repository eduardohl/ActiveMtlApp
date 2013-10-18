module.exports = function(){
    return {
        getResquestLocation:getResquestLocation,
        getRequestedElemId: getRequestedElemId,
        getUserId:getUserId,
        timeAgo:timeAgo
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

    function timeAgo(date) {
        var seconds = Math.floor(( ((new Date().getTime()) -date) /1000 )),
            interval = Math.floor(seconds / 31556926);

        if (interval >= 1) {
            if(interval > 1){
                return interval + " ans";
            } else {
                return " un an";
            }
        }


        interval = Math.floor(seconds / 2629743);
        if (interval >= 1) {
            if(interval > 1){
                return interval + " mois";
            } else {
                return " un mois";
            }
        }
        interval = Math.floor(seconds / 604800);
        if (interval >= 1) {
            if(interval > 1){
                return interval + " semaines";
            } else {
                return " une semaine";
            }
        }


        interval = Math.floor(seconds / 86400);
        if (interval >= 1) {
            if(interval > 1){
                return interval + " jours";
            } else {
                return " un jour";
            }
        }

        interval = Math.floor(seconds / 3600);
        if (interval >= 1) {
            if(interval > 1){
                return interval + " heures";
            } else {
                return " une heure";
            }
        }

        interval = Math.floor(seconds / 60);
        if (interval >= 1) {
            if(interval > 1){
                return interval + " minutes";
            } else {
                return " une minute";
            }
        }

        return Math.floor(seconds) + " secondes";


    }

}