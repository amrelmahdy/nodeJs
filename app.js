var handler = function(callback){
  console.log("here is handling function")
};

var callback = setTimeout(function () {
    console.log("here is call back")
}, 500);

handler(callback);