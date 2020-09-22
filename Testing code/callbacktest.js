function goShopping(callback){
    console.log("console 1");
    callback();
}

function doneShopping(){
    console.log("Done");
}

goShopping(function(){console.log("Very done");});