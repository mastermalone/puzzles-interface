define(["events", "engine"], function (Evt, Engine) {
    
    var App = {
        initialize: function () {
            var evt = new Evt();
             
            console.log("Setting up", Engine);
            Engine.init();
        },
        launch: function (e) {
            Engine.init();
        }
    };
    return App;
});
