
function doSomethingAsync(callback){

    //This:
    setTimeout(function(){
        console.log('1 second has passed');
        callback();
    }, 1000);
    console.log('I\'m being executed before, even though my code comes after');
    return;

    //would be the same as 
    var methodToExecute = function(){
        console.log('1 second has passed');
        callback();
    };
    setTimeout(methodToExecute, 1000);
    return;

    //or even
    setTimeout(callback, 1000);
    return;
    //but this wouldn't print '1 second has passed, only the string in afterDone'
    
}

function afterDone(){
    console.log('this function is Afterdone');
}

//execution starts here;
doSomethingAsync(afterDone);
//could also be 
doSomethingAsync(function(){
    console.log('this function is Afterdone');   
});

