var App = App || {
        openDetail: function(id){
                ActiveMTL.openDetail(id);
                return;
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

                if(!App.isBridgeAvailable()){
                        console.log('Method call ID : ' + id);
                        window.setTimeout(function(){
                                window.location = self.attr('href');
                                return false;
                        }, 1000);
                } else {
                       App[fn].apply(App, [id]); 
                }        
                
                return false;
        });
});