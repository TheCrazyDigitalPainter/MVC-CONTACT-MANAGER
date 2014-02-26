(function(window) {
    'user strict';

    function Model(name) {
        function onInitModel() {
            notifyChange('ONINITMODEL');
        }

        function notifyChange(event) {
            that.dispatch(event, that);
        }
        //Generation of the public api
        var that = new triptyk.EventBasedObject();
        that.name = name;
        that.notifyChange = notifyChange;
        that.onInitModel = onInitModel;
        //init model
        var t1=setTimeout(onInitModel,1);
        return that;
    }
    window.triptyk = window.triptyk || {};
    window.triptyk.Model = Model;
})(window);