(function(window) {
    function Storage(name, callback) {
        var data;
        var dbName;
        var that = {};
        dbName = that._dbName = name;
        callback = callback || function() {};
        if (!localStorage[dbName]) {
            data = {
                contacts: []
            };
            localStorage[dbName] = JSON.stringify(data);
        }
        callback.call(this, JSON.parse(localStorage[dbName]));
        /**
         * Will save the given data to the DB. If no item exists it will create a new
         * item, otherwise it'll simply update an existing item's properties
         *
         * @param {number} id An optional param to enter an ID of an item to update
         * @param {object} data The data to save back into the DB
         * @param {function} callback The callback to fire after saving
         */
        function save(id, updateData, callback) {
            var data = JSON.parse(localStorage[this._dbName]);
            var contacts = data.contacts;
            callback = callback || function() {};
            // If an ID was actually given, find the item and update each property
            if (typeof id !== 'object') {
                for (var i = 0; i < contacts.length; i++) {
                    if (contacts[i].id == id) {
                        for (var x in updateData) {
                            contacts[i][x] = updateData[x];
                        }
                    }
                }
                localStorage[this._dbName] = JSON.stringify(data);
                callback.call(this, JSON.parse(localStorage[this._dbName]).contacts);
            } else {
                callback = updateData;
                updateData = id;
                // Generate an ID
                updateData.id = new Date().getTime();
                contacts.push(updateData);
                localStorage[this._dbName] = JSON.stringify(data);
                callback.call(this, [updateData]);
            }
        };

        function findAll(callback){
        	var data = JSON.parse(localStorage[this._dbName]);
            var contacts = data.contacts;
            callback = callback || function() {};
            callback.call(this,contacts)
        }





        that.save = save;
        that.findAll = findAll;
        return that;
    }
    window.triptyk = window.triptyk || {};
    window.triptyk.Storage = Storage;
})(window);