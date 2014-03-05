(function(window) {
    function MenuTemplate() {
        var templateHtml = '<button id="listBtn">Liste</button><button id="createBtn">Create</button>';

        function render(data) {
          
            var view = '';
            var template = templateHtml;
            view =view+template;
           return view;
        }
        var that = new triptyk.TemplateBase();
        that.render = render;
        return that;
    }


    window.triptyk = window.triptyk || {};
    window.triptyk.templates = window.triptyk.templates || {};
    window.triptyk.templates.MenuTemplate = MenuTemplate;

})(window);