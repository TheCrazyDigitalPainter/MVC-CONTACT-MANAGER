(function(window) {
    'user strict';

    function Controller(model, view) {
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
                console.log("controller.create")
            }.bind(this));
        }
        //Generation of the public api
        var that = {};
        that.model = model;
        that.view = view;
        that.addItem = addItem;
        return that;
    }
    window.triptyk = window.triptyk || {};
    window.triptyk.Controller = Controller;
})(window);