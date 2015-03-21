require.config({
    urlArgs: "bust=" +  (new Date()).getTime(),//Remove before deployment
    paths: {
        "app": "app",
        "ajax": "modules/ajax",
        "extend": "modules/extend",
        "events": "modules/events",
        "createNode": "modules/createNode",
        "api-call": "modules/api-call",
        "transitionend": "modules/cssTransitionEvents",
        "level-select": "views/level-select",
        "engine": "engine",
        "text": "vendor/text"
        
    },
    shim: {
        "api-call": ["ajax"] //used to guarantee the order of loading for the listed module
    }
});

require(["app"], function( App){
    App.initialize();
});

