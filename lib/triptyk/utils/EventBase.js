(function(window) {
    function EventBasedObject() {
        function addEventListener(type, callback, scope) {
            var args = [];
            var numOfArgs = arguments.length;
            for (var i = 0; i < numOfArgs; i++) {
                args.push(arguments[i]);
            };
            args = args.length > 3 ? args.splice(3, args.length - 1) : [];
            if (typeof that.listeners[type] != "undefined") {
                that.listeners[type].push({
                    scope: scope,
                    callback: callback,
                    args: args
                });
            } else {
                that.listeners[type] = [{
                    scope: scope,
                    callback: callback,
                    args: args
                }];
            }
        }

        function removeEventListener(type, callback, scope) {
            if (typeof that.listeners[type] != "undefined") {
                var numOfCallbacks = that.listeners[type].length;
                var newArray = [];
                for (var i = 0; i < numOfCallbacks; i++) {
                    var listener = that.listeners[type][i];
                    if (listener.scope == scope && listener.callback == callback) {} else {
                        newArray.push(listener);
                    }
                }
                that.listeners[type] = newArray;
            }
        }

        function hasEventListener(type, callback, scope) {
            if (typeof that.listeners[type] != "undefined") {
                var numOfCallbacks = that.listeners[type].length;
                if (callback === undefined && scope === undefined) {
                    return numOfCallbacks > 0;
                }
                for (var i = 0; i < numOfCallbacks; i++) {
                    var listener = that.listeners[type][i];
                    if ((scope ? listener.scope == scope : true) && listener.callback == callback) {
                        return true;
                    }
                }
            }
            return false;
        }

        function dispatch(type, target) {
            var numOfListeners = 0;
            var event = {
                type: type,
                target: target
            };
            var args = [];
            var numOfArgs = arguments.length;
            for (var i = 0; i < numOfArgs; i++) {
                args.push(arguments[i]);
            };
            args = args.length > 2 ? args.splice(2, args.length - 1) : [];
            args = [event].concat(args);
            if (typeof that.listeners[type] != "undefined") {
                var numOfCallbacks = that.listeners[type].length;
                for (var i = 0; i < numOfCallbacks; i++) {
                    var listener = that.listeners[type][i];
                    if (listener && listener.callback) {
                        var concatArgs = args.concat(listener.args);
                        listener.callback.apply(listener.scope, concatArgs);
                        numOfListeners += 1;
                    }
                }
            }
        }

        function getEvents() {
            var str = "";
            for (var type in that.listeners) {
                var numOfCallbacks = that.listeners[type].length;
                for (var i = 0; i < numOfCallbacks; i++) {
                    var listener = that.listeners[type][i];
                    str += listener.scope && listener.scope.className ? listener.scope.className : "anonymous";
                    str += " listen for '" + type + "'\n";
                }
            }
            return str;
        }
        var that = {};
        that.listeners = {};
        that.addEventListener = addEventListener;
        that.removeEventListener = removeEventListener;
        that.hasEventListener = hasEventListener;
        that.dispatch = dispatch;
        that.getEvents = getEvents;
        return that;
    }
    window.triptyk = window.triptyk || {};
    window.triptyk.EventBasedObject = EventBasedObject;
})(window);