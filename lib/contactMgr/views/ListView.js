(function(window) {
    function ListView(name, template) {
        function initView() {
            initHandlers();
            that.notifyChange('ONINITVIEW');
        }

        function notifyChange(event, data) {
            that.dispatch(event, that, data);
        }

        function initHandlers() {
            var elems = qsa("#listView tr");
            elems.forEach(function(e){e.addEventListener('dblclick', dblClickHandler, false);});
        }
        //handlers
        function dblClickHandler(e) {
            e.preventDefault();
            var tr=(e.target.parentElement);
            var tds = qsa('td',tr);
            var data = {};
            data.id=tr.getAttribute("data-id");
            data.firstname = tds[0].innerText;
            data.lastname = tds[1].innerText;
            data.postal_code = tds[2].innerText;
            data.adress = tds[3].innerText;
            data.town = tds[4].innerText;
            notifyChange('editContact', data);
        }
        var that = new triptyk.View(name, template);
        that.initView = initView;
        var t1 = setTimeout(initView, 1);
        return that;
    }
    window.triptyk = window.triptyk || {};
    window.triptyk.contactMgr = window.triptyk.contactMgr || {};
    window.triptyk.contactMgr.ListView = ListView;
})(window);