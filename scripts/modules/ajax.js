define(function(){
    "use strict";
    function Ajax () {
       //Constructor
       
       this.defaultURL = "views/header.html";
       console.log("CONSTRUCTING AJAX", this.defaultURL);
    }
    
    Ajax.prototype = {
        constructor: Ajax,
        getData: function (url, callback) {
            var req = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP"), data;
            
            if (!url || url === "") {
                url = this.defaultURL;
            }
            req.onreadystatechange = function() {
                if (req.readyState === 4 && req.status === 200) {
                    data = req.responseText;
                    console.log("STATS", data);
                    
                    if (typeof callback === "function") {
                        callback(data);
                    }                   
                }
            };
            
            req.open("GET", url, true);
            req.send();
        },
        addResponseToDOM: function(el) {
            var res = this.getData("", function(data){
                console.log("HERE IS THE DATA", data);
                var elm = document.getElementById(el);
                elm.innerHTML = data; 
            });
            
            //console.log(res);
        }
    };
    
    return Ajax;
    
});
