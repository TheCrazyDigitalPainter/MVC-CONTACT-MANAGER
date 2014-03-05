(function(window) {
    function ListTemplate() {
        var templateHtml = '<tr data-id="{{id}}" class="contact_item"><td>' + '{{firstname}}' + "</td><td>" + '{{lastname}}' + "</td><td>" + '{{adress}}' + "</td><td>" + '{{postal_code}}' + "</td><td>" + '{{town}}' + "</td></tr>";

        function render(data) {
            var i, l;
            var view ='<tr><td>firstname</td><td>lastname</td><td>adress</td><td>postal code</td><td>town</td></tr>';
            for (i = 0, l = data.length; i < l; i++) {
                var template = templateHtml;
                template = template.replace('{{id}}', data[i].id);
                template = template.replace('{{firstname}}', data[i].firstname);
                template = template.replace('{{lastname}}', data[i].lastname);
                template = template.replace('{{adress}}', data[i].adress);
                template = template.replace('{{postal_code}}', data[i].postal_code);
                template = template.replace('{{town}}', data[i].town);
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
    window.triptyk.templates.ListTemplate = ListTemplate;

})(window);