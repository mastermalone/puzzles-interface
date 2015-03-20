require.config({
    urlArgs: "bust=" +  (new Date()).getTime(),//Remove before deployment
    paths: {
        "ajax": "modules/ajax",
        "extend": "modules/extend",
        "events": "modules/events",
        "createNode": "modules/createNode",
        "api-call": "modules/api-call",
        "transitionend": "modules/cssTransitionEvents",
        "engine": "engine"
    },
    shim: {
        "api-call": ["ajax"] //used to guarantee the order of loading for the listed module
    }
});

require(["engine"], function( Ajax, Extend){
    
});

