(function(window) {
    function ContactModel(name) {
        function notifyChange(event, data) {
            that.dispatch(event, that, data);
        }

        function setLocalStorage() {
            if (!localStorage[that.localStorageName]) {
                data = {
                    contacts: []
                };
                localStorage[that.localStorageName] = JSON.stringify(data);
            }
            that.localDB = localStorage[that.localStorageName];
        }

        function saveContact(e, updateData) {
            var localData = JSON.parse(that.localDB);
            var contacts = localData.contacts;
            // If an ID was actually given, find the item and update each property
            if (typeof updateData.id !== 'undefined') {
                for (var i = 0; i < contacts.length; i++) {
                    if (contacts[i].id == id) {
                        for (var x in updateData) {
                            contacts[i][x] = updateData[x];
                        }
                    }
                }
            } else {
                // Generate an ID
                updateData.id = new Date().getTime();
                contacts.push(updateData);
            }
            that.localDB = JSON.stringify(localData);
            localStorage[that.localStorageName] = JSON.stringify(localData);
            getAllContacts();
        }

        function getAllContacts() {
            var data = JSON.parse(that.localDB);
            var contacts = data.contacts;
            updateModel(contacts);
        }

        function updateModel(data) {
            that.notifyChange('updateModel', data)
        }
        var that = new triptyk.Model("contact");
        that.localStorageName = name;
        that.setLocalStorage = setLocalStorage;
        that.getAllContacts = getAllContacts;
        that.saveContact = saveContact;
        that.notifyChange = notifyChange;
        return that;
    }
    window.triptyk = window.triptyk || {};
    window.triptyk.ContactModel = ContactModel;
})(window);