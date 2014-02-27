"use strict";
(function(window) {
    var application = {};

    function Application(name) {
        this.controller = new triptyk.Controller(); 
    }
    var application = new Application();
    application.controller.addModel(new triptyk.ContactModel());
    application.controller.addView(new triptyk.View('listView'));
   	var contactModel = application.controller.getModelById('contact');
    var listView = application.controller.getViewById('listView');

   	contactModel.addEventListener('updateModel',modelUpdated,this)

   	function modelUpdated(e,data)
   	{
   		listView.updateView(new triptyk.templates.ListTemplate(),data);
   	}

   	contactModel.setLocalStorage('gilles_contacts');
   	contactModel.getAllContacts();

})(window);