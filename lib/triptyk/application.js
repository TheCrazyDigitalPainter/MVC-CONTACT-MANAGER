"use strict";
(function() {
    var application = {};

    function Application(name) {
        this.storage = new triptyk.Storage(name);
        this.model = new triptyk.Model(this.storage);
        this.controller = new triptyk.Controller(this.model);
    }
    var application = new Application('gilles_contacts');
    application.controller.addItem('gg', 'gg', 'gg', 'gg', 'gg');
})();