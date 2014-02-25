(function(window) {
    'user strict';

    function Controller(model,view) {
        //private functions
        /**
         * An event to fire whenever you want to add an item. Simply pass in the event
         * object and it'll handle the DOM insertion and saving of the new item.
         */
        function addItem(firstname, lastname, adress, postal_code, town) {
            if (firstname.trim() === '') {
                return;	
            }
            that.model.create(firstname, lastname, adress, postal_code, town, function() {
            	findAll();
            }.bind(this));
        }



        function findAll(){
        	that.model.findAll(resultFindAll);
        }

        function resultFindAll(data){
        	view.renderView(data);
        }

        

        


        //Generation of the public api
        var that = {};
        that.view = view;
        that.model = model;
        that.addItem = addItem;
        that.findAll = findAll;
        return that;
    }
    window.triptyk = window.triptyk || {};
    window.triptyk.Controller = Controller;
})(window);