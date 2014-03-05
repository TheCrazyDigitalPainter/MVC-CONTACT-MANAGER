(function(window) {
    function EditView(name, template) {
        function initView() {
            that.notifyChange('ONINITVIEW');
        }

        function notifyChange(event, data) {
            that.dispatch(event, that, data);
        }

        function initHandlers() {
            var deleteBtn = qs("#delete");
            var editBtn = qs("#edit");
            if (deleteBtn !== null) deleteBtn.addEventListener('click', delteHandler, false);
            if (editBtn !== null) editBtn.addEventListener('click', editHandler, false);

        }

        function updateView(data) {
            that.elem.innerHTML = that.template.render(data);
            initHandlers();
        }
        //handlers

        function editHandler(e) {
          
            e.preventDefault();
            var data = {};
            data.id = e.target.form.id.value;
            data.firstname = e.target.form.firstname.value;
            data.lastname = e.target.form.lastname.value;
            data.postal_code = e.target.form.postal_code.value;
            data.adress = e.target.form.adress.value;
            data.adress = e.target.form.adress.value;
            data.town = e.target.form.town.value;
              notifyChange('modifyContact', data);
        }

        function delteHandler(e) {
            e.preventDefault();
            var data = {};
            data.id = e.target.form.id.value;
            // // data.firstname = e.target.firstname.value;
            // // data.lastname = e.target.lastname.value;
            // // data.postal_code = e.target.postal_code.value;
            // // data.adress = e.target.adress.value;
            // // data.adress = e.target.adress.value;
            // // data.town = e.target.town.value;
             notifyChange('deleteContact', data);
        }
        var that = new triptyk.View(name, template);
        that.updateView = updateView;
        that.initView = initView;
        var t1 = setTimeout(initView, 1);
        return that;
    }
    window.triptyk = window.triptyk || {};
    window.triptyk.contactMgr = window.triptyk.contactMgr || {};
    window.triptyk.contactMgr.EditView = EditView;
})(window);