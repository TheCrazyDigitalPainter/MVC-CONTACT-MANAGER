(function(window) {
    function View(name) {

        function updateView(template,data) {
                    
                    that.elem.innerHTML =template.render(data);
        }

        function show()
        {
            that.elem.style.display ="block";
        }

        function hide()
        {
           that.elem.style.display ="none";
        }

        var that = new triptyk.EventBasedObject();
        that.show = show;
        that.hide = hide;
        that.name =name;
        that.elem = qs('#'+name);
        that.updateView = updateView;
        return that;
    }
    window.triptyk = window.triptyk || {};
    window.triptyk.View = View;
})(window);