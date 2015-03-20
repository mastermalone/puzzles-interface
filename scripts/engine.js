//All Engine related script goes here
require(["ajax", "extend", "events", "createNode", "transitionend"], function(Ajax, Extend, Evt, CreateNode, Transition){
    
    var Engine = {
        date: new Date(),
        init: function () {
            var ext = new Extend(), evt = new Evt();
            
            function SubAjax (id) {
                this.id = id;
            }
            ext.extend(SubAjax, Ajax);
            
            SubAjax.prototype.newFunction = function (text) {
                console.log(text, this.id, "from ENGINE and init()");
            };
            
            sb = new SubAjax("subAjax");
            sb.newFunction("HELLO");
            sb.addResponseToDOM("main");
            evt.addEvent(window, ["mousedown"], this.delegate);
            
        },
        delegate: function (e) {
           switch(e.type){
               case "mousedown":
               switch(e.target.id){
                   case "lv-select-trigger": Engine.buildModal(e, "modal-bg"); break;
                   case "modal-bg": Engine.fade(e); break;
               }
               break;
           }
        },
        buildModal: function (e, el) {
            var theDiv = new CreateNode(), dv, domDv = document.getElementById("modal-bg");
            if(domDv){
                console.log("the element is created", typeof dv);
                Engine.fadeIn(domDv.id);
                return;
            }else{
                dv = theDiv.makeElement("DIV", "id", "modal-bg");
                document.getElementById("main-wrapper").appendChild(dv);
                console.log("Setting up the div", typeof dv.nodeName);
                
                sb.getData("views/level-select.html?a="+Engine.date.getTime(), function(data){
                    var elm = document.getElementById(el);
                    elm.innerHTML = data;
                });
            };
        },
        fade: function (e) {
            var transEnd = Transition.transitionEnd(), evt = new Evt();
            e.target.className = "fade-out";
            evt.addEvent(e.target, [transEnd], Engine.fadeEnded);
            //e.target.style.display = "none";
            console.log("SHOULD BE FADING", transEnd, e.target);
        },
        fadeIn: function (obj) {
            var targ;
            if(typeof obj === "string"){
                targ = document.getElementById(obj);
            }else{
                targ = obj;
            }
            targ.style.display = "block";
            targ.className = "fade-in";
        },
        fadeEnded: function (e) {
            console.log("SHOULD BE DONE ANIMATING");
             e.target.style.display = "none";
        }
    };
    
    Engine.init();
});
