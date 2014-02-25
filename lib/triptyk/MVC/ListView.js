(function(window) {
    function ListView() {
    	var table=qs('#liste table');
    	var postTemplate = ' <tr><td>Firstname</td><td>Lastname</td><td>Adress</td><td>Postal Code</td><td>Town</td></tr>';
        var template = '<tr data-id="{{id}}" class="contact_item"><td>' + '{{firstname}}' + "</td><td>" + '{{lastname}}' + "</td><td>" + '{{adress}}' + "</td><td>" + '{{postal_code}}' + "</td><td>" + '{{town}}' + "</td></tr>";



        function rowDblClickHandler(e)
        {
        	console.log(e.target.parentElement);
        }



        function renderView(data) {
        	// console.log(data);
            var i, l;
            var view = '';
            for (i = 0, l = data.length; i < l; i++) {
                var template = that.template;
                template = template.replace('{{id}}', data[i].id);
                template = template.replace('{{firstname}}', data[i].firstname);
                template = template.replace('{{lastname}}', data[i].lastname);
                template = template.replace('{{adress}}', data[i].adress);
                template = template.replace('{{postal_code}}', data[i].postal_code);
                template = template.replace('{{town}}', data[i].town);
                view = view + template;
            }

           table.innerHTML = postTemplate +view;

            qsa('#liste table tr.contact_item').forEach(function(e)
            {
            	e.addEventListener("dblclick",rowDblClickHandler,false);
            });

        }
        var that = {};
        that.template = template;
        that.renderView = renderView;
        return that;
    }
    window.triptyk = window.triptyk || {};
    window.triptyk.ListView = ListView;
})(window);