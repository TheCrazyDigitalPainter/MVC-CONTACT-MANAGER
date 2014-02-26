"use strict";
(function(window) {
    var application = {};

    function Application(name) {
        this.controller = new triptyk.Controller(); 
    }
    var application = new Application('gilles_contacts');
    application.controller.addModel(new triptyk.ContactModel('contact'));
   	var contactModel = application.controller.getModelById('contact');

   	contactModel.addEventListener('updateModel',modelListener,this)


   	function modelListener(e,data)
   	{
   		console.log(e);
   		console.log(data);
   	}

   	contactModel.setLocalStorage('gilles_contacts');
   	contactModel.getAllContacts();

})(window);