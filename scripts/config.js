require.config({
    urlArgs: "bust=" +  (new Date()).getTime(),//Remove before deployment
    paths: {
        "ajax": "modules/ajax",
        "extend": "modules/extend"
    }
});

require(["engine", "ajax", "extend"], function(Engine, Ajax, Extend){
        
    var /*ajax = new Ajax(),*/ ext = new Extend();
    Engine.init();
          
    //ajax.addResponseToDOM("main");
    
    function SubAjax (id) {
        //Ajax.call(this);
        this.id = id;
    }
    
    ext.extend(SubAjax, Ajax);
    
    SubAjax.prototype.newFunction = function (text) {
        console.log(text, this.id);
    };
    
    var sb = new SubAjax("subAjax");
    //console.log("sb:", sb);
    sb.newFunction("HELLO");
    sb.addResponseToDOM("main");
    
});

