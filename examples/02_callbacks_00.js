

function Dog(name, age){
    this.x = this.y = 0;
    this.name = name;
    this.age = age;
};

Dog.prototype.walk = function(x, y){
    this.x += x;
    this.y += y;
};



var fido = new Dog('fido', 2);

console.log(fido);

function something(){
    fido.walk(3, 0);
    console.log(fido);
    delay(function(){
        fido.walk(1, 7);
        console.log(fido);
    } , 1000 )
}

delay( something , 1000 )


