define(["ajax", "createNode", "extend", "text!../templates/level-select.html"], function(Ajax, CreateNode, Extend, Template){
    
    var LevelSelectView = {
        getView: function (url, el) {
            
            var template = Template, 
            el = document.getElementById("level-select"), 
            main = document.getElementById("main-wrapper"), 
            modal = new CreateNode(), 
            md = modal.makeElement("DIV", "id", "modal-bg"),
            close = new CreateNode(),
            cls = close.makeElement("DIV", "id", "close-btn", "X"); 
            md.innerHTML = template;
            main.appendChild(md);
            /*var ajax = new Ajax();
            ajax.getData(url, function (data) {
                var template = data, 
                el = document.getElementById("level-select"), 
                modal = new CreateNode(), 
                md = modal.makeElement("DIV", "id", "modal-bg");;
                
                md.innerHTML = template;
                //return template;
            });*/
            console.log("value of close:", template);
        }
    };
    
    console.log("Require is working for LEVEL SELECT");
    
    return LevelSelectView; 
});
