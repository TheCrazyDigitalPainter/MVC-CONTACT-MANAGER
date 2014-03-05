(function(window) {
    function View(name, template) {


        function notifyChange(event) {
            that.dispatch(event, that);
        }

        function initView() {
            notifyChange('ONINITVIEW');
        }

        function updateView(data) {
            that.elem.innerHTML = that.template.render(data);
            that.displayMode = that.elem.style.display;
        }

        function show() {
            that.elem.style.display = "block";
        }

        function hide() {
          
            that.elem.style.display = "none";
        }
        var that = new triptyk.EventBasedObject();
        that.template = template;
        that.displayMode = "";
        that.name = name;
        that.elem = qs('#' + name);
        that.updateView = updateView;
        that.notifyChange = notifyChange;
        that.show = show;
        that.hide = hide;
        var t1=setTimeout(initView,1);
        return that;
    }
    window.triptyk = window.triptyk || {};
    window.triptyk.View = View;
})(window);