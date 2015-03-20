define(function(){
    function CreateNode () {
        //Constuctor
    }
    
    CreateNode.prototype = {
        constructor: CreateNode,
        makeElement: function (type, attr, attrVal) {
            console.log("Making Element");
            var el = document.createElement(type);
            el.setAttribute(attr, attrVal);
            return el;
        }
    };
    return CreateNode;
});