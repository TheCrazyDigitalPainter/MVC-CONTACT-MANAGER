(function(window){
	function MenuView(name,template){


        function initView() {
        	initHandlers();
            that.notifyChange('ONINITVIEW');
        }

        function notifyChange(event,view) {
            that.dispatch(event, that,view);
        }

        function initHandlers()
        {
        	var createBtnElem =qs("#menuView #createBtn");
        	createBtnElem.addEventListener('click',clickCreateHandler,false); 
        }


        //handlers
        function clickCreateHandler(e)
        {
        	notifyChange('showView','createView');
        } 


		var that = new triptyk.View(name,template);
		that.initView = initView;
		var t1=setTimeout(initView,1);
		return that;
	}
    window.triptyk = window.triptyk || {};
    window.triptyk.contactMgr = window.triptyk.contactMgr || {};
    window.triptyk.contactMgr.MenuView = MenuView;
})(window);