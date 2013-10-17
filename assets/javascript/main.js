var App = App || {
        openDetail: function(id){
                if(this.isBridgeAvailable()){
                        ActiveMTL.openDetail(id);
                } else console.log(id);
        },

        openShare: function(id){
                if(this.isBridgeAvailable()){
                        alert(id);
                } else console.log(id);
        },

        isBridgeAvailable: function(){
                var available = false;
                if(typeof(ActiveMTL) !== 'undefined'){
                        available = !available;
                }
                return available;
        }
};

$(document).ready(function(){
        $('a[data-action]').bind('click', function(evt){
                evt.preventDefault();
                var self = $(this), 
                        id = self.data('id'),
                        fn = self.data('action');
                
                App[fn].apply(App, [id]);
                return false;
        });
});