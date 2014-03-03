(function(window) {
    function EditTemplate() {
        var templateHtml = '<form>'+'<label for="id">ID :</label><input type="text" name="id" value="{{id}}" />' +'<label for="firstname">Firstname :</label><input type="text" name="firstname" value="{{firstname}}" />' + '<label for="lastname">Lastname :</label><input type="text" name="lastname" value="{{lastname}}"/>' + '<label for="adress">Adress :</label><input type="text" name="adress" value="{{adress}}"/>' + '<label for="postal_code">Postal Code :</label><input type="text" name="postal_code" value="{{postal_code}}"/>' + '<label for="town">Town  :</label><input type="text" name="town" value="{{town}}"/>' + '<input type="submit" value="edit" />' + '<input type="submit" value="delete" />' + '</form>';

        function render(data) {

            var view = '';
            if (data !== undefined) {
                var template = templateHtml;
                template = template.replace('{{id}}', data.id);
                template = template.replace('{{firstname}}', data.firstname);
                template = template.replace('{{lastname}}', data.lastname);
                template = template.replace('{{adress}}', data.adress);
                template = template.replace('{{postal_code}}', data.postal_code);
                template = template.replace('{{town}}', data.town);
                view = view + template;
            }
            return view;
        }
        var that = new triptyk.TemplateBase();
        that.render = render;
        return that;
    }
    window.triptyk = window.triptyk || {};
    window.triptyk.templates = window.triptyk.templates || {};
    window.triptyk.templates.EditTemplate = EditTemplate;
})(window);