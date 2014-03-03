(function(window) {
    function CreateView(name, template) {
        function initView() {
            initHandlers();
            that.notifyChange('ONINITVIEW');
        }

        function notifyChange(event, data) {
            that.dispatch(event, that, data);
        }

        function initHandlers() {
            var createForm = qs("#createView form");
            createForm.addEventListener('submit', submitHandler, false);
        }
        //handlers
        function submitHandler(e) {
            e.preventDefault();
            var data = {};
            data.firstname = e.target.firstname.value;
            data.lastname = e.target.lastname.value;
            data.postal_code = e.target.postal_code.value;
            data.adress = e.target.adress.value;
            data.adress = e.target.adress.value;
            data.town = e.target.town.value;
            notifyChange('createContact', data);
        }
        var that = new triptyk.View(name, template);
        that.initView = initView;
        var t1 = setTimeout(initView, 1);
        return that;
    }
    window.triptyk = window.triptyk || {};
    window.triptyk.contactMgr = window.triptyk.contactMgr || {};
    window.triptyk.contactMgr.CreateView = CreateView;
})(window);