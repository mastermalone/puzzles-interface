require.config({
    paths: {
        "ajax": "scripts/modules/ajax.js"
    }
});

require(["engine"], function(Engine){
    Engine.init();
});
