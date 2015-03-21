//All Engine related script goes here
//define(["ajax", "extend", "events", "createNode", "transitionend"], function(Ajax, Extend, Evt, CreateNode, Transition){
define(["ajax", "extend", "events", "level-select", "transitionend"], function(Ajax, Extend, Evt, LevelSelect, Transition){
    
    var Engine = {
        date: new Date(),
        init: function () {
            var ext = new Extend(), evt = new Evt(), lvs = LevelSelect;
            
            function SubAjax (id) {
                this.id = id;
                //Use this to make the API call
            }
            ext.extend(SubAjax, Ajax);
            
            SubAjax.prototype.newFunction = function (text) {
                console.log(text, this.id, "from ENGINE and init()");
            };
            
            sb = new SubAjax("subAjax");
            sb.newFunction("HELLO");
            sb.addResponseToDOM("main");
            evt.addEvent(window, ["mousedown", "mouseover"], this.delegate);
            
            lvs.getView();//Gets the level Select View            
        },
        delegate: function (e) {
           switch(e.type){
               case "mousedown":
               switch(e.target.id){
                   //case "lv-select-trigger": Engine.buildModal(e, "modal-bg"); break;
                   case "lv-select-trigger": Engine.showModal(e, "modal-bg"); break;
                   case "modal-bg": Engine.fade(e); break;
               }
               break;
               case "mouseover":
               //console.log(e.target.id);
               break;
           }
        },
        showModal: function (e, el) {
            Engine.fadeIn("modal-bg");
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
            
            targ.className = "fade-in";
            targ.style.display = "block";
        },
        fadeEnded: function (e) {
            console.log("SHOULD BE DONE ANIMATING");
             e.target.style.display = "none";
        }
    };
    
    return Engine;
});
