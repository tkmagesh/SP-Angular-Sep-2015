/*Sync*/

function addSync(x,y){
    console.log("[SP] processing ", x , " and ", y);
    var result = x + y;
    console.log("[SP] returning result");
    return result;
}

function addSyncClient(x,y){
    console.log("[SC] triggering add");
    var result = addSync(x,y);
    console.log("[SC] result = ", result);
}

/* Async */
function add(x,y, onResult){
    console.log("[SP] processing ", x , " and ", y);
    setTimeout(function(){
        var result = x + y;
        console.log("[SP] returning result");
        onResult(result);
    },3000);
}

function addClient(x,y){
    console.log("[SC] triggering add");
    add(x,y, function(result){
        console.log("[SC] result = ", result);
    });
}
