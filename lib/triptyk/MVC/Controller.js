(function(window) {
    'user strict';

    function Controller() {
        function addModel(model) {
            var l = that.models.length;
            if (l == 0) {
                that.models.push(model);
            } else {
                for (var i = 0; i < l; i++) {
                    if (that.models[i].name === model.name) {
                        throw "The model " + model.name + " already exist";
                    } else {
                        that.models.push(model);
                    }
                }
            }
        }

        function getModelById(id) {
            var retTemp;
            var l = that.models.length;
            for (var i = 0; i < l; i++) {
                if (that.models[i].name === id) {
                    retTemp = that.models[i];
                } else {
                    throw "The model " + id + " does not exist";
                }
            }
            return retTemp;
        }

        function addView(view) {
            var l = that.views.length;
            if (l == 0) {
                that.views.push(view);
            } else {
                for (var i = 0; i < l; i++) {
                    if (that.views[i].name === view.name) {
                        throw "The View " + view.name + " already exist";
                    } else {
                        that.views.push(model);
                    }
                }
            }
        }

        function getViewById(id) {
            var retTemp;
            var l = that.views.length;
            for (var i = 0; i < l; i++) {
                if (that.views[i].name === id) {
                    retTemp = that.views[i];
                } else {
                    throw "The View " + id + " does not exist";
                }
            }
            return retTemp;
        }
        //Generation of the public api
        var that = {};
        that.views = [];
        that.models = [];
        that.addModel = addModel;
        that.getModelById = getModelById;
        that.addView = addView;
        that.getViewById = getViewById;
        return that;
    }
    window.triptyk = window.triptyk || {};
    window.triptyk.Controller = Controller;
})(window);