"use strict";
(function() {
    var application = {};

    function Application(name) {
        this.storage = new triptyk.Storage(name);
        this.model = new triptyk.Model(this.storage);
        this.listView = new triptyk.ListView();
        this.controller = new triptyk.Controller(this.model, this.listView);
        
    }
    var application = new Application('gilles_contacts');
    application.controller.findAll();
    // application.controller.addItem('gg', 'gg', 'gg', 'gg', 'gg');
})();