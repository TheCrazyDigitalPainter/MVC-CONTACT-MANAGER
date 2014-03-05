(function(window){
	function MenuView(name,template){


        function initView() {
        	initHandlers();
            that.notifyChange('ONINITVIEW');
        }

         function updateView(data) {
            that.elem.innerHTML = that.template.render(data);
            initHandlers();
        }

        function notifyChange(event,view) {
            that.dispatch(event, that,view);
        }

        function initHandlers()
        {
        	var createBtnElem =qs("#menuView #createBtn");
            createBtnElem.addEventListener('click',clickCreateHandler,false); 
            var createBtnElem =qs("#menuView #listBtn");
        	createBtnElem.addEventListener('click',clickListHandler,false); 
        }


        //handlers
        function clickCreateHandler(e)
        {
        	notifyChange('showView','createView');
        } 
         //handlers
        function clickListHandler(e)
        {
            notifyChange('showView','listView');
        } 


		var that = new triptyk.View(name,template);
		that.initView = initView;
        that.updateView = updateView;
		var t1=setTimeout(initView,1);
		return that;
	}
    window.triptyk = window.triptyk || {};
    window.triptyk.contactMgr = window.triptyk.contactMgr || {};
    window.triptyk.contactMgr.MenuView = MenuView;
})(window);