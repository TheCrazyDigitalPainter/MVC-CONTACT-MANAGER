(function(window) {
    'user strict';

    function Model(storage) {
        //private functions
        function create(firstname, lastname, adress, postal_code, town, callback) {
            callback = callback || function() {};
            var newContact = {
                firstname: firstname,
                lastname: lastname,
                adress: adress,
                postal_code: postal_code,
                town: town
            }
            that.storage.save(newContact, callback);
        }
        //Generation of the public api
        var that = {};
        that.storage = storage;
        that.create = create;
        return that;
    }
    window.triptyk = window.triptyk || {};
    window.triptyk.Model = Model;
})(window);