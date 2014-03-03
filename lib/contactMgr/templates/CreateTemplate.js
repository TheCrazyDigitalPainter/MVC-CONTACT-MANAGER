(function(window) {
    function CreateTemplate() {
        var templateHtml = '<form><label for="firstname">Firstname :</label><input type="text" name="firstname" />'
                            +'<label for="lastname">Lastname :</label><input type="text" name="lastname"/>'
                            +'<label for="adress">Adress :</label><input type="text" name="adress"/>'
                            +'<label for="postal_code">Postal Code :</label><input type="text" name="postal_code"/>'
                            +'<label for="town">Town  :</label><input type="text" name="town"/>'
                            +'<input type="submit" value="submit" /></form>';

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
    window.triptyk.templates.CreateTemplate = CreateTemplate;

})(window);