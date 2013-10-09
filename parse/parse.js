module.exports = function(){

    return {
        getDefi:getDefi
    };

    function getDefi(options, callback){
        console.log({data:'this is data'});
        var error = null;
        callback(error, {data:'this is data'});
    }
}