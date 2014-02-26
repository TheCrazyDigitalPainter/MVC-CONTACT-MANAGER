(function(window) {
    function ContactModel(name) {
        function setLocalStorage(name) {
            that.localStorage = new triptyk.Storage(name);
        }

        function getAllContacts() {
            that.localStorage.findAll(updateModel);
        }

        function notifyChange(event, data) {
            that.dispatch(event, that, data);
        }

        function updateModel(e) {
            that.notifyChange('updateModel', e)
        }
        var that = new triptyk.Model(name);
        that.setLocalStorage = setLocalStorage;
        that.getAllContacts = getAllContacts;
        that.notifyChange = notifyChange;
        return that;
    }
    window.triptyk = window.triptyk || {};
    window.triptyk.ContactModel = ContactModel;
})(window);