"use strict";
(function(window) {
    var application = {};

    function Application(name) {
        this.controller = new triptyk.Controller(); 
    }
    var application = new Application();
    application.controller.addModel(new triptyk.ContactModel('gilles_contacts'));
    application.controller.addView(new triptyk.contactMgr.ListView('listView',new triptyk.templates.ListTemplate()));
    application.controller.addView(new triptyk.contactMgr.CreateView('createView',new triptyk.templates.CreateTemplate()));
    application.controller.addView(new triptyk.contactMgr.EditView('editView',new triptyk.templates.EditTemplate()));
    application.controller.addView(new triptyk.contactMgr.MenuView('menuView',new triptyk.templates.MenuTemplate()));
   	var contactModel = application.controller.getModelById('contact');
    var menuView = application.controller.getViewById('menuView');
    var listView = application.controller.getViewById('listView');
    var createView = application.controller.getViewById('createView');
    var editView = application.controller.getViewById('editView');

    createView.hide();

   	contactModel.addEventListener('updateModel',modelUpdated,this)

    menuView.addEventListener('showView',showView,this);
    createView.addEventListener('createContact',contactModel.saveContact,this);
    listView.addEventListener('editContact',editContact,this);
    editView.addEventListener('deleteContact',contactModel.deleteContact,this);
    editView.addEventListener('modifyContact',contactModel.saveContact,this);


    function editContact(e,data)
    {
      editView.updateView(data);
      showView(e,'editView');
    }

    function showView(e,view)
    {
      editView.hide();
      createView.hide();
      application.controller.getViewById(view).show();
    }


   	function modelUpdated(e,data)
   	{
   		listView.updateView(data);
      menuView.updateView();
      createView.updateView();
      editView.updateView();
   	}

   	contactModel.setLocalStorage();
   	contactModel.getAllContacts();

})(window);